// pages/photo-to-art.js
import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';

export default function PhotoToArtPage() {
    setMeta({
        title: "Photo to Custom Art Services | True Designs",
        description: "Transform your photos into stunning custom artwork. Oil paintings, watercolors, pop art, and more created by professional artists.",
        keywords: "photo to art, custom portraits, digital art from photo, pet portraits, wedding art, travel photo art",
        canonical: "https://td-designs.com/photo-to-art"
    });

    return `
    <main class="page photo-to-art">
      <!-- ================= HERO ================= -->
      <section class="hero hero-art py-20 bg-slate-50">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="hero-copy">
              <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Turn Your Photos Into <span class="text-blue-600">Timeless Art</span>
              </h1>
              <p class="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Transform portraits, pets, weddings, and travel photos into
                stunning custom artwork — crafted by professional artists,
                not filters.
              </p>

              <div class="flex flex-col sm:flex-row gap-4">
                <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-8 py-4 text-base font-extrabold text-white hover:opacity-95 transition shadow-lg">
                  Start Your Art Project
                </a>
                <a href="#styles" class="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-8 py-4 text-base font-bold text-slate-800 hover:bg-slate-50 transition">
                  View Art Styles
                </a>
              </div>
            </div>

            <div class="hero-visual rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="assets/images/photo-to-art-hero.jpg"
                alt="Before and after photo to art transformation"
                class="w-full h-auto object-cover"
                onerror="this.src='https://images.unsplash.com/photo-1549887552-93e95b52520e?auto=format&fit=crop&w=800&q=80'"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ================= TRUST STRIP ================= -->
      <section class="trust-strip border-y border-slate-200 bg-white py-6">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-slate-600 uppercase tracking-wider text-center">
          <span class="flex items-center gap-2"><i class="bi bi-palette2 text-emerald-500"></i> Artist-crafted artwork</span>
          <span class="flex items-center gap-2"><i class="bi bi-layers text-blue-500"></i> Multiple art styles</span>
          <span class="flex items-center gap-2"><i class="bi bi-printer text-orange-500"></i> Print-ready files</span>
          <span class="flex items-center gap-2"><i class="bi bi-gift text-red-500"></i> Perfect for gifts & décor</span>
        </div>
      </section>

      <!-- ================= INTRO ================= -->
      <section class="section intro py-16 bg-white">
        <div class="container mx-auto max-w-4xl px-4 text-center">
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900 mb-4">One Photo. Endless Artistic Possibilities.</h2>
          <p class="text-lg text-slate-600 leading-relaxed">
            Whether you’re creating a meaningful gift, enhancing your home décor,
            or preserving a special memory, we transform your photos into refined,
            expressive artwork that lasts.
          </p>
        </div>
      </section>

      <!-- ================= SERVICES ================= -->
      <section class="section services py-16 bg-slate-50" id="styles">
        <div class="container mx-auto max-w-6xl px-4 flex flex-col gap-16">

          <!-- Travel -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="assets/images/travel-art.jpg" alt="Travel photo turned into painting" class="w-full h-full object-cover"
                onerror="this.src='https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80'" />
            </div>
            <div>
              <h3 class="font-display text-3xl text-slate-900 mb-3">Transform Travel Photos Into Art</h3>
              <p class="text-slate-600 leading-7 mb-4">
                Turn vacation memories into expressive artwork. From beach sunsets
                to mountain views, we capture the mood and emotion of your journey.
              </p>
              <div class="inline-block bg-white border border-slate-200 rounded-lg px-3 py-1 text-sm font-bold text-slate-500">
                Best for: Travel journals • Wall art • Souvenirs
              </div>
            </div>
          </div>

          <!-- Portraits -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
             <div class="order-2 md:order-1">
              <h3 class="font-display text-3xl text-slate-900 mb-3">Create Timeless Portrait Paintings</h3>
              <p class="text-slate-600 leading-7 mb-4">
                Convert family and personal portraits into elegant artwork inspired
                by classic painting styles.
              </p>
              <div class="inline-block bg-white border border-slate-200 rounded-lg px-3 py-1 text-sm font-bold text-slate-500">
                Best for: Anniversaries • Home décor • Legacy art
              </div>
            </div>
            <div class="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="assets/images/portrait-art.jpg" alt="Portrait turned into oil painting" class="w-full h-full object-cover"
                onerror="this.src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'" />
            </div>
          </div>

          <!-- Pets -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="assets/images/pet-art.jpg" alt="Pet photo turned into pop art" class="w-full h-full object-cover"
                onerror="this.src='https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=80'" />
            </div>
            <div>
              <h3 class="font-display text-3xl text-slate-900 mb-3">Turn Pet Photos Into Artistic Portraits</h3>
              <p class="text-slate-600 leading-7 mb-4">
                Celebrate your pet’s personality with playful pop art or
                classic oil-style portraits.
              </p>
              <div class="inline-block bg-white border border-slate-200 rounded-lg px-3 py-1 text-sm font-bold text-slate-500">
                Best for: Pet lovers • Gifts • Wall art
              </div>
            </div>
          </div>

          <!-- Weddings -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1">
              <h3 class="font-display text-3xl text-slate-900 mb-3">Turn Wedding Photos Into Fine Art</h3>
              <p class="text-slate-600 leading-7 mb-4">
                Preserve your most meaningful moments with romantic,
                gallery-style artwork.
              </p>
              <div class="inline-block bg-white border border-slate-200 rounded-lg px-3 py-1 text-sm font-bold text-slate-500">
                Best for: Wedding albums • Anniversary gifts
              </div>
            </div>
            <div class="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="assets/images/wedding-art.jpg" alt="Wedding photo turned into fine art" class="w-full h-full object-cover"
                onerror="this.src='https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80'" />
            </div>
          </div>

          <!-- Vintage -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="assets/images/vintage-art.jpg" alt="Vintage style photo artwork" class="w-full h-full object-cover"
                onerror="this.src='https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80'" />
            </div>
             <div>
              <h3 class="font-display text-3xl text-slate-900 mb-3">Turn Digital Photos Into Vintage Art</h3>
              <p class="text-slate-600 leading-7 mb-4">
                Reimagine modern photos with nostalgic styles inspired by
                the 1920s–1970s.
              </p>
              <div class="inline-block bg-white border border-slate-200 rounded-lg px-3 py-1 text-sm font-bold text-slate-500">
                Best for: Family history • Retro décor
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= HOW IT WORKS ================= -->
      <section class="section how-it-works py-16 bg-white">
        <div class="container mx-auto max-w-4xl px-4 text-center">
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900 mb-10">How It Works</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 rounded-2xl border border-slate-100 bg-slate-50">
              <div class="h-12 w-12 mx-auto rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4"><i class="bi bi-upload"></i></div>
              <h4 class="font-bold text-slate-900 mb-2">1. Upload Your Photo</h4>
              <p class="text-slate-600 text-sm">Select the image you want transformed.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-100 bg-slate-50">
              <div class="h-12 w-12 mx-auto rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl mb-4"><i class="bi bi-brush"></i></div>
              <h4 class="font-bold text-slate-900 mb-2">2. Choose an Art Style</h4>
              <p class="text-slate-600 text-sm">Oil, watercolor, pop art, vintage, or custom.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-100 bg-slate-50">
              <div class="h-12 w-12 mx-auto rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mb-4"><i class="bi bi-send-check"></i></div>
              <h4 class="font-bold text-slate-900 mb-2">3. Receive Your Artwork</h4>
              <p class="text-slate-600 text-sm">High-resolution digital art ready for print or framing.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= PRICING ================= -->
      <section class="section pricing py-16 bg-slate-900 text-white">
        <div class="container mx-auto max-w-4xl px-4 text-center">
          <h2 class="font-display text-3xl sm:text-4xl mb-12">Simple, Transparent Pricing</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div class="price-card bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
              <h4 class="font-bold text-slate-200 mb-2">Digital Art Conversion</h4>
              <p class="text-2xl font-extrabold text-[#00d1c1]">From $99</p>
            </div>
            <div class="price-card bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
              <h4 class="font-bold text-slate-200 mb-2">Watercolor Style</h4>
              <p class="text-2xl font-extrabold text-[#00d1c1]">From $129</p>
            </div>
            <div class="price-card bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
              <h4 class="font-bold text-slate-200 mb-2">Oil Painting Style</h4>
              <p class="text-2xl font-extrabold text-[#00d1c1]">From $149</p>
            </div>
            <div class="price-card bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
              <h4 class="font-bold text-slate-200 mb-2">Canvas-Ready Artwork</h4>
              <p class="text-2xl font-extrabold text-[#00d1c1]">From $169</p>
            </div>
          </div>

          <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-8 py-4 text-base font-extrabold text-white hover:opacity-95 transition shadow-lg shadow-blue-900/50">
            Get a Custom Quote
          </a>
        </div>
      </section>

      <!-- ================= WHY US ================= -->
      <section class="section why-us py-16 bg-white">
        <div class="container mx-auto max-w-3xl px-4">
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900 text-center mb-8">Why Choose True Designs</h2>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">Artist-crafted — not one-click filters. Real attention to detail.</span>
            </li>
            <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">Multiple styles tailored to your specific photo and preference.</span>
            </li>
            <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">High-resolution, print-ready files delivered digitally.</span>
            </li>
            <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">Perfect for gifts, décor, and creating family keepsakes.</span>
            </li>
             <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">Clear communication and specific revisions available.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- ================= FINAL CTA ================= -->
      <section class="cta-final py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 border-t border-slate-200">
        <div class="container mx-auto max-w-4xl px-4 text-center">
          <h2 class="font-display text-3xl sm:text-5xl text-slate-900 mb-6">Ready to Turn Your Photo Into Art?</h2>
          <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Upload your photo today and let us transform it into something truly special.
          </p>
          <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-extrabold text-white hover:bg-black transition shadow-lg">
            Start Your Art Project
          </a>
        </div>
      </section>

      ${footerHTML()}
    </main>
    `;
}
