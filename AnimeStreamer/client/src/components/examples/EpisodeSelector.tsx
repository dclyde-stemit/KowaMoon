import { useState } from 'react';
import EpisodeSelector from '../EpisodeSelector';
import { type Episode } from '@shared/schema';

const mockEpisodes: Episode[] = Array.from({ length: 12 }, (_, i) => ({
  number: i + 1,
  title: `Episode ${i + 1}: The Adventure Continues`,
  thumbnail: `https://placehold.co/320x180/8b5cf6/ffffff?text=Ep+${i + 1}`,
}));

export default function EpisodeSelectorExample() {
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [audioType, setAudioType] = useState<"sub" | "dub">("sub");

  return (
    <div className="p-4 bg-background">
      <EpisodeSelector
        episodes={mockEpisodes}
        currentEpisode={currentEpisode}
        audioType={audioType}
        onEpisodeSelect={(ep) => {
          console.log('Selected episode:', ep);
          setCurrentEpisode(ep);
        }}
        onAudioTypeChange={(type) => {
          console.log('Audio type changed:', type);
          setAudioType(type);
        }}
      />
    </div>
  );
}
