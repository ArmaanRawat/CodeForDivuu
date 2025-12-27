# Love Letter Website

A single-page React (Vite) website designed as a soft, aesthetic love letter with a live relationship clock.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your photo:
   - Place your image at `/public/us.png`
   - The image will display in the photo section
   - If the image doesn't exist, it will gracefully hide

3. Run the development server:
```bash
npm run dev
```

## Features

- **Live Relationship Clock**: Continuously updates days, hours, minutes, and seconds since December 17, 2025 at 9:02 AM
- **Pastel Aesthetic**: Soft colors, gentle typography, and smooth fade-in animations
- **Spotify Integration**: Embedded player for "3005" by Childish Gambino (no autoplay)
- **Mobile Responsive**: Fully responsive design for all screen sizes
- **Accessibility**: Supports reduced motion preferences

## Customization

- **Relationship Start Date**: Edit the `startDate` in `src/App.jsx` (line 13)
- **Spotify Track**: The embed URL in `src/App.jsx` (line 118) can be updated with any Spotify track ID
- **Colors & Styling**: Modify `src/App.css` and `src/index.css` for color and design changes

## Build

```bash
npm run build
```

## Notes

- The clock will show 0 until the start date arrives
- The Spotify player is positioned at the bottom-right corner (bottom-center on mobile)
- All animations respect `prefers-reduced-motion` settings
