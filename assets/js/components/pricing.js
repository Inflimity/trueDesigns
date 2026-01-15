// components/pricing.js - Pricing card component

import { paypalUrl } from '../utils/helper.js';

export const pricingCard = ({ name, price, original, blurb, features, popular = false }) => `
  <div class="relative rounded-2xl bg-white subtle-border p-6 hover:-translate-y-1 transition transform ${popular ? 'ring-1 ring-teal-500/40 soft-shadow' : ''}">
    ${popular ? `
      <div class="absolute -top-3 left-6">
        <div class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-extrabold text-white shadow-sm">
          <i class="bi bi-stars"></i> Most Popular
        </div>
      </div>
    ` : ''}
    <div class="flex items-start justify-between gap-4">
      <div>
        <div class="text-sm font-extrabold text-slate-900">${name}</div>
        <div class="mt-1 text-sm text-slate-600 leading-6">${blurb}</div>
      </div>
      <div class="text-right">
        <div class="text-xs text-slate-500 line-through">$${original}.00</div>
        <div class="text-3xl font-extrabold text-slate-900">$${price}<span class="text-sm font-bold text-slate-500">.00</span></div>
      </div>
    </div>
    <ul class="mt-5 space-y-2 text-sm text-slate-700">
      ${features.map(f => `
        <li class="flex gap-2">
          <i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>
          <span>${f}</span>
        </li>
      `).join('')}
    </ul>
    <div class="mt-6 flex flex-col gap-3">
      <a href="${paypalUrl(name, price)}" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-3 text-sm font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
        Order Now <span class="ml-2 text-white/90 text-xs font-bold">(PayPal)</span>
      </a>
      <a href="#/contact" class="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
        Get a Free Quote
      </a>
    </div>
  </div>
`;

export const trustRowHTML = () => `
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    ${[
        { icon: "bi-shield-check", title: "100% Satisfaction", desc: "We revise until you're confident." },
        { icon: "bi-lightning-charge", title: "Fast Turnaround", desc: "Clear timelines + quick delivery." },
        { icon: "bi-file-earmark-check", title: "Print/Web Ready", desc: "Production files included." },
        { icon: "bi-globe2", title: "Worldwide Clients", desc: "USA, Canada & global support." },
    ].map(b => `
      <div class="rounded-2xl bg-white subtle-border p-5 hover:-translate-y-1 transition transform">
        <div class="flex items-start gap-3">
          <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800">
            <i class="bi ${b.icon}"></i>
          </div>
          <div>
            <div class="text-sm font-extrabold text-slate-900">${b.title}</div>
            <div class="mt-1 text-sm text-slate-600 leading-6">${b.desc}</div>
          </div>
        </div>
      </div>
    `).join('')}
  </div>
`;