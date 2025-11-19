import { type Anime } from "@shared/schema";

// Storage interface for anime streaming platform
export interface IStorage {
  getAllAnime(): Promise<Anime[]>;
  getAnimeById(id: string): Promise<Anime | undefined>;
  searchAnime(query: string): Promise<Anime[]>;
}

export class MemStorage implements IStorage {
  private animes: Map<string, Anime>;

  constructor() {
    this.animes = new Map();
    this.initializeAnimeData();
  }

  private initializeAnimeData() {
    // Popular anime catalog with real IDs for video players
    const animeList: Anime[] = [
      {
        id: '1',
        title: 'Attack on Titan',
        poster: 'https://placehold.co/400x600/ff7043/ffffff?text=Attack+on+Titan',
        rating: 9.0,
        synopsis: 'In a world where humanity resides within enormous walled cities to protect themselves from the gigantic man-eating Titans that roam the outside world, Eren Yeager joins the military with his childhood friends Mikasa and Armin to fight back against the Titans and discover the truth about their existence.',
        genres: ['Action', 'Dark Fantasy', 'Drama', 'Post-Apocalyptic'],
        totalEpisodes: 87,
        status: 'completed',
        year: 2013,
        anilistId: 'ani16498',
        malId: 'mal16498',
        tmdbId: '1429',
      },
      {
        id: '2',
        title: 'My Hero Academia',
        poster: 'https://placehold.co/400x600/ff8a65/ffffff?text=My+Hero+Academia',
        rating: 8.5,
        synopsis: 'A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.',
        genres: ['Action', 'Comedy', 'Superhero'],
        totalEpisodes: 138,
        status: 'ongoing',
        year: 2016,
        anilistId: 'ani21459',
        malId: 'mal31964',
        tmdbId: '65930',
      },
      {
        id: '3',
        title: 'Demon Slayer',
        poster: 'https://placehold.co/400x600/ffab91/ffffff?text=Demon+Slayer',
        rating: 8.9,
        synopsis: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and find a cure for his sister.',
        genres: ['Action', 'Fantasy', 'Supernatural'],
        totalEpisodes: 55,
        status: 'ongoing',
        year: 2019,
        anilistId: 'ani101922',
        malId: 'mal38000',
        tmdbId: '85937',
      },
      {
        id: '4',
        title: 'Jujutsu Kaisen',
        poster: 'https://placehold.co/400x600/ffccbc/ffffff?text=Jujutsu+Kaisen',
        rating: 8.7,
        synopsis: 'A boy swallows a cursed talisman and becomes a host to a powerful Curse, joining a secret organization of Jujutsu Sorcerers in order to kill the demon living inside him.',
        genres: ['Action', 'Supernatural', 'School'],
        totalEpisodes: 47,
        status: 'ongoing',
        year: 2020,
        anilistId: 'ani113415',
        malId: 'mal40748',
        tmdbId: '95479',
      },
      {
        id: '5',
        title: 'One Piece',
        poster: 'https://placehold.co/400x600/ef5350/ffffff?text=One+Piece',
        rating: 8.8,
        synopsis: 'Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the "One Piece".',
        genres: ['Action', 'Adventure', 'Fantasy'],
        totalEpisodes: 1086,
        status: 'ongoing',
        year: 1999,
        anilistId: 'ani21',
        malId: 'mal21',
        tmdbId: '37854',
      },
      {
        id: '6',
        title: 'Naruto',
        poster: 'https://placehold.co/400x600/f4511e/ffffff?text=Naruto',
        rating: 8.4,
        synopsis: 'Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi attacked his village.',
        genres: ['Action', 'Adventure', 'Martial Arts'],
        totalEpisodes: 220,
        status: 'completed',
        year: 2002,
        anilistId: 'ani20',
        malId: 'mal20',
        tmdbId: '46260',
      },
      {
        id: '7',
        title: 'Spy x Family',
        poster: 'https://placehold.co/400x600/ff6f00/ffffff?text=Spy+x+Family',
        rating: 8.6,
        synopsis: 'A spy must create a fake family to complete a mission, unaware that the girl he adopts is a telepath and his wife is an assassin.',
        genres: ['Action', 'Comedy', 'Slice of Life'],
        totalEpisodes: 37,
        status: 'ongoing',
        year: 2022,
        anilistId: 'ani140960',
        malId: 'mal50265',
        tmdbId: '111110',
      },
      {
        id: '8',
        title: 'Death Note',
        poster: 'https://placehold.co/400x600/fb8c00/ffffff?text=Death+Note',
        rating: 8.9,
        synopsis: 'An intelligent high school student goes on a secret crusade to eliminate criminals after discovering a mysterious notebook that can kill anyone whose name is written in it.',
        genres: ['Mystery', 'Psychological', 'Thriller'],
        totalEpisodes: 37,
        status: 'completed',
        year: 2006,
        anilistId: 'ani1535',
        malId: 'mal1535',
        tmdbId: '13916',
      },
      {
        id: '9',
        title: 'Fullmetal Alchemist: Brotherhood',
        poster: 'https://placehold.co/400x600/ffa726/ffffff?text=Fullmetal+Alchemist',
        rating: 9.1,
        synopsis: 'Two brothers search for a Philosophers Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.',
        genres: ['Action', 'Adventure', 'Fantasy'],
        totalEpisodes: 64,
        status: 'completed',
        year: 2009,
        anilistId: 'ani5114',
        malId: 'mal5114',
        tmdbId: '31911',
      },
      {
        id: '10',
        title: 'Chainsaw Man',
        poster: 'https://placehold.co/400x600/ff9800/ffffff?text=Chainsaw+Man',
        rating: 8.6,
        synopsis: 'Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.',
        genres: ['Action', 'Dark Fantasy', 'Horror'],
        totalEpisodes: 12,
        status: 'completed',
        year: 2022,
        anilistId: 'ani127230',
        malId: 'mal44511',
        tmdbId: '114410',
      },
      {
        id: '11',
        title: 'Tokyo Ghoul',
        poster: 'https://placehold.co/400x600/ffb74d/ffffff?text=Tokyo+Ghoul',
        rating: 8.0,
        synopsis: 'A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh. He survives, but has become part ghoul and becomes trapped in a warring underground.',
        genres: ['Action', 'Dark Fantasy', 'Horror'],
        totalEpisodes: 48,
        status: 'completed',
        year: 2014,
        anilistId: 'ani22319',
        malId: 'mal22319',
        tmdbId: '61374',
      },
      {
        id: '12',
        title: 'Steins Gate',
        poster: 'https://placehold.co/400x600/ffcc80/ffffff?text=Steins+Gate',
        rating: 9.0,
        synopsis: 'A group of friends discover how to alter the past using a modified microwave, creating a butterfly effect that spirals out of control.',
        genres: ['Sci-Fi', 'Thriller', 'Drama'],
        totalEpisodes: 24,
        status: 'completed',
        year: 2011,
        anilistId: 'ani9253',
        malId: 'mal9253',
        tmdbId: '45782',
      },
      {
        id: '13',
        title: 'One Punch Man',
        poster: 'https://placehold.co/400x600/ff5722/ffffff?text=One+Punch+Man',
        rating: 8.7,
        synopsis: 'The story of Saitama, a hero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge.',
        genres: ['Action', 'Comedy', 'Superhero'],
        totalEpisodes: 24,
        status: 'ongoing',
        year: 2015,
        anilistId: 'ani21087',
        malId: 'mal30276',
        tmdbId: '63926',
      },
      {
        id: '14',
        title: 'Hunter x Hunter',
        poster: 'https://placehold.co/400x600/e64a19/ffffff?text=Hunter+x+Hunter',
        rating: 9.0,
        synopsis: 'A young boy, Gon, discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits.',
        genres: ['Action', 'Adventure', 'Fantasy'],
        totalEpisodes: 148,
        status: 'completed',
        year: 2011,
        anilistId: 'ani11061',
        malId: 'mal11061',
        tmdbId: '46298',
      },
      {
        id: '15',
        title: 'Mob Psycho 100',
        poster: 'https://placehold.co/400x600/d84315/ffffff?text=Mob+Psycho+100',
        rating: 8.6,
        synopsis: 'A powerful psychic, Mob, tries to live a normal life and keep his powers in check, but when his emotions reach 100%, something terrible happens.',
        genres: ['Action', 'Comedy', 'Supernatural'],
        totalEpisodes: 37,
        status: 'completed',
        year: 2016,
        anilistId: 'ani21507',
        malId: 'mal32182',
        tmdbId: '67195',
      },
      {
        id: '16',
        title: 'Cowboy Bebop',
        poster: 'https://placehold.co/400x600/bf360c/ffffff?text=Cowboy+Bebop',
        rating: 8.9,
        synopsis: 'The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.',
        genres: ['Action', 'Sci-Fi', 'Space Western'],
        totalEpisodes: 26,
        status: 'completed',
        year: 1998,
        anilistId: 'ani1',
        malId: 'mal1',
        tmdbId: '4156',
      },
      {
        id: '17',
        title: 'Vinland Saga',
        poster: 'https://placehold.co/400x600/ff7043/ffffff?text=Vinland+Saga',
        rating: 8.8,
        synopsis: 'Thorfinn pursues a journey with his fathers killer in order to take revenge and end his life in a duel as an honorable warrior.',
        genres: ['Action', 'Adventure', 'Historical'],
        totalEpisodes: 48,
        status: 'ongoing',
        year: 2019,
        anilistId: 'ani101348',
        malId: 'mal37521',
        tmdbId: '82682',
      },
      {
        id: '18',
        title: 'Code Geass',
        poster: 'https://placehold.co/400x600/ff8a65/ffffff?text=Code+Geass',
        rating: 8.8,
        synopsis: 'After being given a mysterious power to control others, an outcast prince begins a rebellion to bring down the holy empire.',
        genres: ['Action', 'Drama', 'Mecha'],
        totalEpisodes: 50,
        status: 'completed',
        year: 2006,
        anilistId: 'ani1575',
        malId: 'mal1575',
        tmdbId: '4087',
      },
    ];

    animeList.forEach(anime => {
      this.animes.set(anime.id, anime);
    });
  }

  async getAllAnime(): Promise<Anime[]> {
    return Array.from(this.animes.values());
  }

  async getAnimeById(id: string): Promise<Anime | undefined> {
    return this.animes.get(id);
  }

  async searchAnime(query: string): Promise<Anime[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.animes.values()).filter(anime =>
      anime.title.toLowerCase().includes(lowerQuery) ||
      anime.genres.some(genre => genre.toLowerCase().includes(lowerQuery))
    );
  }
}

export const storage = new MemStorage();
