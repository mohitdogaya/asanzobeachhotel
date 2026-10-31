# AGENTS.md — Asanzo Beach Hotel
## Persistent project instructions for Codex

> **Read this file before making changes in this repository.** These instructions define the project's design direction, visual quality bar, frontend architecture, animation language, and business rules. Follow them in every task and every Codex session unless the user explicitly changes a requirement.
>
> `detail.md` is the primary source of truth for hotel facts and content. Do not invent missing hotel information.

---

## 1. Project identity

**Project:** Asanzo Beach Hotel — official hotel website  
**Website:** https://asanzobeachhotel.com/  
**Location:** Pattaya, Chon Buri, Thailand  
**Purpose:** Create a complete, premium, responsive hotel website that helps visitors discover the hotel, explore its rooms and amenities, view prices, and contact the hotel reception.

This must feel like a carefully art-directed boutique-hotel website, not a generic hotel template, SaaS landing page, or default component-library layout.

### Hotel facts currently supplied

- Hotel: Asanzo Beach Hotel
- Address: 279/121 Soi Somprasong, Pattaya, Bang Lamung, Chon Buri Province, Thailand
- Phone: +66-889804406
- Email: info@asanzobeachhotel.com
- Opened: 2024
- Number of rooms: 30
- Approximate distance to the beach: 1.8 km
- Standard Double Room: **฿700 THB / night**
- Deluxe Double Room: **฿900 THB / night**
- Family Suite: **฿1,400 THB / night**

The room prices are Thai Baht (THB) per night. Present them clearly and consistently. If `detail.md` or a later client-approved update conflicts with these facts, flag the conflict rather than silently guessing.

---

## 2. Required design references

Study these references when beginning a major design task or when the reference URLs are available. Use them for inspiration, not for copying their layouts, assets, branding, or code.

1. Bellevoire — https://bellevoire.framer.website/
2. Brisa — https://brisa.framer.website/
3. FlatHaven — https://flathaven.framer.website/
4. Alba — https://alba-template.framer.website/
5. The Vila — https://thevila.framer.website/
6. The Hotel — https://thehotel.framer.website/
7. NOIRÉ — https://noirei.framer.website/

Study the qualities that make these sites feel premium:
- Art direction and visual storytelling.
- Editorial typography and font pairing.
- Hero composition and navigation.
- Image scale, cropping, and transitions.
- Spacious layouts and section rhythm.
- Asymmetrical compositions and varied grids.
- Scroll-triggered reveals and motion timing.
- Hover details, button behavior, and page transitions.
- Mobile layouts and responsive behavior.

### Desired creative direction

Blend:
- Bellevoire's refined editorial hotel presentation.
- Brisa's relaxed coastal atmosphere.
- Alba's minimal typography and generous whitespace.
- NOIRÉ's cinematic imagery and sophisticated transitions.
- The Hotel and The Vila's hospitality and room presentation.
- FlatHaven's considered layouts and image compositions.

Create an original visual identity for Asanzo Beach Hotel. Never reproduce a reference site section-for-section.

---

## 3. Visual identity and art direction

### Overall feeling

The website should feel:
- Premium, calm, welcoming, and contemporary.
- Inspired by Pattaya's tropical coastal setting.
- Editorial rather than template-driven.
- Photography-led, with clear and useful hotel information.
- Refined without pretending the hotel is an ultra-luxury resort.

Use subtle Thai/coastal influences. Avoid cliché tropical graphics, excessive palm-leaf patterns, tourist clip art, or overly decorative motifs.

### Suggested color direction

Use a restrained palette and define it centrally with CSS variables or Tailwind theme tokens:

- Deep ocean teal / blue for strong brand moments.
- Warm ivory / off-white for primary backgrounds.
- Sand / warm beige for secondary surfaces.
- Muted gold or brass as a very restrained accent.
- Dark charcoal for readable body text.

Do not introduce many competing accent colors. Maintain accessible text contrast.

### Typography

Typography is a major part of the visual identity.

Preferred direction:
- Elegant editorial serif for display headings.
- Clean modern sans-serif for body text, navigation, labels, and controls.

Font combinations to evaluate:
- Cormorant Garamond + Manrope.
- Playfair Display + DM Sans.
- DM Serif Display + Inter.

Choose one coherent combination and use it consistently. Load fonts efficiently and provide sensible fallbacks.

