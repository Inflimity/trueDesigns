// features/gallery.js - Gallery interaction handlers

import { $$ } from '../utils/helper.js';
import { openLightbox } from './lightbox.js';

export const initGalleries = () => {
    $$("[data-lightbox]").forEach((el) => {
        // Click handler
        el.addEventListener("click", () => {
            const src = el.getAttribute("data-src");
            const title = el.getAttribute("data-title") || "Preview";
            openLightbox(src, title);
        });

        // Keyboard accessibility
        el.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                el.click();
            }
        });
    });
};