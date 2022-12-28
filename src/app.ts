import express, { NextFunction, Request, Response } from "express";
import imageRouter from "./routes/images";

// Create an Express app
const app = express();

// Middleware to log image processing and access
app.use((req: Request, _: Response, next: NextFunction) => {
  console.log(
    `${req.method} ${req.path} filename:${req.query.filename} width:${req.query.width} height:${req.query.height}`
  );
  next();
});

// Mount the imageRouter on the /api/images path
app.use("/api/images", imageRouter);

// Catch-all route to handle 404 errors
app.use("*", (_: Request, res: Response) => {
  res.status(404).send(`<h1>404: The requested resource was not found</h1>`);
});

export default app;
