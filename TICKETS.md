# OpenCode Tickets — singen_atmen

## Ticket 1: Image Handling + Lazy Loading (HomeView.vue)
**Status:** Pending  
**Branch:** dev → feature/homeview-images  

**Current Problems:**
- `musikImage` and `spracheImage` assigned using `new URL()` every render
- `getNewsImage(id)` uses hardcoded `(id - 1) % images.length` — no proper mapping
- No lazy loading on images

**Changes Required:**
1. Move image URLs to top-level const
2. Add `loading="lazy"` to news images
3. Fix `getNewsImage` with proper `{id: path}` map

---

## Ticket 2: Vue Router — Remove Hash Mode (router/index.js)
**Status:** Pending  
**Branch:** dev → feature/router-clean  

**Current Problem:**
- `createWebHashHistory` produces ugly URLs like `example.com/#/singen`
- Should use `createWebHistory` for clean URLs in production

**Changes Required:**
1. Change `createWebHashHistory` to `createWebHistory` in router/index.js
2. Test all routes work in dev

---

## Ticket 3: NavBar Mobile Drawer — Smooth Animation + Improved UX
**Status:** Pending  
**Branch:** dev → feature/navbar-drawer  

**Current Problems:**
- Mobile drawer uses `transform: translateX(100%)` approach manually — can be simplified
- `fullscreen-drawer` CSS is overridden by Vuetify defaults
- Active route indication could be more prominent

**Changes Required:**
1. Simplify mobile drawer to use Vuetify's built-in `temporary` + `width="100%"`
2. Improve active-route visual feedback
3. Ensure smooth 400ms cubic-bezier transition

---

## Ticket 4: News System — Add Image Upload Capability
**Status:** Pending  
**Branch:** dev → feature/news-images  

**Current Problems:**
- News only has title + text
- Images hardcoded from local assets (no per-news image)
- Admin View can't select/attach an image

**Changes Required:**
1. Extend `news_server.js` to accept image URL in POST body
2. Extend `AdminView.vue` form with image URL input
3. Extend `HomeView.vue` `getNewsImage` to use per-news image field from JSON
4. Update `news.json` schema to include `imageId` field

---

## Ticket 5: HomeView — Mobile News Card Image Full-Width
**Status:** Pending  
**Branch:** dev → feature/news-mobile  

**Current Problems:**
- On mobile (max-width: 959px), news card image has `border-radius: 16px 16px 0 0` but only when using custom CSS
- News section could be visually stronger on mobile

**Changes Required:**
1. Ensure news image is always full-width on mobile
2. Add touch-friendly tap targets (44px minimum)
3. Add subtle press feedback on news card click