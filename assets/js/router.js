// router.js - Main application router

import { $, $$, parseRoute, scrollToHash } from './utils/helper.js';
import { initCarousel } from './features/carousel.js';
import { initAccordions } from './features/accordion.js';
import { initLightbox } from './features/lightbox.js';
import { closeDropdown } from './features/dropdown.js';
import { closeMobileMenu } from './features/mobile-menu.js';
import { initGalleries } from './features/gallery.js';
import { initPricingJump } from './features/pricing-jump.js';
import { initPortfolioFilters } from './features/portfolio-filters.js';

// Import all pages
import HomePage from './pages/home.js';
import LogoDesignPage from './pages/logo-design.js';
import DigitalAdsPage from './pages/digital-ads.js';
import StationeryPage from './pages/stationery.js';
import GraphicDesignPage from './pages/graphic-design.js';
import WebDesignPage from './pages/web-design.js';
import EcommercePage from './pages/ecommerce.js';
import PricingPage from './pages/pricing.js';
import PortfolioPage from './pages/portfolio.js';
import AboutPage from './pages/about.js';
import ContactPage from './pages/contact.js';

// Route configuration
const routes = {
    "/home": HomePage,
    "/": HomePage,
    "/logo-design": LogoDesignPage,
    "/digital-ads-banner-design": DigitalAdsPage,
    "/custom-tshirt-merch-design": StationeryPage,
    "/graphic-design": GraphicDesignPage,
    "/web-design": WebDesignPage,
    "/e-commerce-website": EcommercePage,
    "/pricing": PricingPage,
    "/portfolio": PortfolioPage,
    "/about-us": AboutPage,
    "/contact": ContactPage
};

// Main render function
export const render = () => {
    const { path } = parseRoute();
    const page = routes[path] || HomePage;
    $("#app").innerHTML = page();

    // Track SPA page view with Facebook Meta Pixel
    if (typeof fbq === 'function') {
        fbq('track', 'PageView');
    }

    // Set year in footer
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Initialize all interactive components
    initCarousel();
    initAccordions();
    initGalleries();
    initPricingJump();
    initPortfolioFilters();

    // Handle lightbox image sources
    $$("[data-lightbox]").forEach(btn => {
        btn.addEventListener("click", () => {
            const img = btn.querySelector("img");
            const src = img?.getAttribute("src") || img?.src || "";
            btn.setAttribute("data-src", src);
        }, { once: false });
    });

    // Scroll to pricing anchor if present
    scrollToHash();

    // Close menus after navigation
    closeDropdown();
    closeMobileMenu();

    // Scroll to top on new page route (but not for in-page pricing anchors)
    if (!(location.hash || "").includes("#/pricing#")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

// Initialize router
export const initRouter = () => {
    // Initialize lightbox once
    initLightbox();

    // Set up event listeners
    window.addEventListener("hashchange", render);

    window.addEventListener("DOMContentLoaded", () => {
        if (!location.hash) location.hash = "#/home";
        render();
    });
};