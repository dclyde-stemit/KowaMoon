import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Server } from "lucide-react";

type VideoSource = "vidsrc" | "vidify" | "vidnest" | "vidfast" | "vidlink";

interface VideoPlayerProps {
  anilistId?: string;
  tmdbId?: string;
  malId?: string;
  episode: number;
  type: "sub" | "dub";
  autoPlay?: boolean;
}

const sourceLabels: Record<VideoSource, string> = {
  vidsrc: "VidSrc",
  vidify: "Vidify",
  vidnest: "VidNest",
  vidfast: "VidFast",
  vidlink: "VidLink",
};

export default function VideoPlayer({ 
  anilistId, 
  tmdbId,
  malId,
  episode, 
  type, 
  autoPlay = false 
}: VideoPlayerProps) {
  const [currentSource, setCurrentSource] = useState<VideoSource>("vidsrc");
  const [embedUrl, setEmbedUrl] = useState("");

  useEffect(() => {
    let url = "";
    
    switch (currentSource) {
      case "vidsrc":
        // VidSrc - uses anilist ID with ani prefix
        if (anilistId) {
          url = `https://vidsrc.cc/v2/embed/anime/${anilistId}/${episode}/${type}${autoPlay ? '?autoPlay=true' : ''}`;
        }
        break;
        
      case "vidify":
        // Vidify - uses anilist ID (numeric only)
        if (anilistId) {
          const numericId = anilistId.replace('ani', '');
          url = `https://player.vidify.top/anime/${numericId}/${episode}/${type}`;
        }
        break;
        
      case "vidnest":
        // VidNest - uses anilist ID (numeric only)
        if (anilistId) {
          const numericId = anilistId.replace('ani', '');
          url = `https://vidnest.fun/anime/${numericId}/${episode}/${type}`;
        }
        break;
        
      case "vidfast":
        // VidFast - Note: doesn't have anime endpoint in docs, fallback to vidsrc
        if (anilistId) {
          url = `https://vidsrc.cc/v2/embed/anime/${anilistId}/${episode}/${type}`;
        }
        break;
        
      case "vidlink":
        // VidLink - uses MyAnimeList ID
        if (malId) {
          const numericId = malId.replace('mal', '');
          url = `https://vidlink.pro/anime/${numericId}/${episode}/${type}?fallback=true`;
        } else if (anilistId) {
          // Fallback to vidsrc if no MAL ID
          url = `https://vidsrc.cc/v2/embed/anime/${anilistId}/${episode}/${type}`;
        }
        break;
    }
    
    setEmbedUrl(url);

    // Listen for player events from all sources
    const handleMessage = (event: MessageEvent) => {
      const validOrigins = [
        'https://vidsrc.cc',
        'https://player.vidify.top',
        'https://vidnest.fun',
        'https://vidfast.pro',
        'https://vidlink.pro'
      ];
      
      if (!validOrigins.includes(event.origin)) return;
      
      if (event.data && (event.data.type === 'PLAYER_EVENT' || event.data.type === 'MEDIA_DATA')) {
        console.log('Player event:', event.data);
        
        // Store progress for continue watching
        if (event.data.type === 'MEDIA_DATA') {
          localStorage.setItem('mediaProgress', JSON.stringify(event.data.data));
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [anilistId, tmdbId, malId, episode, type, autoPlay, currentSource]);

  const sources: VideoSource[] = ["vidsrc", "vidify", "vidnest", "vidfast", "vidlink"];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Server:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {sources.map((source) => (
            <Button
              key={source}
              variant={currentSource === source ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentSource(source)}
              data-testid={`button-server-${source}`}
            >
              {sourceLabels[source]}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden relative" data-testid="video-player">
        {embedUrl ? (
          <iframe
            key={embedUrl}
            src={embedUrl}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            data-testid="iframe-player"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center space-y-2">
              <Server className="w-12 h-12 mx-auto opacity-50" />
              <p>No video source available</p>
              <p className="text-sm">Please ensure anime IDs are configured</p>
            </div>
          </div>
        )}
        
        {/* Ad placeholder - user needs to add their ad network code */}
        <div className="absolute top-2 right-2 opacity-50 hover:opacity-100 transition-opacity">
          <Badge variant="secondary" className="text-xs">
            {/* TODO: Add your ad network script here (Google AdSense, etc.) */}
            Ad Space
          </Badge>
        </div>
      </div>
      
      <div className="text-xs text-muted-foreground">
        <p>💡 Tip: If a server doesn't work, try switching to another one</p>
      </div>
    </div>
  );
}
