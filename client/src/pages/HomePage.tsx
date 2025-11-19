import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnimeGrid from "@/components/AnimeGrid";
import TrendingSection from "@/components/TrendingSection";
import LatestSection from "@/components/LatestSection";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import { type Anime } from "@shared/schema";

export default function HomePage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: allAnimes = [], isLoading } = useQuery<Anime[]>({
    queryKey: ['/api/anime'],
  });

  const { data: searchResults = [] } = useQuery<Anime[]>({
    queryKey: ['/api/anime/search', searchQuery],
    queryFn: async () => {
      const response = await fetch(`/api/anime/search?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) throw new Error('Search failed');
      return response.json();
    },
    enabled: searchQuery.length > 0,
  });

  const displayAnimes = searchQuery ? searchResults : allAnimes;
  const featuredAnime = allAnimes[0];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ring border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading anime...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchChange={setSearchQuery} />
      
      <div className="pt-16">
        {!searchQuery && featuredAnime && (
          <HeroSection
            title={featuredAnime.title}
            synopsis={featuredAnime.synopsis}
            genres={featuredAnime.genres}
            onWatch={() => setLocation(`/watch/${featuredAnime.id}`)}
            onAddToList={() => console.log('Add to list:', featuredAnime.title)}
          />
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!searchQuery && (
            <>
              <AdBanner adKey="your-ad-key-here" format="leaderboard" className="my-8" />
              <TrendingSection />
              <LatestSection />
            </>
          )}
          
          <AnimeGrid
            animes={displayAnimes}
            title={searchQuery ? `Search Results for "${searchQuery}"` : "All Anime"}
            onAnimeClick={(anime) => setLocation(`/watch/${anime.id}`)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
