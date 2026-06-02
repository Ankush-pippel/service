// =========================
// LUCIDE ICONS
// =========================

lucide.createIcons();

// =========================
// MOBILE MENU
// =========================

const navMenu = document.getElementById("navMenu");
const menuIcon = document.getElementById("menuIcon");
const hamburger = document.querySelector(".hamburger");

if (hamburger) {
    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuIcon.setAttribute("data-lucide", "x");
        } else {
            menuIcon.setAttribute("data-lucide", "menu");
        }

        lucide.createIcons();
    });
}

// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuIcon) {
            menuIcon.setAttribute("data-lucide", "menu");
        }

        lucide.createIcons();
    });
});

// =========================
// CART PLACEHOLDER
// =========================

let cartCount = 0;

function updateCartCount() {

    const cartBadge = document.querySelector(".cart-count");

    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }
}

// =========================
// FUTURE LOGIN BUTTON
// =========================

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        console.log("Login system coming soon");

    });

}

// =========================
// PAGE LOADED
// =========================

document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();

});