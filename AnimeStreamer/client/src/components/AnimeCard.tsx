import { Play, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AnimeCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  onClick?: () => void;
}

export default function AnimeCard({ id, title, poster, rating, onClick }: AnimeCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden cursor-pointer hover-elevate transition-all duration-300"
      onClick={onClick}
      data-testid={`card-anime-${id}`}
    >
      <div className="aspect-[2/3] relative overflow-hidden">
        <img 
          src={poster} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2" data-testid={`text-title-${id}`}>
              {title}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium text-white" data-testid={`text-rating-${id}`}>
                  {rating.toFixed(1)}
                </span>
              </div>
              
              <Button 
                size="sm" 
                className="bg-ring hover:bg-ring text-background"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
                data-testid={`button-play-${id}`}
              >
                <Play className="w-4 h-4 fill-current" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
