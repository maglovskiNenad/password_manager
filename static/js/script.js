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

const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggleButton.textContent = "🌙";
  } else {
    themeToggleButton.textContent = "&#x2600;";
  }
});
