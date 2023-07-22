from flask import Blueprint, request, Response
import os,json
from utils.media import asr_obj

media_api = Blueprint("media", __name__)


@media_api.route("/upload", methods=["POST"])
def upload():
    try:
        if request.method == "POST":
            file = request.files["file"]

            with open("result_slice.txt", "r") as asr_results:
                data = asr_results.read()
            response_payload = {"message": "Data found",
                                "Transcript": data,
                                "response": True}
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
