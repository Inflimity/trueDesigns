// features/portfolio-filters.js - Portfolio filter tabs functionality

import { $$ } from '../utils/helper.js';

export const initPortfolioFilters = () => {
    const tabs = $$("[data-portfolio-tab]");
    const panes = $$("[data-portfolio-pane]");

    if (!tabs.length) return;

    const activate = (key) => {
        // Update tab styles
        tabs.forEach(t => {
            const active = t.getAttribute("data-portfolio-tab") === key;
            t.classList.toggle("bg-slate-900", active);
            t.classList.toggle("text-white", active);
            t.classList.toggle("bg-white", !active);
            t.classList.toggle("text-slate-800", !active);
            t.classList.toggle("border-slate-200/70", !active);
        });

        // Show/hide panes
        panes.forEach(p => {
            p.classList.toggle("hidden", p.getAttribute("data-portfolio-pane") !== key);
        });
    };

    // Add click handlers
    tabs.forEach(t => {
        t.addEventListener("click", () => {
            activate(t.getAttribute("data-portfolio-tab"));
        });
    });

    // Activate first tab by default
    if (tabs[0]) {
        activate(tabs[0].getAttribute("data-portfolio-tab"));
    }
};