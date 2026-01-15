// features/accordion.js - FAQ accordion functionality

import { $, $$ } from '../utils/helper.js';

export const initAccordions = () => {
    $$("[data-accordion]").forEach((acc) => {
        const items = $$("[data-acc-item]", acc);

        items.forEach((item) => {
            const btn = $("[data-acc-btn]", item);
            const panel = $("[data-acc-panel]", item);

            btn?.addEventListener("click", () => {
                const expanded = btn.getAttribute("aria-expanded") === "true";

                // Close others
                items.forEach((it) => {
                    const b = $("[data-acc-btn]", it);
                    const p = $("[data-acc-panel]", it);
                    b?.setAttribute("aria-expanded", "false");
                    p?.classList.add("hidden");
                });

                if (!expanded) {
                    btn.setAttribute("aria-expanded", "true");
                    panel.classList.remove("hidden");
                }
            });
        });
    });
};