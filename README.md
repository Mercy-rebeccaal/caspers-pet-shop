# 🐾 Casper's Pet Foods Accessories Grooming

> **A real, premium neighbourhood pet store in Madambakkam, Tambaram, Chennai — brought online.**

Built strictly following the authentic local pet store vision: **warm white + deep purple + friendly dog & cat illustration + human pet-care expertise**, without AI startup clichés, fake metrics, or generic ecommerce bloat.

---

## 📍 Store Details

- **Business Name:** Casper's Pet Foods Accessories Grooming
- **Address:** No. 630, Main Road, Next to Bank of Baroda, Noothencheri, Madambakkam, Tambaram, Tamil Nadu – 600126
- **Phone:** `075500 58222` (+91 75500 58222)
- **Hours:** Open Daily 9:00 AM – 10:00 PM
- **Local Delivery:** Free delivery across Madambakkam & Tambaram for orders above ₹500

---

## 🎨 Brand & Design System

- **Primary Purple:** `#54158A` (Refined brand accent from Casper's logo)
- **Dark Purple:** `#3B0D63`
- **Soft Lavender:** `#F3ECF8`
- **Warm White:** `#FFFDF9`
- **Soft Cream:** `#FAF7F0`
- **Dark Text:** `#29242D`
- **Muted Text:** `#706A73`
- **Light Border:** `#E9E1EC`
- **Typography:**
  - Headings: `Nunito` (Friendly, rounded typeface that complements the illustrated dog/cat emblem)
  - Body: `Plus Jakarta Sans` & `Inter` (Clear, accessible, highly readable)

---

## ✨ Features Implemented

1. **Header & Navigation:**
   - Brand logo badge & horizontal lockup
   - Top announcement bar with Madambakkam address, closing time, and phone link
   - Cart drawer button with live item badge
   - Prominent "Book Grooming" CTA
   - Responsive mobile hamburger menu
2. **Hero Section:**
   - Authentic copy: *"FOR PETS, WITH LOVE ❤️"* & *"Everything Your Pet Needs, All Under One Roof."*
   - Real, warm pet lifestyle photography (happy dog and cat together)
   - Madambakkam location pill and quick CTAs
3. **Trust Strip:**
   - 🐶 Dog Essentials • 🐱 Cat Essentials • ✂️ Professional Grooming • ⭐ Trusted Local Service
4. **Shop By Category:**
   - Cards for Dog Food, Cat Food, Accessories, and Grooming with instant filter links
5. **Pet Favourites (E-Commerce Storefront):**
   - Live category pills (Dog Food, Cat Food, Accessories, Grooming)
   - Brand filter (Royal Canin, Pedigree, Drools, Farmina, Whiskas, Himalaya, Orijen, Acana)
   - Pet Type filter (Dog, Cat, All)
   - Real-time search bar & sorting (Popular, Price: Low to High, Price: High to Low, Newest)
   - Product cards with pack sizes, ratings, MRP discount badges, in-stock status, and quick add
   - Accessible **Quick View Modal** with product descriptions and instant WhatsApp enquiry
6. **Brands You Trust:**
   - Subtle, clean monochrome brand cards
7. **Grooming Parlour & Interactive Booking Flow:**
   - Services: Bath & Dry, Full Grooming, Hair Trimming, Nail Care, Ear Cleaning, Anti-Tick Coat Care
   - Interactive booking modal with Pet Type (Dog/Cat), Name, Breed, Age, Service, Date, Time Slot, Phone, and Notes
   - Polite, realistic confirmation message (*"Thanks! Your grooming request has been received. We'll contact you to confirm the appointment."*)
   - 1-click **Send via WhatsApp** button that pre-formats the entire booking request for `075500 58222`
8. **Why Casper's:**
   - 4 authentic neighbourhood pillars: Helpful Advice, Quality Products, Gentle Grooming, Local & Personal
9. **Loved by Local Pet Parents (Reviews):**
   - Strictly preserves genuine Google Reviews quotes from the store
   - 5-Star rating attribution
10. **Come Say Hello 👋 (Local Business Section):**
    - Exact street address with Bank of Baroda landmark
    - Working hours (Open until 10:00 PM)
    - "Get Directions" button linking to Google Maps
    - Direct "Call Us" button (`075500 58222`)
    - Embedded Google Maps view
11. **Contact Section:**
    - Direct cards for Call, Visit, and Grooming
    - Clean contact form with automatic WhatsApp forwarding option
12. **Interactive Cart Drawer:**
    - Item quantity increment/decrement, remove, subtotal
    - Local delivery calculator (Free for ₹500+, ₹40 otherwise)
    - Two checkout pathways: Direct Home Delivery request or 1-Click WhatsApp Order
13. **Floating WhatsApp Widget:**
    - 1-click chat with store `075500 58222`
    - Pre-filled prompts for food advice, grooming appointments, product availability, and directions
14. **Mobile Sticky Action Bar:**
    - 1-tap Call, WhatsApp, Grooming booking, and Cart navigation
15. **Local SEO & Schema:**
    - `PetStore` / `LocalBusiness` JSON-LD structured data
    - OpenGraph tags, semantic HTML5, WCAG color contrast

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### 2. Installation
```bash
cd caspers-pet-shop
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Create Production Build
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` folder.

---

## 🌐 Production Deployment Options

### Option A: Vercel (Recommended — Fastest & Free)

The project includes `vercel.json` pre-configured.

1. **Via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```
2. **Via Vercel Dashboard:**
   - Push your code to a GitHub repository.
   - Go to [vercel.com/new](https://vercel.com/new).
   - Import your repository.
   - Vercel automatically detects Vite. Click **Deploy**.

---

### Option B: Netlify

The project includes `netlify.toml` pre-configured.

1. **Via Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod --dir=dist
   ```
2. **Via Drag & Drop:**
   - Run `npm run build`.
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop).
   - Drag and drop the `dist` folder.

