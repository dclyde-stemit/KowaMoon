import { useQuery } from "@tanstack/react-query";
import { Clock } from "lucide-react";
import { useLocation } from "wouter";
import AnimeCard from "./AnimeCard";
import type { Anime } from "@shared/schema";

export default function LatestSection() {
  const [, setLocation] = useLocation();
  const { data: latestAnime, isLoading } = useQuery<Anime[]>({
    queryKey: ["/api/anime/latest/list"],
    queryFn: async () => {
      const response = await fetch("/api/anime/latest/list");
      if (!response.ok) throw new Error("Failed to fetch latest anime");
      return response.json();
    },
  });

  if (isLoading || !latestAnime || latestAnime.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-7 h-7 text-primary" />
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Latest Releases
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {latestAnime.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            title={anime.title}
            poster={anime.poster}
            rating={anime.rating}
            onClick={() => setLocation(`/watch/${anime.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
