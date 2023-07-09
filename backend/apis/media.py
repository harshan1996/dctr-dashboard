from flask import Blueprint, request, Response
from config import MODEL_PATH, AUDIO_DIR
import os
import json
from utils.media import asr_obj

media_api = Blueprint("media", __name__)


@media_api.route("/upload", methods=["POST"])
def upload():
    try:
        if request.method == "POST":
            file = request.files["file"]
            file.save("uploads/audio/"+file.filename)
            model = os.path.join(MODEL_PATH, "asr-model")
            asr_obj.load_model(model)
            hindi_speech = asr_obj.get_trans(f"{AUDIO_DIR}/{file.filename}")
            print(hindi_speech)
            # os.remove(audio_path)
            response_payload = {"message": "Data found",
                                "Transcript": hindi_speech,
                                "response": True}
            with open("asr_results.txt","w") as asr_results:
                asr_results.write(hindi_speech)
            return Response(json.dumps(response_payload), mimetype="application/json", status=200)

    except Exception as error:
        print("api", error)
        response_payload = {"message": "Internal Server Error",
                            "detail": error.__str__(),
                            "response": False}
        return Response(json.dumps(response_payload),
                        mimetype="application/json",
                        status=500)

@media_api.route("/fetch/asr/results", methods=["GET"])
def fetch():
    with open("asr_results.txt") as asr_results:
        return {"data":asr_results.read()}