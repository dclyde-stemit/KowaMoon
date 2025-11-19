# KowaMoon - Complete Setup Guide

## 🎨 Features Implemented

### ✅ Dark Mode & Multiple Color Themes
- **Dark/Light Mode Toggle**: Click the sun/moon icon in the top-right corner
- **6 Color Themes**: Click the palette icon to choose from:
  - Orange (Default)
  - Ocean Blue
  - Purple Dream
  - Forest Green
  - Cherry Blossom
  - Golden Sunset
- Settings are saved in your browser and persist across sessions

### ✅ Trending & Latest Content Sections
- **Trending Now**: Shows the most-viewed anime in the last 24 hours
- **Latest Releases**: Displays ongoing anime sorted by release year
- Automatic view tracking when users watch anime

### ✅ Ad Integration Ready
- Ad banners are configured in the homepage (leaderboard format)
- Easy to add more ad placements anywhere in the site

### ✅ Footer Section
- Trending movies/TV shows links
- Quick navigation to browse different content
- Information links (Privacy, Terms, Contact, About)
- DMCA compliance notice

---

## 💰 Setting Up Adsterra Ads (Recommended)

**Why Adsterra?**
- ✅ **$9-$20 CPM** for streaming sites
- ✅ **10-minute approval** process
- ✅ **No minimum traffic** required
- ✅ **Weekly payouts** ($100 minimum)
- ✅ **Anti-adblock technology**

### Step 1: Create an Adsterra Account

