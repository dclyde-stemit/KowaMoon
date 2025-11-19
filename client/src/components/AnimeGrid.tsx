import { type Anime } from "@shared/schema";
import AnimeCard from "./AnimeCard";

interface AnimeGridProps {
  animes: Anime[];
  title?: string;
  onAnimeClick?: (anime: Anime) => void;
}

export default function AnimeGrid({ animes, title, onAnimeClick }: AnimeGridProps) {
  return (
    <section className="py-8 md:py-16">
      {title && (
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6 px-4 sm:px-6 lg:px-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          data-testid="text-section-title"
        >
          {title}
        </h2>
      )}
      
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {animes.map((anime) => (
            <AnimeCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              poster={anime.poster}
              rating={anime.rating}
              onClick={() => onAnimeClick?.(anime)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
