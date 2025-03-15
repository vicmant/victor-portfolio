document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    document.querySelectorAll('.navbar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Submission (Basic Email Sending via FormSubmit)
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const form = this;
        const formStatus = document.getElementById("form-status");

        fetch("https://formsubmit.co/victorkipz1998@gmail.com", {
            method: "POST",
            body: new FormData(form)
        })
        .then(response => response.ok ? "Message sent successfully!" : "Failed to send message.")
        .then(message => {
            formStatus.textContent = message;
            formStatus.style.color = message.includes("successfully") ? "green" : "red";
            form.reset();
        })
        .catch(() => {
            formStatus.textContent = "An error occurred. Please try again.";
            formStatus.style.color = "red";
        });
    });
});
