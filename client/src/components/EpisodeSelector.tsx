import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Episode } from "@shared/schema";

interface EpisodeSelectorProps {
  episodes: Episode[];
  currentEpisode: number;
  audioType: "sub" | "dub";
  onEpisodeSelect: (episode: number) => void;
  onAudioTypeChange: (type: "sub" | "dub") => void;
}

export default function EpisodeSelector({
  episodes,
  currentEpisode,
  audioType,
  onEpisodeSelect,
  onAudioTypeChange,
}: EpisodeSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold" data-testid="text-episodes-title">
          Episodes
        </h3>
        
        <div className="flex gap-2">
          <Button
            variant={audioType === "sub" ? "default" : "outline"}
            size="sm"
            onClick={() => onAudioTypeChange("sub")}
            data-testid="button-audio-sub"
          >
            Sub
          </Button>
          <Button
            variant={audioType === "dub" ? "default" : "outline"}
            size="sm"
            onClick={() => onAudioTypeChange("dub")}
            data-testid="button-audio-dub"
          >
            Dub
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {episodes.map((episode) => (
          <Card
            key={episode.number}
            className={`cursor-pointer hover-elevate transition-all ${
              currentEpisode === episode.number ? 'ring-2 ring-ring' : ''
            }`}
            onClick={() => onEpisodeSelect(episode.number)}
            data-testid={`card-episode-${episode.number}`}
          >
            <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
              {episode.thumbnail ? (
                <img 
                  src={episode.thumbnail} 
                  alt={`Episode ${episode.number}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground">
                    {episode.number}
                  </span>
                </div>
              )}
              
              {currentEpisode === episode.number && (
                <Badge className="absolute top-2 right-2 bg-ring text-background">
                  Playing
                </Badge>
              )}
            </div>
            
            <div className="p-3">
              <div className="text-xs text-muted-foreground mb-1">
                Episode {episode.number}
              </div>
              <div className="text-sm font-medium line-clamp-2" data-testid={`text-episode-title-${episode.number}`}>
                {episode.title}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
