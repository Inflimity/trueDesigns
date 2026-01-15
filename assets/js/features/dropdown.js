// features/dropdown.js - Desktop dropdown menu functionality

let dropdownRoot = null;
let dropdownBtn = null;
let dropdownMenu = null;

export const closeDropdown = () => {
    if (!dropdownMenu) return;
    dropdownMenu.classList.add("hidden");
    dropdownBtn?.setAttribute("aria-expanded", "false");
};

export const openDropdown = () => {
    if (!dropdownMenu) return;
    dropdownMenu.classList.remove("hidden");
    dropdownBtn?.setAttribute("aria-expanded", "true");
};

export const initDropdown = () => {
    dropdownRoot = document.querySelector("[data-dropdown]");
    dropdownBtn = document.querySelector("[data-dropdown-btn]");
    dropdownMenu = document.querySelector("[data-dropdown-menu]");

    if (!dropdownBtn || !dropdownMenu) return;

    // Toggle dropdown on button click
    dropdownBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const isHidden = dropdownMenu.classList.contains("hidden");
        isHidden ? openDropdown() : closeDropdown();
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdownRoot) return;
        if (!dropdownRoot.contains(e.target)) closeDropdown();
    });
};