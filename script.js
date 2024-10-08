// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
    // Navigation Toggle Button
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const header = document.querySelector("[data-header]");
    const navLinks = document.querySelectorAll(".navbar-link");
    const backToTopBtn = document.querySelector("[data-back-to-top]");
  
    // Toggle navigation menu for mobile view
    navToggleBtn.addEventListener("click", () => {
      header.classList.toggle("active"); // Toggles active class on the header (shows/hides nav)
    });
  
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        header.classList.remove("active");
      });
    });
  
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Form validation for the contact form
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
  
        if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields.");
          e.preventDefault(); // Prevents form from submitting if validation fails
          return;
        }
  
        // Basic email validation
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          e.preventDefault(); // Prevents form from submitting if email is invalid
        }
      });
    }
  
    // Portfolio filtering functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-card");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        const filter = button.getAttribute("data-filter");
  
        portfolioItems.forEach(item => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.classList.add("show"); // Adds animation class to show the items
            item.style.display = "block";
          } else {
            item.classList.remove("show"); // Removes animation class to hide the items
            item.style.display = "none";
          }
        });
  
        // Toggle active state for filter buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });
  
  // Your specific scroll functionality block (intact)
  const backTopBtn = document.querySelector("[data-back-to-top]");
  const header = document.querySelector("[data-header]");
  
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active"); // Makes the header visible when scrolled down
      backTopBtn.classList.add("active"); // Shows the back-to-top button
    } else {
      header.classList.remove("active"); // Hides the header again if scrolled to the top
      backTopBtn.classList.remove("active"); // Hides the back-to-top button
    }
  });
  