/*

    Function to check if the generated password contains uppercase letters
    and updates the state of the checkbox accordingly.
      
    If the password contains uppercase and 
    lowercase letters,special characters,numbers:
    - The checkbox will be checked (selected).
    - The background color of the checkbox will be black.
     
    If the password does not contain uppercase letters 
    and lowercase letters,special characters,numbers:
    - The checkbox will be unchecked.
    - The background color of the checkbox will turn red.


*/

function checkThePassword(password) {
  upercaseLetters = document.getElementsByClassName(".inputL");
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

  if (password == "" || regex.test(password) === false) {
  } else {
  }
}

/* 

This API endpoint generates a secure random password based
 on user-defined parameters such as length, character types 
 (letters, numbers, symbols), and complexity requirements. It 
 returns the generated password in plain text for immediate use.

  */
// Wait for the DOM to be fully loaded
$(document).ready(function () {
  // Attach a click event listener to the button with ID "generateBtn"
  $("#generateBtn").click(function () {
    // Make an AJAX POST request to the "/generate_password" endpoint
    $.ajax({
      url: "/generate_password", // The server route that generates the password
      method: "POST", // HTTP method used for the request

      // If the request is successful
      success: function (response) {
        // Set the generated password into the input field with ID "generatedPassword"
        $("#generatedPassword").val(response.password);
        checkThePassword(response.password);
        // Display the generated password in the element with ID "passwordDisplay"
        $("#passwordDisplay").text(response.password);
      },
      // If an error occurs during the request
      error: function (error) {
        // Show an alert to the user indicating an error occurred
        alert("Error generating password!");
      },
    });
  });
});

/* 


This function copies the password from an input field to the 
clipboard. It retrieves the value of the input field, copies 
it to the user's clipboard, and optionally provides feedback 
(e.g., a message or alert) indicating the action was successful.

*/

// Add a click event listener to the button with ID "copyBtn"
$("#copyBtn").on("click", function () {
  // Get the password input field and the message display element
  const passwordInput = $("#generatedPassword");
  const copyMsg = $("#copyMsg");

  const trimedPassword = passwordInput.val().trim();
  // Check if the password input is empty
  if (trimedPassword == "") {
    // Show an error message if no password is generated
    checkThePassword(trimedPassword);
    copyMsg.text("Please generate a password first.").css("color", "red");
    setTimeout(() => copyMsg.text(""), 3000); // Clear the message after 3 seconds
    return; // Stop further execution
  }

  // Select the text inside the password input field
  passwordInput.select();
  passwordInput[0].setSelectionRange(0, 99999); // Select all text (for compatibility)

  try {
    // Attempt to copy the selected text to the clipboard
    document.execCommand("copy");
    // Show a success message if copying was successful
    copyMsg.text("Password copied to clipboard!").css("color", "black");
  } catch (error) {
    // Show an error message if copying failed
    copyMsg.text("Failed to copy password.").css("color", "red");
  }

  // Clear the message after 3 seconds
  setTimeout(() => copyMsg.text(""), 3000);
});

/*

This function toggles the website's theme between 
light and dark modes. It switches CSS classes or 
modifies styles dynamically, ensuring the user's 
preference is applied and optionally saved (e.g., in local storage)
 for future visits.

*/
$("#toggleBtn").on("click", function () {
  document.body.classList.toggle("dark-theme");
});
