import { Request, Response, Router } from "express";
import { promises as fs } from "fs";
import { convertImage } from "../../utilities/convertImage";

// Create an express router to handle image requests
const imageRouter = Router();

// Handle a GET request to the /api/images route
imageRouter.get("/", async (req: Request, res: Response) => {
  // Get the filename, width, and height from the query parameters
  const { filename, width, height } = req.query;

  // If any of the required query parameters are missing, return a bad request error
  if (!filename || !width || !height) {
    return res.status(400).json({
      message:
        "Bad request, remember to add filename, width and height query parameters",
    });
  }

  // Get a list of all the filenames in the full directory
  const fullDir = __dirname + "/../../../images/full";
  const files = (await fs.readdir(fullDir)).map((file) => file.split(".")[0]);

  // If the provided filename is not in the list of filenames, return a bad request error
  if (!files.includes(String(filename))) {
    return res.status(400).send("Invalid filename");
  }

  try {
    // Convert the image to the specified width and height
    const image = await convertImage({
      filename: String(filename),
      width: Number(width),
      height: Number(height),
    });

    // Send the converted image to the client
    res.sendFile(image);
  } catch (error) {
    // If an error occurs, log the error and return a server error response
    console.error(error);
    res.status(500).json({
      message:
        "Internal server error: The server encountered an unexpected condition that prevented it from fulfilling the request",
    });
  }
});

export default imageRouter;
