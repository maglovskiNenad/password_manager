$(document).ready(function () {
  // Kada korisnik klikne na dugme "Generate"
  $("#generateBtn").click(function () {
    // Poslati POST zahtev na Flask server
    $.ajax({
      url: "/generate_password",
      method: "POST",
      success: function (response) {
        // Kada se uspešno generiše lozinka, prikaži je u inputu
        $("#generatedPassword").val(response.password);
        $("#passwordDisplay").text(response.password);
      },
      error: function (error) {
        alert("Error generating password");
      },
    });
  });
});
