import { z } from "zod";

// Anime schema for the streaming platform
export const animeSchema = z.object({
  id: z.string(),
  title: z.string(),
  anilistId: z.string().optional(),
  malId: z.string().optional(),
  imdbId: z.string().optional(),
  tmdbId: z.string().optional(),
  synopsis: z.string(),
  poster: z.string(),
  rating: z.number(),
  genres: z.array(z.string()),
  totalEpisodes: z.number(),
  status: z.enum(["ongoing", "completed"]),
  year: z.number(),
});

export const episodeSchema = z.object({
  number: z.number(),
  title: z.string(),
  thumbnail: z.string().optional(),
});

export type Anime = z.infer<typeof animeSchema>;
export type Episode = z.infer<typeof episodeSchema>;
