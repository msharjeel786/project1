# Carousel & Image Dimensions (axi-systems)

Use these when adding pictures or video so they look sharp and fit the layout.

---

## 1. Hero Section (video / background / carousel)

**Location:** Top of homepage — hero with video background ("Empowering Pakistan's Digital Future").

**Current:** One full-bleed video with `object-fit: cover`, filling the whole hero.

**Hero size (from CSS):**
- **Min height:** **938 px** (desktop)
- **Width:** 100% of viewport (no max-width on the hero itself)
- **Padding-top:** 195 px (content offset)

**Recommended dimensions for hero video or carousel images:**

| Use case | Width | Height | Aspect | Notes |
|----------|--------|--------|--------|--------|
| **Video or single full-bleed image** | **1920 px** | **1080 px** | 16:9 | Standard full HD; works with `object-fit: cover` on all viewports. |
| **Taller hero (less crop on desktop)** | **1920 px** | **1200 px** | 16:10 | Closer to hero min-height (938px); still crops nicely. |
| **Higher resolution (4K / large screens)** | **2560 px** | **1440 px** | 16:9 | For retina and large monitors. |

**If you add a carousel of images instead of (or with) the video:** use the same dimensions per slide — **1920×1080 px** per image. The hero fills the viewport width and has min-height 938px, so 16:9 at 1920×1080 is ideal.

**Video format:** MP4 (e.g. H.264). Current file: `/assets/img/bg/Futuristic_City_and_Business_District.mp4`.

---

## 2. Our Products / Project Cards (full-bleed backgrounds)

**Location:** "Our Products" section — project cards with `data-background="/assets/img/project/..."`.

**Card content box:**  
- Width: **740 px** (down to 610px tablet, 310px mobile).  
- Height: **max-height: calc(100vh - 200px)** — so viewport height minus ~200px.

**Recommended background image size:**

| Use case | Width | Height | Aspect | Notes |
|----------|--------|--------|--------|--------|
| **Background image** | **1920 px** | **1080 px** | 16:9 | Matches common full-width hero; crops nicely on tall/short viewports. |
| **Alternative** | **1600 px** | **900 px** | 16:9 | Slightly smaller file size. |

Use **object-fit: cover** (or equivalent) so the image fills the card and crops instead of stretching.

---

## 3. Section Background (testimonial section)

**File in use:** `/assets/img/bg/testimonial-bg.png`  
**Suggested size:** **1920×800 px** or **1920×1080 px** (full-width strip).

---

## Summary

- **Hero section (video or carousel images):** **1920×1080 px** (16:9), or **1920×1200 px** (16:10). One size per slide if using a carousel.
- **Project card backgrounds:** **1920×1080 px** (16:9).
- **Section backgrounds:** **1920×1080 px** or **1920×800 px**.
