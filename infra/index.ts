import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize the app immediately
(async () => {
  await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  if (app.get("env") === "development") {
    const server = createServer(app);
    await setupVite(app, server);
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen(port, "0.0.0.0", () => log(`serving on port ${port}`));
  } else if (!process.env.VERCEL) {
    serveStatic(app);
    const port = parseInt(process.env.PORT || '5000', 10);
    app.listen(port, "0.0.0.0", () => log(`serving on port ${port}`));
  }
})();

export default app;
