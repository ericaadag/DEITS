document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission
    alert("Thank you for reaching out! We will get back to you shortly.");
    this.request();
});