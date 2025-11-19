import AnimeGrid from '../AnimeGrid';
import { type Anime } from '@shared/schema';

const mockAnimes: Anime[] = [
  {
    id: '1',
    title: 'Attack on Titan',
    poster: 'https://placehold.co/400x600/8b5cf6/ffffff?text=Attack+on+Titan',
    rating: 9.0,
    synopsis: 'Humans vs Titans',
    genres: ['Action', 'Drama'],
    totalEpisodes: 87,
    status: 'completed',
    year: 2013,
    anilistId: 'ani16498',
  },
  {
    id: '2',
    title: 'My Hero Academia',
    poster: 'https://placehold.co/400x600/a855f7/ffffff?text=My+Hero+Academia',
    rating: 8.5,
    synopsis: 'Heroes and villains',
    genres: ['Action', 'Comedy'],
    totalEpisodes: 113,
    status: 'ongoing',
    year: 2016,
    anilistId: 'ani21459',
  },
  {
    id: '3',
    title: 'Demon Slayer',
    poster: 'https://placehold.co/400x600/c084fc/ffffff?text=Demon+Slayer',
    rating: 8.9,
    synopsis: 'Slaying demons',
    genres: ['Action', 'Fantasy'],
    totalEpisodes: 44,
    status: 'ongoing',
    year: 2019,
    anilistId: 'ani101922',
  },
  {
    id: '4',
    title: 'Jujutsu Kaisen',
    poster: 'https://placehold.co/400x600/d8b4fe/ffffff?text=Jujutsu+Kaisen',
    rating: 8.7,
    synopsis: 'Cursed spirits',
    genres: ['Action', 'Supernatural'],
    totalEpisodes: 47,
    status: 'ongoing',
    year: 2020,
    anilistId: 'ani113415',
  },
  {
    id: '5',
    title: 'One Piece',
    poster: 'https://placehold.co/400x600/7c3aed/ffffff?text=One+Piece',
    rating: 8.8,
    synopsis: 'Pirates adventure',
    genres: ['Action', 'Adventure'],
    totalEpisodes: 1071,
    status: 'ongoing',
    year: 1999,
    anilistId: 'ani21',
  },
  {
    id: '6',
    title: 'Naruto',
    poster: 'https://placehold.co/400x600/6d28d9/ffffff?text=Naruto',
    rating: 8.4,
    synopsis: 'Ninja world',
    genres: ['Action', 'Adventure'],
    totalEpisodes: 220,
    status: 'completed',
    year: 2002,
    anilistId: 'ani20',
  },
];

export default function AnimeGridExample() {
  return (
    <div className="bg-background">
      <AnimeGrid
        animes={mockAnimes}
        title="Popular Anime"
        onAnimeClick={(anime) => console.log('Clicked:', anime.title)}
      />
    </div>
  );
}
