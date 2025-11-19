import { Star, Calendar, Tv } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type Anime } from "@shared/schema";

interface AnimeDetailsProps {
  anime: Anime;
}

export default function AnimeDetails({ anime }: AnimeDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <img
          src={anime.poster}
          alt={anime.title}
          className="w-48 aspect-[2/3] object-cover rounded-lg"
          data-testid="img-anime-poster"
        />
        
        <div className="flex-1 space-y-4">
          <h1 
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-anime-title"
          >
            {anime.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-foreground font-semibold" data-testid="text-rating">
                {anime.rating.toFixed(1)}
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span data-testid="text-year">{anime.year}</span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Tv className="w-4 h-4" />
              <span data-testid="text-episodes">{anime.totalEpisodes} Episodes</span>
            </div>
            
            <Badge variant={anime.status === "ongoing" ? "default" : "secondary"} data-testid="badge-status">
              {anime.status === "ongoing" ? "Ongoing" : "Completed"}
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {anime.genres.map((genre) => (
              <Badge key={genre} variant="outline" data-testid={`badge-genre-${genre.toLowerCase()}`}>
                {genre}
              </Badge>
            ))}
          </div>
          
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-synopsis">
            {anime.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
}
