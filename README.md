![Password_menager jpg](https://github.com/user-attachments/assets/acc9d651-5b69-4d3d-b2b9-1d0b1a74f79e)

# Password Manager - Python GUI/Web Application

A lightweight and secure password generator and manager built using Python. This project provides an intuitive user interface for generating and saving strong passwords, and it can be hosted as a web application using platforms like Render.

## Features
### Strong Password Generation
Generate secure, random passwords of customizable length using Python's cryptographic libraries.

### Local File Storage
Save generated passwords to a file on your local machine to keep track of them. The application ensures:

  - Appending new passwords to an existing file.
  - Creating a new file if none exists.
  - Cross-Platform Access

GUI Mode: A graphical interface for local users.
Web Mode: Hosted on Render for easy access from any device with a browser.
Serverless Architecture
Designed to work without a backend database, ensuring simplicity and security.

Secure Practices
The application focuses on user privacy, ensuring no passwords are stored on the server in web mode.

## How It Works
Password Generation:
- Enter the website/service name and the desired password length.
- Generate a password using a random combination of letters, numbers, and symbols.
     
Adding Passwords:
- Click "Add to File" to save the password along with the website name into a local file (passwords.txt).
     
Downloading Passwords:
- If using the web app, download the file containing all your saved passwords.
     
Reusing or Updating Password Files:
- The application automatically checks if the password file exists.
- If found, new entries are appended; otherwise, a new file is created.


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

## Limitations
  - The passwords file is not stored on the server but is downloadable for local use.
  - Ensure the downloaded file is stored securely to prevent unauthorized access.
    
## Security Notes
  - Passwords are generated randomly and are not stored on the server for security reasons.
  - Use the generated passwords responsibly, and do not share your passwords file with others.
    
## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.
We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch:
   
       git checkout -b feature-new-functionality
   
3. Commit your changes:

     
        git commit -m "Add new functionality"

4. Push to the branch:

       git push origin feature-new-functionality
   
6. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
