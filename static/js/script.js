$(document).ready(function () {
  $("#generateBtn").click(function () {
    $.ajax({
      url: "/generate_password",
      method: "POST",
      success: function (response) {
        $("#generatedPassword").val(response.password);
        $("#passwordDisplay").text(response.password);
      },
      error: function (error) {
        alert("Error generating password!");
      },
    });
  });
});

$("#copyBtn").on("click", function () {
  const passwordInput = $("#generatedPassword");
  const copyMsg = $("#copyMsg");

  if (passwordInput.val().trim() == "") {
    copyMsg.text("Please generate a password first.").css("color", "red");
    return;
  }

  passwordInput.select();
  passwordInput[0].setSelectionRange(0, 99999);

  try {
    document.execCommand("copy");
    copyMsg.text("Password copied to clipboard!").css("color", "black");
  } catch (error) {
    copyMsg.text("Failed to copy password.").css("color", "red");
  }
  setTimeout(() => copyMsg.text(""), 3000);
});
