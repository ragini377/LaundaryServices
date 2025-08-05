


window.addEventListener("DOMContentLoaded", function () {
    emailjs.init("VoSKZ7mJb4nN_xW7j");

  
  const addItemMsg = document.getElementById("additemMsgshow");
  const bookingConfirm = document.getElementById("booking-confirm");
    const form = document.getElementById("contact-form");
     const table = document.getElementById("serviceTable");
     document.querySelectorAll(".addServiceBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (table.querySelector("td")) {
      bookingConfirm.innerHTML = "";
    }
  });
});


    form.addEventListener("submit", function (event) {
      event.preventDefault();
        if (!form.checkValidity()) {
      form.reportValidity(); // Show native browser validation
      return;
    }
       const isVisible = window.getComputedStyle(addItemMsg).display === "block";


    if (isVisible) {
      bookingConfirm.innerHTML = " &#x2296; Add Services For Booking";
      bookingConfirm.style.color = "red";
      return; // Stop form submission
    }
    
    const hasTD = table.querySelector("td") ? true : false;
    if (!hasTD) {
      bookingConfirm.innerHTML = "&#x2296; No services added to the table.";
      bookingConfirm.style.color = "red";
      return;
    }
     else {
  // Clear message if valid
  bookingConfirm.innerHTML = "";
       }
    
  
      emailjs.sendForm("service_99nduch", "template_nihvsxt", form)
        .then(() => {
          document.getElementById("booking-confirm").innerHTML = " “Thank you For Booking the Service.We contact you soon!”"
          bookingConfirm.style.color = "green";
          // alert("✅ Email sent to user.");
          form.reset();
        })
        .catch((error) => {
          console.error("❌ Email send failed:", error);
          alert("Something went wrong. Try again.");
        });
    });
  });
