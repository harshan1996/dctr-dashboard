from flask import request, Blueprint

users_api = Blueprint("users", __name__)


@users_api.route("/users/login", methods=['POST'])
def user_login():
    # get user data
    if request.method == "POST":
        data = request.get_json()
        if data["username"] != "" and data["password"] != "":
            return {
                "message": "login successful",
                "response": True,
                "status": 200
            }
        else:
            return {
                "message": "please enter the email and password",
                "status": 400
            }


@users_api.route("/home", methods=['GET'])
def home():
    with open("result_slice.txt", "r") as f:
        # list of overall conversation
        overall_text = f.read().split("\n")

        # only patient's conversation
        patient_text = [overall_text[i].strip(
            "मरीज :") for i in range(0, len(overall_text), 2)]

        # return {"data": overall_text}
        return {"data": patient_text}


@users_api.route("/decode", methods=["GET"])
def decode():
    import json
    f = open("results_140000.json")
    data = json.load(f)

    results = []

    for i in data:
        for num in range(3, len(i["word_attention"])-1):
            results.append([i["word_attention"][num][0],
                           i["word_attention"][num][1]])

    return {"data": results}
