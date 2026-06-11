# Media Slots Reference

Every image in this site is loaded through a central `MediaSlot` component that reads from `src/data/media.ts`.
To add a real image, set `src` on the matching entry in that map — the slot will swap automatically.

## How to add an image

1. Drop the file into `public/images/` (or host it externally).
2. Open `src/data/media.ts`.
3. Find the entry matching the `id` below.
4. Add `src: '/images/your-file.jpg'` (or a full URL).

---

## All Media Slots

| ID | Page / Placement | Purpose | Ideal Dimensions | Aspect Ratio |
|---|---|---|---|---|
| `hero-bg` | Landing — full-viewport hero | Cinematic dark background behind the hero text — could be an atmospheric photo, a blurred city at night, a dark gradient scene | `1920×1080px` | wide (21:6) |
| `aptira-poster` | Projects grid, Landing featured row | Project card thumbnail for Aptira — should convey "AI / data / professional" | `800×450px` | 16:9 |
| `aptira-banner` | Case Study: Aptira — hero banner | Wide editorial hero image for the Aptira case study | `1440×540px` | wide |
| `aptira-screen1` | Case Study: Aptira — Approach section | Dashboard screenshot or UI mockup showing the Aptira scoring dashboard | `1200×675px` | 16:9 |
| `aptira-screen2` | Case Study: Aptira — Approach section | API / backend view — terminal, Swagger UI, or data flow diagram | `1200×675px` | 16:9 |
| `socialpulse-poster` | Projects grid | Project card thumbnail for SocialPulse AI — social / analytics aesthetic | `800×450px` | 16:9 |
| `flood-poster` | Projects grid, Landing featured row | Project card thumbnail for Flood Monitoring Tool — maps, data, engineering | `800×450px` | 16:9 |
| `flood-banner` | Case Study: Flood Monitoring — hero banner | Wide editorial hero for the flood monitoring case study | `1440×540px` | wide |
| `flood-screen1` | Case Study: Flood Monitoring — Approach section | Screenshot of the interactive risk map with overlays | `1200×675px` | 16:9 |
| `atlasgym-poster` | Projects grid | Project card thumbnail for AtlasGym — fitness / SaaS feel | `800×450px` | 16:9 |
| `faithconnect-poster` | Projects grid | Project card thumbnail for FaithConnect — community / warm | `800×450px` | 16:9 |
| `bgremover-poster` | Projects grid | Project card thumbnail for Background Remover — clean tech / ML | `800×450px` | 16:9 |
| `about-avatar` | About page — profile header card | Professional headshot of Mathew Kadesh — square, well-lit | `400×400px` | 1:1 (square) |
| `services-hero` | Services page — optional hero area | Illustrative image for services section — optional, not required | `1200×675px` | 16:9 |

---

## Generation hints (Midjourney / DALL-E / Ideogram prompts)

**Hero background** (`hero-bg`):
> Dark cinematic cityscape at night, deep charcoal tones, subtle red ambient glow, ultra-wide, minimalist, no text

**Aptira poster** (`aptira-poster`):
> Dark dashboard UI mockup, AI scoring interface, clean data visualisation, red accent, professional dark theme

**Flood monitoring poster** (`flood-poster`):
> Real-time map interface with colour-coded risk overlays, dark UI, engineering tool, data visualisation aesthetic

**Profile photo** (`about-avatar`):
> Professional headshot — natural light, neutral background, confident expression, developer/engineer aesthetic

---

*This file is auto-generated from `src/data/media.ts`. If you add new `MediaSlot` components, add the corresponding entry to that file and update this doc.*
