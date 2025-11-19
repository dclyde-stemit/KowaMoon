import AnimeDetails from '../AnimeDetails';
import { type Anime } from '@shared/schema';

const mockAnime: Anime = {
  id: '1',
  title: 'Attack on Titan',
  poster: 'https://placehold.co/400x600/8b5cf6/ffffff?text=Attack+on+Titan',
  rating: 9.0,
  synopsis: 'In a world where humanity resides within enormous walled cities to protect themselves from the gigantic man-eating Titans that roam the outside world, Eren Yeager joins the military with his childhood friends Mikasa and Armin to fight back against the Titans and discover the truth about their existence.',
  genres: ['Action', 'Dark Fantasy', 'Drama', 'Post-Apocalyptic'],
  totalEpisodes: 87,
  status: 'completed',
  year: 2013,
  anilistId: 'ani16498',
};

export default function AnimeDetailsExample() {
  return (
    <div className="p-6 bg-background">
      <AnimeDetails anime={mockAnime} />
    </div>
  );
}