Typography rules:
- Use expressive but readable hero and section headings.
- Establish a clear hierarchy for H1, H2, H3, body, labels, and captions.
- Use responsive sizing with `clamp()` where appropriate.
- Keep line lengths comfortable.
- Use letter spacing intentionally, especially for small uppercase eyebrow labels.
- Do not make every heading oversized or use all-caps everywhere.

### Layout and composition

Avoid repeating the same card grid in every section. Use visual rhythm and a mix of:
- Full-width photography.
- Editorial split layouts.
- Asymmetrical image/text compositions.
- Large typographic moments.
- Carefully spaced amenity groups.
- Distinct room showcases.
- Minimal information blocks.
- Full-width contact calls to action.

Use whitespace deliberately. Align content to a consistent grid and spacing system.

Avoid:
- Generic Bootstrap-like layouts.
- Excessive rounded cards.
- Too many gradients.
- Overused glassmorphism.
- Excessive shadows and borders.
- Repetitive three-column card sections.
- Unnecessary decorative blobs and floating shapes.
- Crowded sections and inconsistent spacing.

---

## 4. Motion and interaction design

Motion should feel like a premium Framer hospitality website: smooth, subtle, intentional, and connected to the visual storytelling.

### Preferred tools

- Framer Motion (`motion` / `framer-motion`) for component animation, variants, and route transitions.
- CSS transitions for simple hover/focus states.
- Lenis may be used for smooth scrolling only if it works reliably with the app's routing, browser behavior, accessibility, and reduced-motion settings.

Do not add multiple animation libraries for overlapping purposes.

### Motion language

Use a consistent set of easing curves, durations, and distances. Prefer natural ease-out/ease-in-out motion over bouncy effects. Keep most interface transitions short and section reveals restrained.

Use motion selectively for:
- Hero image and content entrance.
- Heading line/word reveals where they improve the design.
- Section reveal on first viewport entry.
- Image clip-path or mask reveals.
- Subtle image scale/parallax.
- Room and gallery image hover states.
- Navigation state changes.
- Button background and arrow transitions.
- Mobile menu entrance/exit.
- Subtle route transitions.

### Scroll behavior

- Use viewport-based triggers for section reveals.
- Most entrance reveals should play once, not replay every time the user scrolls up and down.
- Do not animate every element.
- Avoid scroll-jacking or forced scroll behavior.
- Avoid heavy continuous scroll listeners and layout-thrashing effects.
- Parallax must be subtle and disabled or reduced on mobile and for reduced-motion users.
- Scrolling must remain responsive and never feel sluggish.

### Buttons and links

Create a consistent premium button language:
- Smooth color/background transitions.
- Small arrow movement or icon transition when appropriate.
- Clear hover, focus, active, and disabled states.
- Large enough touch targets on mobile.
- No fake interactions.

### Accessibility and reduced motion

Respect `prefers-reduced-motion`. Provide a reduced-motion experience that removes or simplifies nonessential movement. Motion must never prevent reading, navigation, or interaction.

---

## 5. Hero and page experience

### Homepage hero

Create an immersive, photography-led hero:
- Full-screen or near-full-screen composition when suitable.
- Strong, readable headline and concise supporting copy.
- Elegant navigation, potentially transparent over the hero.
- Clear Explore Rooms and Contact/Reception actions.
- Thoughtful image focal point and responsive cropping.
- Subtle entrance motion rather than a long intro sequence.

The first screen should immediately communicate the hotel's identity and location.

### Site-wide experience

- Consistent header, footer, spacing, and typography.
- Clear navigation and active route states.
- Smooth but quick page transitions.
- No unnecessary preloader or artificial waiting screen.
- Clear CTAs and obvious contact information.
- Every page should feel related while having its own composition.

---

## 6. Photography and image sourcing

Use Trip.com as a visual/reference source for Asanzo Beach Hotel photography and room presentation. Search for genuine photographs of this specific hotel where possible.

Important image rules:
- Prefer client-provided or verified Asanzo Beach Hotel images.
- Do not claim stock photos depict this hotel.
- If genuine images cannot be verified, use suitable tropical/hotel stock photography only as temporary or illustrative imagery.
- Do not misrepresent unrelated room photographs as the hotel's actual rooms.
- Keep image assets organized and easy to replace.
- Use descriptive filenames and meaningful alt text.
- Optimize images, choose appropriate dimensions, and lazy-load below-the-fold images.
- Avoid huge original images when smaller responsive variants will work.
- Maintain intentional crops and consistent image treatment.

