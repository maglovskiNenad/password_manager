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