1. Go to [https://adsterra.com](https://adsterra.com)
2. Click "Sign Up" and choose "Publisher"
3. Fill in your details:
   - Website URL (your Replit deployment URL)
   - Traffic source: Direct
   - Category: Entertainment/Streaming
4. Verify your email address

### Step 2: Add Your Website

1. In the Adsterra dashboard, go to "Websites"
2. Click "Add Website"
3. Enter your website URL
4. Wait for approval (usually 10-30 minutes)

### Step 3: Create Ad Placements

1. After approval, go to "Ad Units"
2. Create a new ad unit:
   - **Format**: Choose "Banner" or "Popunder" (Banner is less intrusive)
   - **Size**: 728x90 (Leaderboard) or 970x90 (Super Leaderboard)
   - **For mobile**: 320x50 (Mobile Banner)
3. Copy the ad code or the unique `atOptions` key

### Step 4: Add Ads to Your Site

Open `AnimeStreamer/client/src/pages/HomePage.tsx` and replace:

```typescript
<AdBanner adKey="your-ad-key-here" format="leaderboard" className="my-8" />
```

With your actual Adsterra ad key from Step 3.

You can add more ad placements:
- **In the Navbar**: Place a banner below the navigation
- **Between sections**: Add banners between Trending and Latest sections
- **Video Player**: Add ads in the watch page

### Step 5: Test Your Ads

1. Clear your browser cache
2. Visit your website
3. Check if ads are displaying
4. Monitor earnings in Adsterra dashboard

---

## 🚀 Alternative Ad Networks (If You Grow)

### Once You Reach 100K Monthly Pageviews:

**Raptive (formerly AdThrive)**
- **CPM**: $20-$25+
- **Requirements**: 100K monthly pageviews
- **Best for**: High-quality, engaged audiences
- Website: [https://raptive.com](https://raptive.com)

**Google AdSense**
- **CPM**: $5-$15
- **Requirements**: Quality content, no minimum traffic
- **Pros**: Trusted, easy to use
- **Cons**: Lower CPMs than Adsterra for streaming sites
- Website: [https://adsense.google.com](https://adsense.google.com)

### Ad Placement Best Practices:
1. **Don't overdo it**: 1-2 ads per page maximum
2. **Strategic placement**: Above the fold, between content
3. **Mobile-friendly**: Use responsive ad units
4. **Test different formats**: Banner vs popunder vs native ads
5. **Monitor performance**: Track CPM, CTR, and earnings

---

## 📊 How Analytics Work

The site automatically tracks:
- **Anime views**: Every time someone watches an anime
- **Trending calculation**: Most views in last 24 hours
- **Latest releases**: Ongoing anime sorted by year

View data is stored in memory (will reset on server restart). To make it persistent, you'll need to set up a database (see next section).

---

## 🗄️ Future Features (Requires Database)

The following features are prepared but need a PostgreSQL database:

### 1. **User Authentication (Sign Up/Login)**
- Social login with Google, GitHub, X, Apple
- Email/password authentication
- User profiles

### 2. **Bookmarks & Watchlist**
- Save favorite anime
- Track watched episodes
- Personal recommendations

### 3. **Watch Party**
- Synchronized viewing with friends
- Real-time chat
- Share watch sessions

### 4. **Admin Dashboard**
- **Non-developer friendly interface**
- Manage site settings
- Configure themes and colors
- Control ad placements
- View analytics
- Add/edit anime content
- Ban/unban users

### To Enable These Features:

1. **Provision a PostgreSQL database** in Replit:
   - Click "Database" in the left sidebar
   - Click "Create database"
   - Wait for provisioning

2. **Contact me** and I'll set up:
   - Database schemas
   - Authentication system
   - Admin dashboard
   - Bookmark functionality
   - Watch party features

---

## 🎯 Auto-Update System (Coming Soon)

The auto-update feature will:
- Fetch new anime releases from AniList API
- Update anime information automatically
- Add new episodes to ongoing series
- Keep your site always fresh

**This requires**:
- Database setup
- AniList API integration
- Scheduled jobs (will be configured)

---

## 🛠️ Admin Features Preview

When database is set up, you'll get an admin panel with:

### Site Settings
- Change site name and logo
- Update primary colors
- Enable/disable features
- Configure ad settings

### Content Management
- Add new anime with all metadata
- Edit existing anime information
- Upload custom posters
- Manage video sources

### User Management
- View all registered users
- Ban/unban users
- View user activity
- Reset passwords

### Analytics Dashboard
- Total views
- Most popular anime
- User growth charts
- Revenue tracking

### Ad Management
- Enable/disable ad placements
- Configure ad network keys
- A/B test different ad formats
- View ad performance

**All through an easy-to-use interface - no coding required!**

---

## 📱 Mobile Responsive

The site is fully responsive:
- Works on phones, tablets, and desktops
- Touch-friendly navigation
- Optimized images
- Fast loading

---

## 🎨 Customization Tips

### To Change Theme Colors:
1. Click the palette icon in the navbar
2. Select a color theme
3. Changes apply instantly

### To Add Your Logo:
Edit `AnimeStreamer/client/src/components/Navbar.tsx`:
```typescript
<span className="text-xl font-bold">Your Site Name</span>
```

### To Change Hero Background:
Replace the background image in the HeroSection component

---

## 📈 Monetization Strategy

1. **Start with Adsterra** (Week 1-2)
   - Apply today
   - Get approved in minutes
   - Start earning immediately

2. **Optimize Ad Placements** (Week 3-4)
   - Test different positions
   - Monitor click-through rates
   - Adjust based on earnings

3. **Scale to Premium Networks** (Month 3+)
   - Once you reach 100K views, apply to Raptive
   - Higher CPMs = More revenue
   - Better ad quality

4. **Additional Revenue Streams** (Future)
   - Premium memberships (ad-free)
   - Affiliate links
   - Merchandise
   - Donations/Patreon

---

## 🔒 Important Legal Notes

1. **DMCA Compliance**: The site includes a disclaimer that all content is from third-party sources
2. **Privacy Policy**: You should add a proper privacy policy before collecting user data
3. **Terms of Service**: Create ToS for your site
4. **Cookie Consent**: Required in EU (GDPR)
5. **Age Verification**: Consider adding for adult content

---

## 🆘 Support

If you need help:
1. Check this guide first
2. Review the code comments
3. Test in incognito mode
4. Clear browser cache
5. Check browser console for errors

---

## 🎉 You're All Set!

Your anime streaming site now has:
- ✅ Beautiful dark mode
- ✅ 6 color themes
- ✅ Trending & latest sections
- ✅ Ad integration ready
- ✅ Professional footer
- ✅ Analytics tracking
- ✅ Mobile responsive

**Next Steps:**
1. Sign up for Adsterra
2. Add your ad keys
3. Share your site with friends
4. Watch the earnings grow!

When you're ready for user features (bookmarks, watch party, admin panel), let me know and I'll set up the database!

---

**Happy Streaming! 🍿🎬**
