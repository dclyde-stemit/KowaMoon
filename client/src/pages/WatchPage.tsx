import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import EpisodeSelector from "@/components/EpisodeSelector";
import AnimeDetails from "@/components/AnimeDetails";
import { type Anime, type Episode } from "@shared/schema";

// Generate episode list based on total episodes
const generateEpisodes = (count: number): Episode[] => {
  return Array.from({ length: count }, (_, i) => ({
    number: i + 1,
    title: `Episode ${i + 1}`,
    thumbnail: `https://placehold.co/320x180/ff7043/ffffff?text=Ep+${i + 1}`,
  }));
};

export default function WatchPage() {
  const [match, params] = useRoute("/watch/:id");
  const [, setLocation] = useLocation();
  const animeId = params?.id;
  
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [audioType, setAudioType] = useState<"sub" | "dub">("sub");

  // Redirect if no anime ID
  useEffect(() => {
    if (!match || !animeId) {
      setLocation("/");
    }
  }, [match, animeId, setLocation]);

  // Fetch anime details and record view
  const { data: anime, isLoading, error } = useQuery<Anime>({
    queryKey: ['/api/anime', animeId],
    queryFn: async () => {
      const response = await fetch(`/api/anime/${animeId}`);
      if (!response.ok) throw new Error("Failed to fetch anime");
      return response.json();
    },
    enabled: !!animeId,
  });

  if (!match || !animeId) {
    return null; // Will redirect in useEffect
  }

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

  if (error || !anime) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Anime Not Found</h2>
            <p className="text-muted-foreground mb-6">The anime you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const episodes = generateEpisodes(anime.totalEpisodes);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => setLocation("/")}
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <VideoPlayer
                anilistId={anime.anilistId}
                tmdbId={anime.tmdbId}
                malId={anime.malId}
                episode={currentEpisode}
                type={audioType}
                autoPlay={false}
              />
              
              <EpisodeSelector
                episodes={episodes}
                currentEpisode={currentEpisode}
                audioType={audioType}
                onEpisodeSelect={setCurrentEpisode}
                onAudioTypeChange={setAudioType}
              />
            </div>
            
            <div className="lg:col-span-1">
              <AnimeDetails anime={anime} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