---

### Option C: Firebase Hosting

The project includes `firebase.json` pre-configured.

1. **Login & Initialize:**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   ```
   *(Select `dist` as public directory, and configure as single-page app).*
2. **Deploy:**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

---

### Option D: GitHub Pages

The project includes `.github/workflows/deploy.yml` for automated CI/CD.

1. Push this repository to GitHub.
2. Go to your repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every push to `main` will build and publish the website automatically!

---

## 📁 Project Structure

```
caspers-pet-shop/
├── public/
│   ├── caspers-logo.svg       # Standalone Casper's vector logo
│   └── favicon.svg            # Circular paw brand favicon
├── src/
│   ├── assets/                # Static images & graphics
│   ├── components/
│   │   ├── BrandSection.jsx   # Monochrome brand showcase
│   │   ├── CartDrawer.jsx     # Slide-over cart & WhatsApp checkout
│   │   ├── CategorySection.jsx# 4-category cards
│   │   ├── ContactSection.jsx # Contact form & store phone
│   │   ├── Footer.jsx         # Rich 4-column footer
│   │   ├── GroomingModal.jsx  # Booking flow with date/time picker
│   │   ├── GroomingSection.jsx# Services & grooming packages
│   │   ├── Hero.jsx           # Warm hero banner & CTAs
│   │   ├── LocalBusinessSection.jsx # Map & Madambakkam address
│   │   ├── Logo.jsx           # SVG logo (badge & horizontal)
│   │   ├── MobileStickyBar.jsx# Bottom 4-button mobile bar
│   │   ├── Navbar.jsx         # Sticky header & announcement bar
│   │   ├── ProductCard.jsx    # Card with size, price & quick view
│   │   ├── ProductModal.jsx   # Detailed product popup
│   │   ├── ProductSection.jsx # Live shop with search & filters
│   │   ├── ReviewsSection.jsx # Authentic Google Reviews
│   │   ├── TrustStrip.jsx     # 4 trust pillars
│   │   ├── WhatsAppWidget.jsx # Floating WhatsApp chat helper
│   │   └── WhyUsSection.jsx   # Authentic neighbourhood values
│   ├── data/
│   │   └── storeData.js       # Store info, products, brands, reviews
│   ├── App.css                # Animation keyframes
│   ├── App.jsx                # Application root with persistent state
│   ├── index.css              # Tailwind v4 theme & typography tokens
│   └── main.jsx               # React entry point
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions CI/CD pipeline
├── firebase.json              # Firebase Hosting configuration
├── index.html                 # SEO meta tags & LocalBusiness schema
├── netlify.toml               # Netlify SPA redirect & cache config
├── package.json               # Dependencies & build scripts
├── README.md                  # Complete documentation & deployment guide
├── vercel.json                # Vercel deployment configuration
└── vite.config.js             # Vite + Tailwind v4 plugin config
```

---

## 🐾 Philosophy

> *"Casper's isn't trying to be the biggest pet website. It's the pet shop you know and trust in your neighbourhood."*
