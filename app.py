"""Importing the flask possibility"""
from flask import Flask, request, render_template, jsonify
import random
import string

app = Flask(__name__)


def generate_password(length=25):
    """Generate the password"""
    characters = string.ascii_letters + string.digits + string.punctuation
    password = "".join(random.choice(characters) for i in range(length))
    return password


@app.route("/")
def index():
    """Rendering the html page"""
    return render_template("index.html")


@app.route("/generate_password", methods=["POST"])
def generate():
    """Sending generated password to frontend"""
    if request.method == "POST":
        password = generate_password()
        return jsonify({"password": password})
    return render_template("index.html", password=None)


if __name__ == "__main__":
    app.run(debug=True)
