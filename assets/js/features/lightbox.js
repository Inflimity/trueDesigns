// features/lightbox.js - Lightbox modal functionality

import { $ } from '../utils/helper.js';

export const openLightbox = (src, title = "Preview") => {
    $("#lightboxTitle").textContent = title;
    $("#lightboxImg").src = src || "";
    $("#lightbox").classList.remove("modal-hidden");
    document.body.style.overflow = "hidden";
};

export const closeLightbox = () => {
    $("#lightbox").classList.add("modal-hidden");
    $("#lightboxImg").src = "";
    document.body.style.overflow = "";
};

export const initLightbox = () => {
    // Close modal on button click
    document.addEventListener("click", (e) => {
        if (e.target && e.target.closest && e.target.closest("#lightbox [data-close]")) {
            closeLightbox();
        }
    });

    // Close modal on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });
};