Do not use copyrighted or restricted images without permission. Trip.com is a reference/source to investigate; it does not automatically grant reuse rights. Confirm image licensing or obtain client permission before production use.

---

## 7. Hotel content and business rules

Use `detail.md` as the primary content source. Keep hotel content in centralized data files rather than duplicating facts throughout components.

### Room display

Show these three room types and prices:

| Room | Price |
|---|---:|
| Standard Double Room | ฿700 THB / night |
| Deluxe Double Room | ฿900 THB / night |
| Family Suite | ฿1,400 THB / night |

Show the price clearly, with a small `/ night` or `THB / night` label. Do not invent capacity, bed type, square footage, views, inclusions, or room features. Only display details verified by the client or `detail.md`.

### Booking is NOT implemented

There is no online booking or reservation flow.

Do not build:
- Booking forms.
- Check-in/check-out date pickers.
- Availability calendars.
- Payment or checkout flows.
- Reservation dashboards.
- Fake booking confirmation states.

Every **Book Now** button must navigate to the Contact page (for example `/contact`). The Contact page should make it easy to reach the hotel reception using the provided phone number and email.

Use real `tel:` and `mailto:` links. Add WhatsApp only if the number and intended WhatsApp contact are confirmed and the link is correctly configured.

Room prices are informational display prices only. Do not imply that a room is reserved or available.

### Amenities

Use the full amenities list from `detail.md`. Organize facilities into sensible groups with consistent React Icons or Lucide icons. Do not add amenities that are not supplied or verified.

### Address and location

Use this address consistently:

279/121 Soi Somprasong, Pattaya, Bang Lamung, Chon Buri Province, Thailand.

The beach is approximately 1.8 km away. Do not invent walking/driving times or claim a particular beach entrance without verification.

---

## 8. Pages and content coverage

Build a complete website with the following routes/pages, adapting the exact route names to the existing project if needed:

- Home
- About
- Rooms
- Individual room detail (only if useful and supported by verified content)
- Amenities
- Gallery
- Contact
- Not Found

### Home
- Immersive hero.
- Hotel introduction.
- Featured rooms and prices.
- Amenities preview.
- Editorial about section.
- Gallery preview.
- Location and beach-distance section.
- Strong Contact/Reception CTA.

### Rooms
- Three room categories.
- Genuine/verified imagery where available.
- Price in THB per night.
- Only verified descriptions and features.
- Book Now navigates to Contact.

### About
- Hotel story and introduction.
- Opened in 2024.
- 30 rooms.
- Location and hospitality information based on supplied facts.

### Amenities
- All amenities from `detail.md`.
- Clear grouping and accessible icons.

### Gallery
- Responsive image composition.
- Lightbox only if it is useful, accessible, and works well on touch devices.

### Contact
- Address, phone, and email.
- Map or directions link using the supplied address.
- Approximate beach distance.
- Clear reception contact actions.
- Do not create a fake form submission. A contact form should only be included if a real submission integration is configured and tested.

---

## 9. Frontend architecture and code quality

Use the project's existing stack and conventions. Preferred stack:
- React + Vite.
- JavaScript (ES6+).
- Tailwind CSS as the primary styling system.
- React Router DOM.
- Framer Motion.
- React Icons and/or Lucide React.

Use icons consistently; avoid mixing styles unnecessarily.

### Architecture principles

- Build small, reusable, single-responsibility components.
- Keep page components focused on composition.
- Keep hotel facts and repeated content in centralized data modules.
- Reuse shared layout, buttons, headings, and navigation.
- Keep animation variants reusable where that improves consistency.
- Use semantic HTML and accessible controls.
- Avoid unnecessary dependencies and premature abstractions.
- Do not put the entire website into one large component.
- Do not rewrite working project configuration without a clear reason.

### Suggested structure

Adapt to the existing repository rather than blindly recreating it:

