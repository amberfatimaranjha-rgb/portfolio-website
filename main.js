console.log("Portfolio loaded");

// ===============================
// MOBILE MENU (simple version)
// ===============================
const nav = document.querySelector(".nav-links");

function toggleMenu() {
    if (!nav) return;
    nav.classList.toggle("active");
}

// if i add a hamburger icon later
const menuIcon = document.getElementById("menuToggle");
if (menuIcon) {
    menuIcon.addEventListener("click", toggleMenu);
}


// ===============================
// DARK / LIGHT MODE TOGGLE
// ===============================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // save preference
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}

// load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}


// ===============================
// TYPING EFFECT (HOME PAGE)
// ===============================
const typingEl = document.getElementById("typing");

if (typingEl) {
    const words = [
        "Web Developer",
        "MBO Software Student",
        "Frontend Designer",
        "JavaScript Learner"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingEl.textContent = currentWord.substring(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 60 : 100);
    }

    typeEffect();
}


// ===============================
// PROJECT FILTER (PROJECT PAGE)
// ===============================
function filterProjects(category) {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else {
            card.style.display = card.classList.contains(category)
                ? "block"
                : "none";
        }
    });
}

// expose to HTML buttons
window.filterProjects = filterProjects;


// ===============================
// CONTACT FORM VALIDATION
// ===============================
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const error = document.getElementById("error");

    if (!name || !email || !message) return false;

    if (name.value.trim().length < 2) {
        error.textContent = "Name is too short";
        error.style.color = "red";
        return false;
    }

    if (!email.value.includes("@")) {
        error.textContent = "Invalid email address";
        error.style.color = "red";
        return false;
    }

    if (message.value.trim().length < 10) {
        error.textContent = "Message must be at least 10 characters";
        error.style.color = "red";
        return false;
    }

    error.textContent = "Message sent successfully!";
    error.style.color = "lightgreen";

    return false; // prevent reload (demo purpose)
}

// expose to HTML form
window.validateForm = validateForm;


// ===============================
// ACTIVE LINK HIGHLIGHT
// ===============================
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});