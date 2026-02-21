# Armenia Travel Home Page Replication

I have successfully replicated the entire home page of the Armenia Travel website, focusing on high visual fidelity, accurate animations, and precise content integration.

## Key Accomplishments

### 1. Refined Hero Section

- **Aspect Ratio**: Implemented the original `50.78%` aspect ratio using the padding-top technique for responsive across all devices.
- **Reveal Animation**: Replicated the `top-down` reveal effect with a custom cubic-bezier transition (`[0.16, 1, 0.3, 1]`) and a curved `clip-path` bottom edge.
- **Asset Integration**: Switched to the high-quality original video asset (`Travel-Armenia_Hero-video-edit_08142025-2-15.mp4`).
- **Contrast**: Set a white background for the Hero section to ensure content visibility and professional look.

### 2. Full Content Integration

- **Scalable Image Section**: Added the "Natural splendor..." section with a parallax scaling effect on the featured image.
- **Things to Do**: Implemented the tabbed category interface with real content and imagery from the original site.
- **Top Destinations**: Created a responsive grid of Armenia's hotspots with smooth hover effects.
- **Interesting Facts**: Replicated the colorful facts cards with original copy and background colors.
- **Interactive Map CTA**: Integrated the deep green call-to-action for the interactive map.
- **Events & Booking**: Implemented the upcoming events list and the final booking widget with location selection.

### 3. Global Loading & Polish

- **Loading Screen**: Retained the smooth initial loading screen that fades out only after the Hero video is ready.
- **Smooth Transitions**: Used `framer-motion` for all entrance and scroll-based animations to match the premium feel of the original site.

## Technical Implementation Details

| Component           | Technical Spark                                                   |
| :------------------ | :---------------------------------------------------------------- |
| `Hero.tsx`          | Uses `ellipse(150% 100% at 50% 0%)` for the curved bottom mask.   |
| `ScalableImage.tsx` | Implements parallax scaling using `useScroll` and `useTransform`. |
| `HomeView.tsx`      | Serves as the high-level orchestrator with real data constants.   |

## Verification Results

- [x] Verified video auto-play and loop behavior.
- [x] Confirmed the reveal animation triggers after video load.
- [x] Validated text contrast against background overlays.
- [x] Checked responsive layout for all sections.

You can now view the full replicated home page at the root route `/`.