```text
src/
  assets/
    images/
    icons/
    fonts/

  components/
    common/
      Navbar.jsx
      Footer.jsx
      Button.jsx
      Container.jsx
      SectionHeading.jsx
      ScrollToTop.jsx
    home/
      Hero.jsx
      FeaturedRooms.jsx
      AboutPreview.jsx
      AmenitiesPreview.jsx
      GalleryPreview.jsx
      LocationPreview.jsx
      ContactCTA.jsx
    rooms/
      RoomCard.jsx
      RoomDetails.jsx
    ui/
      Modal.jsx

  pages/
    Home.jsx
    About.jsx
    Rooms.jsx
    RoomDetailsPage.jsx
    Amenities.jsx
    Gallery.jsx
    Contact.jsx
    NotFound.jsx

  layouts/
    MainLayout.jsx

  data/
    hotelData.js
    roomsData.js
    amenitiesData.js
    navigationData.js

  hooks/
  utils/

  styles/
    global.css
    variables.css
    animations.css
    components/
      Navbar.css
      Hero.css
      RoomCard.css

  App.jsx
  main.jsx

public/
  images/

AGENTS.md
detail.md
```

### CSS rules

- Tailwind is the default for layout, spacing, typography, colors, and responsive styling.
- Use custom CSS only where it provides a clear benefit (complex masks, keyframes, intricate hover states, specialized layouts, etc.).
- When custom CSS is needed for a specific component, put it in a dedicated file under `src/styles/components/` or the existing styles convention.
- Keep global styles, design tokens, and shared animations in the styles folder.
- Do not create a separate CSS file for every component if it adds no value.
- Do not scatter custom CSS or large style objects through JSX.
- Avoid duplicated rules and conflicting utility classes.

---

## 10. Responsive design

The website must be intentionally designed for:
- Small phones (320px and above).
- Larger phones.
- Tablets.
- Laptops.
- Desktop and wide screens.

Do not merely shrink the desktop design.

Check:
- Mobile navigation and menu interactions.
- Hero text placement and image focal point.
- Typography and line breaks.
- Room and gallery image crops.
- Section spacing.
- Contact actions and touch targets.
- Horizontal overflow.
- Reduced motion and mobile animation performance.

On mobile, simplify complex compositions and reduce or remove parallax. Preserve the premium look and usability.

---

## 11. Performance, SEO, and accessibility

- Optimize and lazy-load appropriate images.
- Avoid unnecessary re-renders and expensive scroll calculations.
- Use code splitting/lazy routes when beneficial.
- Avoid cumulative layout shifts; reserve image dimensions/aspect ratios.
- Keep animations GPU-friendly where possible.
- Use semantic landmarks and heading order.
- Add descriptive alt text.
- Ensure keyboard access and visible focus states.
- Maintain sufficient color contrast.
- Add page titles, descriptions, and appropriate metadata.
- Use descriptive link text.
- Check browser console for errors and warnings.

Do not sacrifice performance for animation. Smooth scrolling and fast interaction are more important than elaborate effects.

---

## 12. Required Codex workflow

At the beginning of each task:

1. Read this `AGENTS.md`.
2. Read `detail.md` when the task involves hotel content, room information, amenities, or contact details.
3. Inspect the existing source files and current implementation.
4. Identify the relevant components and styles before editing.
5. Preserve working functionality and existing conventions.
6. Make focused changes instead of unnecessarily rewriting unrelated files.

For a new page or major redesign:

1. Review the design references.
2. Decide the page's visual composition before coding.
3. Reuse the established typography, colors, spacing, and motion language.
4. Implement responsive behavior alongside the desktop layout.
5. Test interactions and navigation.
6. Review the result at mobile, tablet, and desktop sizes.
7. Run the available lint/build checks and fix issues.

Before declaring a task complete:
- Verify all affected routes.
- Verify every CTA works.
- Verify every Book Now action goes to Contact.
- Confirm prices and hotel facts are accurate.
- Check image loading and responsive crops.
- Check animation timing and scroll performance.
- Check keyboard and reduced-motion behavior.
- Fix console errors, broken links, and horizontal overflow.
- Summarize what changed and mention any missing client assets or integrations.

If a required fact or asset is missing, do not invent it. Use a clearly identified placeholder where necessary and tell the user what is needed.

---

## 13. Definition of done

A change is not complete just because it renders.

The finished experience should:
- Look like a bespoke, premium hospitality website.
- Have a consistent editorial design system.
- Use excellent typography and image composition.
- Have subtle, polished, smooth motion.
- Feel responsive and lightweight while scrolling.
- Work well on mobile, tablet, and desktop.
- Use accurate hotel information.
- Never imply online booking is available.
- Keep code modular and maintainable.

**Always prioritize visual quality, clarity, accessibility, performance, and factual accuracy together.**
