from flask import Flask, request, render_template, jsonify
import random
import string

app = Flask(__name__, static_folder="static")


def generate_password(length=25):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = "".join(random.choice(characters) for i in range(length))
    return password


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/", methods=["POST"])
def generate():
    if request.method == "POST":
        # Generise lozinku
        password = generate_password()
        # Spremi lozinku
        return jsonify({"password": password})
    return render_template("index.html", password=None)


if __name__ == "__main__":
    app.run(debug=True)
