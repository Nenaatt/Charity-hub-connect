function validateDonation() {
    const form = document.getElementById("donation-form");

    const name = form.elements["donorName"].value.trim();
    const email = form.elements["donorEmail"].value.trim();
    const amount = form.elements["donationAmount"].value.trim();
    const payment = form.elements["paymentMethod"].value;

    if (name === "") {
        alert("Please enter your name!");
        form.elements["donorName"].focus();
        return false;
    }

    if (email === "") {
        alert("Please enter your email!");
        form.elements["donorEmail"].focus();
        return false;
    }

    const at = email.indexOf("@");
    const dot = email.lastIndexOf(".");
    if (at < 1 || dot - at < 2 || dot === email.length - 1) {
        alert("Please enter a valid email address!");
        form.elements["donorEmail"].focus();
        return false;
    }

    if (amount === "" || isNaN(amount) || Number(amount) < 10) {
        alert("Minimum donation is RM10. Please enter a valid amount.");
        form.elements["donationAmount"].focus();
        return false;
    }

    if (payment === "") {
        alert("Please select a payment method.");
        form.elements["paymentMethod"].focus();
        return false;
    }

    alert("Thank you for your donation!");
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("donation-form").addEventListener("submit", function (e) {
        if (!validateDonation()) {
            e.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
      }
      setTimeout(showSlides, 5000); 
    }
  });
  
  
function validateContact() {
    if (document.contactForm.name.value == "") {
        alert("Please enter your name!");
        document.contactForm.name.focus();
        return false;
    }

    if (document.contactForm.email.value == "") {
        alert("Please enter your email!");
        document.contactForm.email.focus();
        return false;
    }

    let email = document.contactForm.email.value;
    let at = email.indexOf("@");
    let dot = email.lastIndexOf(".");
    if (at < 1 || (dot - at < 2)) {
        alert("Please enter a valid email address!");
        document.contactForm.email.focus();
        return false;
    }

    if (document.contactForm.subject.value == "") {
        alert("Please enter the subject!");
        document.contactForm.subject.focus();
        return false;
    }

    if (document.contactForm.message.value == "") {
        alert("Please enter your message!");
        document.contactForm.message.focus();
        return false;
    }

    alert("Thank you for contacting us! We'll get back to you soon.");
    return true;
}
 
 document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
        this.querySelector('.dropdown-content').classList.toggle('show');
    });
});

function navigateDropdown(value) {
  if (value) {
    window.location.href = value;
  }
}
