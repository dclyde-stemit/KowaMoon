# Anime Streaming Platform Design Guidelines

## Design Approach
**Reference-Based Design** inspired by leading anime streaming platforms (Crunchyroll, Netflix) combined with modern web aesthetics. Focus on immersive content discovery and seamless video playback experience.

## Layout Architecture

**Spacing System**: Use Tailwind units of 2, 4, 6, 8, 12, and 16 consistently throughout
- Container max-width: `max-w-7xl` for content sections
- Section padding: `py-16` desktop, `py-8` mobile
- Card gaps: `gap-6` for grids

**Grid Layouts**:
- Anime cards: `grid-cols-2 md:grid-cols-4 lg:grid-cols-6` for poster grids
- Featured section: `grid-cols-1 md:grid-cols-3` for highlighted content
- Episode lists: Single column with full-width cards

## Typography Hierarchy

**Fonts**: Inter for UI elements, Poppins for headings (Google Fonts CDN)

**Scale**:
- Hero title: `text-5xl md:text-7xl font-bold` (Poppins)
- Section headers: `text-3xl md:text-4xl font-bold` (Poppins)
- Anime titles: `text-lg font-semibold` (Inter)
- Body text: `text-base` (Inter)
- Episode labels: `text-sm` (Inter)
- Metadata: `text-xs uppercase tracking-wide` (Inter)

## Core Components

**Navigation Bar**:
- Fixed top position with backdrop blur effect
- Logo left, search center, user actions right
- Height: `h-16`, padding: `px-8`
- Include: Browse, Popular, Search input, Watch Later icon

**Hero Section**:
- Full-width backdrop image with gradient overlay (bottom to top fade)
- Content positioned left-aligned, vertically centered
- Include: Featured anime title, synopsis (max 2 lines), genre badges, dual CTAs (Watch Now + Add to List)
- Height: `h-[70vh]` minimum
- Buttons with backdrop blur backgrounds

**Anime Cards**:
- Aspect ratio: 2:3 for poster images
- Rounded corners: `rounded-lg`
- Hover effect: Scale up slightly with shadow
- Overlay on hover: Title, rating, quick play button
- Loading state: Skeleton shimmer

**Video Player Page**:
- Player embedded in `aspect-video` container
- Width: Full width on mobile, `max-w-5xl` centered on desktop
- Below player: Episode selector (horizontal scroll on mobile, grid on desktop)
- Sidebar (desktop): Anime info, description, related series
- Episode cards: Thumbnail, episode number, title, duration

**Search & Browse**:
- Search bar: Full-width with icon, `rounded-full`, subtle border
- Filter chips: Rounded pills with clear interaction states
- Results: Same grid layout as homepage
- Empty state: Centered message with illustration suggestion

**Episode Selector**:
- Compact cards showing episode thumbnail, number, title
- Current episode: Highlighted border
- Sub/Dub toggle: Prominent switch above episodes
- Season dropdown: If multi-season
- Grid: `grid-cols-2 md:grid-cols-4` for episode thumbnails

**Footer**:
- Multi-column layout: About, Browse Categories, Social Links, Legal
- Newsletter signup: Email input with submit button
- Centered branding and copyright

## Visual Treatments

**Icons**: Heroicons via CDN for all UI icons (play, search, bookmark, etc.)

**Shadows**: Use sparingly
- Cards: `shadow-lg` on hover
- Modals/Overlays: `shadow-2xl`
- Player: `shadow-xl`

**Borders**: `border border-gray-800` for separators, `rounded-lg` for cards, `rounded-full` for buttons and search

**Loading States**: 
- Skeleton screens with shimmer animation for cards
- Spinner for video loading
- Progressive image loading for posters

## Images

**Required Images**:
1. **Hero Background**: Wide cinematic anime scene (1920x1080), dramatic composition with central focus area clear for text overlay
2. **Anime Posters**: Vertical format (2:3 ratio) - use placeholder service initially (via.placeholder.com or similar) with anime titles
3. **Episode Thumbnails**: 16:9 screenshots from episodes - placeholder with episode numbers
4. **Category Icons**: Genre representations (action, romance, comedy, etc.) - use Heroicons

**Hero Image Implementation**: Large background image with dark gradient overlay from bottom (`bg-gradient-to-t from-black via-black/80 to-transparent`)

## Responsive Behavior

**Breakpoints**:
- Mobile: Stack all content, hide sidebar, hamburger menu
- Tablet (md:): 2-4 column grids, simplified navigation
- Desktop (lg:): Full 6-column grid, visible sidebar on player page

**Mobile-Specific**:
- Bottom navigation bar for key actions
- Swipeable episode selector
- Full-screen search overlay
- Collapsible filters

## Interactive Patterns

**Navigation**: Smooth scroll to sections, instant search results
**Card Interactions**: Hover reveals info overlay with play button, click navigates to detail page
**Video Player**: Click episode card to switch, sub/dub toggle updates player immediately
**Search**: Real-time filtering as user types, debounced for performance

## Accessibility
- Keyboard navigation for all interactive elements
- Focus states: `ring-2 ring-offset-2` on all interactive elements
- ARIA labels for icon-only buttons
- Sufficient contrast ratios maintained throughout
- Video player controls fully keyboard accessible