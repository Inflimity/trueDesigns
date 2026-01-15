// features/carousel.js - Testimonials carousel functionality

import { $, $$ } from '../utils/helper.js';

export const initCarousel = () => {
    const track = $("#t-track");
    if (!track) return;

    const slides = $$("#t-track > .t-slide");
    let idx = 0;

    const render = () => {
        slides.forEach((s, i) => {
            s.classList.toggle("hidden", i !== idx);
        });
        $("#t-indicator").textContent = `${idx + 1} / ${slides.length}`;
    };

    render();

    $("#t-prev")?.addEventListener("click", () => {
        idx = (idx - 1 + slides.length) % slides.length;
        render();
    });

    $("#t-next")?.addEventListener("click", () => {
        idx = (idx + 1) % slides.length;
        render();
    });

    // Auto-advance
    const interval = setInterval(() => {
        if (!document.body.contains(track)) {
            clearInterval(interval);
            return;
        }
        idx = (idx + 1) % slides.length;
        render();
    }, 6500);
};