![Password_menager jpg](https://github.com/user-attachments/assets/acc9d651-5b69-4d3d-b2b9-1d0b1a74f79e)
# Password Manager

A simple Python-based password generator and manager, hosted on Render, allowing users to generate, store, and download passwords securely.

## Features
  - Password Generation: Generate strong, random passwords of customizable length.
  - File Management: Add generated passwords to a local file (passwords.txt) for easy tracking.
  - Download Capability: Save your passwords file to your computer for secure storage.
  - Web-based: Accessible through a browser, no installation required.

## Installation (For Local Use)
To run the application on your local machine:

      git clone https://github.com/maglovskiNenad/password_manager.git
      cd password-manager

Install dependencies:

    pip install flask
    
Run the application:

    python app.py

Open the app in your browser:
Navigate to http://127.0.0.1:5000.

### Limitations
  - The passwords file is not stored on the server but is downloadable for local use.
  - Ensure the downloaded file is stored securely to prevent unauthorized access.
    
### Security Notes
  - Passwords are generated randomly and are not stored on the server for security reasons.
  - Use the generated passwords responsibly, and do not share your passwords file with others.
    
### Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
