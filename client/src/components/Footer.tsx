import { Link } from "wouter";

export default function Footer() {
  const trendingMovies = [
    { title: "Wicked: For Good", year: 2025 },
    { title: "If I Had Legs to Kick You", year: 2023 },
    { title: "One Battle After Another", year: 2025 },
    { title: "Shelby Oaks", year: 2025 },
    { title: "The Running Man", year: 2025 },
    { title: "Frankenstein", year: 2025 },
  ];

  const trendingTVShows = [
    { title: "IT: Welcome to Derry", year: 2025 },
    { title: "Plurfect", year: 2025 },
    { title: "Stranger Things", year: 2016 },
    { title: "Last Samurai Standing", year: 2025 },
    { title: "Landman", year: 2024 },
    { title: "Tulsa King", year: 2022 },
  ];

  return (
    <footer className="bg-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Trending Movies</h3>
            <ul className="space-y-2">
              {trendingMovies.map((item, index) => (
                <li key={index}>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.title} ({item.year})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Trending TV Shows</h3>
            <ul className="space-y-2">
              {trendingTVShows.map((item, index) => (
                <li key={index}>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.title} ({item.year})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3">Browse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Movies</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">TV Shows</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Anime</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">My Library</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">KowaMoon</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Your ultimate destination for discovering movies and TV shows. Stream, explore, and 
              enjoy endless entertainment.
            </p>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-primary">
              ⚠️ Important Notice
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              KowaMoon does not host or store any media files. All content is sourced from third-party services and platforms. 
              We respect intellectual property rights and comply with DMCA regulations.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KowaMoon. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Made with ♥ for movie lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
