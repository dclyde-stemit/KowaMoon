import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all anime
  app.get("/api/anime", async (_req, res) => {
    try {
      const animes = await storage.getAllAnime();
      res.json(animes);
    } catch (error) {
      console.error("Error fetching anime:", error);
      res.status(500).json({ error: "Failed to fetch anime" });
    }
  });

  // Search anime
  app.get("/api/anime/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ error: "Search query required" });
      }
      
      const results = await storage.searchAnime(query);
      res.json(results);
    } catch (error) {
      console.error("Error searching anime:", error);
      res.status(500).json({ error: "Failed to search anime" });
    }
  });

  // Get specific anime by ID
  app.get("/api/anime/:id", async (req, res) => {
    try {
      const anime = await storage.getAnimeById(req.params.id);
      if (!anime) {
        return res.status(404).json({ error: "Anime not found" });
      }
      await storage.recordView(req.params.id);
      res.json(anime);
    } catch (error) {
      console.error("Error fetching anime:", error);
      res.status(500).json({ error: "Failed to fetch anime" });
    }
  });

  // Get trending anime
  app.get("/api/anime/trending/list", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const trending = await storage.getTrendingAnime(limit);
      res.json(trending);
    } catch (error) {
      console.error("Error fetching trending anime:", error);
      res.status(500).json({ error: "Failed to fetch trending anime" });
    }
  });

  // Get latest anime
  app.get("/api/anime/latest/list", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const latest = await storage.getLatestAnime(limit);
      res.json(latest);
    } catch (error) {
      console.error("Error fetching latest anime:", error);
      res.status(500).json({ error: "Failed to fetch latest anime" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
