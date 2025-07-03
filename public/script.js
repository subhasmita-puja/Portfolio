// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize typed.js for role animation
    if (typeof Typed !== 'undefined') {
        new Typed('.role', {
            strings: [
                " Full Stack Developer",
                 " Web Developer",
                 " Frontend Developer",
                 " Coder",
                 "React Devloper",
                " UI-UX Designer",
                 "Subhasmita Sahoo",
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Hamburger menu functionality
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const navItems = document.getElementById("mobileMenu");

    if (hamburgerIcon && navItems) {
        // Toggle mobile menu
        hamburgerIcon.addEventListener("click", function (e) {
            e.stopPropagation();
            navItems.classList.toggle("show");
            
            // Change hamburger icon
            const icon = hamburgerIcon.querySelector("i");
            if (icon) {
                if (navItems.classList.contains("show")) {
                    icon.className = "fa-solid fa-times";
                } else {
                    icon.className = "fa-solid fa-bars";
                }
            }
        });

        // Close mobile menu when clicking on nav links
        const navLinks = navItems.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navItems.classList.remove("show");
                const icon = hamburgerIcon.querySelector("i");
                if (icon) {
                    icon.className = "fa-solid fa-bars";
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburgerIcon.contains(event.target) && !navItems.contains(event.target)) {
                navItems.classList.remove("show");
                const icon = hamburgerIcon.querySelector("i");
                if (icon) {
                    icon.className = "fa-solid fa-bars";
                }
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                if (navItems && navItems.classList.contains('show')) {
                    navItems.classList.remove('show');
                    const icon = hamburgerIcon.querySelector("i");
                    if (icon) {
                        icon.className = "fa-solid fa-bars";
                    }
                }
                
                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id], .hero[id]');
    const navLinksAll = document.querySelectorAll('.nav-item a');

    function highlightNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    function handleNavbarScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        highlightNavLink();
        handleNavbarScroll();
    });

    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '⬆️';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #7b4397, #dc2430);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(backToTopBtn);

    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    });

    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.transform = 'scale(1.1)';
    });

    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.transform = 'scale(1)';
    });

    window.addEventListener('scroll', toggleBackToTopButton);
});

// Email sending function
function sendEmail() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    // Basic validation
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields");
        return;
    }

    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Send email using EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.send("service_xbeh6nj", "template_yvev1t8", templateParams)
            .then(() => {
                alert("Email sent successfully!");
                // Clear form
                document.querySelector("#name").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#subject").value = "";
                document.querySelector("#message").value = "";
            })
            .catch(() => {
                alert("Failed to send email. Please try again.");
            });
    } else {
        alert("Email service not available. Please contact directly at subhasmita4602@gmail.com");
    }
}