// js/index.js — Responsive sidebar toggle (right side) + accessibility

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const navbar = document.querySelector(".navbar");
  const mainNav = document.getElementById("main-nav");
  const navLinks = mainNav.querySelectorAll("a");

  function openMenu() {
    mainNav.classList.add("open");
    navbar.classList.add("active");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mainNav.classList.remove("open");
    navbar.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  // Toggle open/close when clicking hamburger
  menuBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking × button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // Close when clicking a nav link (mobile only)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 992) closeMenu();
    });
  });

  // Optional: close when clicking outside sidebar on mobile
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 992 &&
      !mainNav.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      mainNav.classList.contains("open")
    ) {
      closeMenu();
    }
  });

  // Auto-close on resize to large screen
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });
});
