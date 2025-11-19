# KowaMoon - Anime Streaming Platform

## Overview

KowaMoon is a modern anime streaming platform that provides users with access to anime content through multiple video hosting services. The platform features a Netflix/Crunchyroll-inspired interface with browsing capabilities, search functionality, and video playback through embedded third-party players.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR support
- Wouter for lightweight client-side routing

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- shadcn/ui component library following the "New York" style preset
- Custom color system supporting light/dark modes via CSS custom properties

**State Management**
- TanStack Query (React Query) for server state management and caching
- React hooks for local component state
- Query client configured with infinite stale time and disabled refetching for optimized data fetching

**Design Approach**
- Reference-based design inspired by Crunchyroll and Netflix
- Responsive grid layouts (2/4/6 columns for anime cards)
- Typography hierarchy using Inter (UI) and Poppins (headings) from Google Fonts
- Consistent spacing system using Tailwind units (2, 4, 6, 8, 12, 16)

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- HTTP server creation for potential WebSocket support
- Custom middleware for request logging and JSON body parsing

**Data Storage**
- In-memory storage implementation (`MemStorage`) as default
- Interface-based storage abstraction (`IStorage`) allowing future database implementations
- Drizzle ORM configured for PostgreSQL (setup present but not yet implemented)
- Schema definitions using Zod for runtime validation

**API Structure**
- RESTful endpoints for anime data:
  - `GET /api/anime` - Retrieve all anime
  - `GET /api/anime/search?q=query` - Search anime by title
  - `GET /api/anime/:id` - Get specific anime details
- Consistent error handling with appropriate HTTP status codes
- JSON response format throughout

**Video Playback Strategy**
- No direct video hosting - relies on third-party embed services
- Multiple video source providers integrated via iframe embedding:
  - VidSrc (primary, uses Anilist IDs)
  - Vidify (Anilist IDs)
  - VidNest (Anilist/TMDB IDs)
  - VidFast (IMDB/TMDB IDs)
  - VidLink (MyAnimeList IDs)
- Client-side source switching capability for redundancy
- Support for sub/dub audio preferences and episode progression

### Data Model

**Anime Schema**
- Core identifiers: internal ID, AnilistId, MAL ID, IMDB ID, TMDB ID
- Metadata: title, synopsis, poster URL, rating, genres array
- Status tracking: ongoing/completed, total episodes, release year
- Zod validation ensures type safety across client and server

**Episode Schema**
- Episode number, title, optional thumbnail
- Generated programmatically based on total episode count

### Development Configuration

**TypeScript Setup**
- Strict mode enabled for maximum type safety
- Path aliases configured:
  - `@/*` → client source files
  - `@shared/*` → shared schema and types
  - `@assets/*` → attached assets directory
- ESNext module system with bundler resolution

**Build Process**
- Client: Vite builds to `dist/public`
- Server: esbuild bundles to `dist/index.js` with ESM output
- Production mode serves static files from built client

## External Dependencies

### Third-Party Video Services

**Primary Video Hosts**
- VidSrc (vidsrc.cc) - Supports v2/v3 embed versions, anime via Anilist IDs
- Vidify - Custom player with theming support
- VidNest (vidnest.fun) - Supports movies, TV shows, and anime with multiple subtitle options
- VidFast (vidfast.pro) - IMDB/TMDB based with extensive customization parameters
- VidLink (vidlink.pro) - MyAnimeList integration with fallback support

**Video Service Features**
- Customizable player colors, autoplay, start time
- Server selection capability
- Subtitle language options
- Next episode automation

### UI Component Libraries

**Radix UI Primitives**
- Complete set of accessible components (accordion, dialog, dropdown, popover, etc.)
- Unstyled base components allowing full design control

**Supporting Libraries**
- class-variance-authority - Component variant management
- clsx & tailwind-merge - Utility class composition
- cmdk - Command palette component
- embla-carousel-react - Carousel/slider functionality
- lucide-react - Icon library
- react-hook-form with @hookform/resolvers - Form management
- date-fns - Date manipulation
- zod & drizzle-zod - Runtime validation

### Database (Configured, Not Active)

**PostgreSQL with Neon**
- Neon serverless driver configured
- Drizzle ORM setup with migrations directory
- Schema defined but migrations not yet applied
- Connection via DATABASE_URL environment variable

### Development Tools

**Replit Integrations**
- vite-plugin-runtime-error-modal - Enhanced error overlay
- vite-plugin-cartographer - Development tool
- vite-plugin-dev-banner - Development environment indicator

### Session Management

**Connect-pg-simple**
- PostgreSQL session store configured
- Ready for user authentication implementation when database is activated

### Monetization Options

**Advertisement Networks (Planned)**
- Google AdSense integration points in Navbar and VideoPlayer components
- Alternative networks supported: PropellerAds, AdThrive, Mediavine
- Placeholder "Ad Space" badges in VideoPlayer component