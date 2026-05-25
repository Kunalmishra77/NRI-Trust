import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// IMPORTANT: Register routes synchronously for Vercel Serverless
registerRoutes(app);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// For Vercel
export default app;

// Local development listener
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const port = parseInt(process.env.PORT || '5000', 10);
  const server = createServer(app);
  
  (async () => {
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }
    server.listen(port, "0.0.0.0", () => log(`serving on port ${port}`));
  })();
}
