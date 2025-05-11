const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');
    
    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');

});

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
});
// scrolling 
const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    
});

ScrollReveal().reveal('.header__container .btn', {
    ...scrollRevealOption,
    delay: 500,
});

// about
ScrollReveal().reveal('.about__item', {
    ...scrollRevealOption,
    interval: 500,
});

// services
ScrollReveal().reveal('.service', {
    ...scrollRevealOption,
    interval: 500,
});

// //contact//
(function () {
    emailjs.init("JaplQphcvOCFTjYcf"); // ✅ Use your actual PUBLIC KEY here
})();

// Function to send email using EmailJS
function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_w3r1v0c', 'template_eae956a', event.target)
        .then(function () {
            alert("Message sent successfully!");
            event.target.reset(); // Optionally reset the form after submission
        }, function (error) {
            console.error("FAILED...", error);
            alert("Failed to send the message. Please try again.");
        });
}

// Add event listener to the form on page load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", sendEmail);
    }
});