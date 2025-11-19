import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Anime_hero_background_scene_0f1fa0e6.png";

interface HeroSectionProps {
  title: string;
  synopsis: string;
  genres: string[];
  onWatch?: () => void;
  onAddToList?: () => void;
}

export default function HeroSection({ title, synopsis, genres, onWatch, onAddToList }: HeroSectionProps) {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-foreground"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-hero-title"
          >
            {title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {genres.map((genre) => (
              <Badge key={genre} variant="secondary" data-testid={`badge-genre-${genre.toLowerCase()}`}>
                {genre}
              </Badge>
            ))}
          </div>
          
          <p className="text-base text-foreground/90 mb-8 line-clamp-2" data-testid="text-synopsis">
            {synopsis}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring text-background border-ring"
              onClick={onWatch}
              data-testid="button-watch-now"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="backdrop-blur-sm bg-background/20"
              onClick={onAddToList}
              data-testid="button-add-list"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add to List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
