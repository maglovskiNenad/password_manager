# Contributing

## Contributions are welcome! If you'd like to add features or fix bugs, follow these steps:

1. Fork the Repository

Fork the repository on GitHub and clone your fork to your local machine:

    git clone <your-fork-url>
    cd <repository-folder>

2. Create a Feature Branch

Create a new branch for your feature or fix:

    git checkout -b feature/your-feature-name

3. Install Dependencies

- (Optional) Create a Virtual Environment

      python -m venv venv

- On Linux / mavOS

      source venv/bin/activate

- On Windows:

      venv\Scripts\activate

- Install the required Python packages listed in the requirements.txt file:

      pip install -r requirements.txt

- Check if Flask is installed

      pip show flask

- If Flask is not installed, install it:

      pip install flask

- If already installed, check the version:

      python -m flask --version

- The Flask CLI (Command Line Interface) command may not be in the PATH variable. Try running it explicitly with python -m:

      python -m flask run

4. Setting the FLASK_APP variable

- Linix/Mac:

      export FLASK_APP=my_flask_app
      flask run

- Windows(CMD):

      set FLASK_APP=my_flask_app
      flask run

- Windows(Power Shell):

      $env:FLASK_APP = "my_flask_app"
      flask run

5. Run the Application Locally

To start the application locally, run the following command:

    python app.py

This will launch the Flask development server, and you can access the application in your browser at:

    http://127.0.0.1:5000
