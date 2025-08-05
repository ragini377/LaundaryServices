window.addEventListener("DOMContentLoaded", function () {
    emailjs.init("VoSKZ7mJb4nN_xW7j");

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_99nduch", "template_nihvsxt", form)
        .then(() => {
          document.getElementById("booking-confirm").innerHTML = " “Thank you For Booking the Service.We contact you soon!”"
          // alert("✅ Email sent to user.");
          form.reset();
        })
        .catch((error) => {
          console.error("❌ Email send failed:", error);
          alert("Something went wrong. Try again.");
        });
    });
  });


