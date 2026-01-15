// utils/helper.js - Core utility functions

// DOM selection helpers
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// PayPal URL generation
const PAYPAL_BASE = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=info@td-designs.com&currency_code=USD";

export const paypalUrl = (itemName, amount) =>
    `${PAYPAL_BASE}&item_name=${encodeURIComponent(itemName)}&amount=${encodeURIComponent(Number(amount).toFixed(2))}`;

// Meta tags management
export const setMeta = ({ title, description, keywords, canonical }) => {
    document.title = title;

    const setOrCreate = (nameOrProp, value, isProp = false) => {
        let el = document.querySelector(`meta[${isProp ? 'property' : 'name'}="${nameOrProp}"]`);
        if (!el) {
            el = document.createElement('meta');
            el.setAttribute(isProp ? 'property' : 'name', nameOrProp);
            document.head.appendChild(el);
        }
        el.setAttribute('content', value);
    };

    setOrCreate("description", description);
    setOrCreate("keywords", keywords);

    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
        canon = document.createElement('link');
        canon.rel = "canonical";
        document.head.appendChild(canon);
    }
    canon.href = canonical || "https://td-designs.com/";
};

// Hash scrolling
export const scrollToHash = () => {
    const { hash } = new URL(location.href);
    if (hash && hash.startsWith("#/pricing#")) {
        const anchor = hash.split("#/pricing")[1];
        setTimeout(() => {
            const el = document.querySelector(anchor);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    }
};

// Route parsing
export const parseRoute = () => {
    const hash = location.hash || "#/home";
    const parts = hash.split("#");
    const path = parts[1] ? `/${parts[1].replace(/^\/?/, "")}` : "/home";
    return { path: path === "//home" ? "/home" : path.replace("//", "/"), raw: hash };
};