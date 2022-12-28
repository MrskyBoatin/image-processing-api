import { existsSync } from "fs";
import path from "path";
import sharp from "sharp";

// Type for the input object
type Input = {
  filename: string;
  width: number;
  height: number;
};

// Function to convert an image to a thumbnail with the specified width and height
export async function convertImage({
  filename,
  width,
  height,
}: Input): Promise<string> {
  // Create the file path for the original image
  const filepath = path.join(
    __dirname,
    "..",
    "..",
    "images/full",
    `${filename}.jpg`
  );

  // Create the file path for the thumbnail image
  const savePath = path.join(
    __dirname,
    "..",
    "..",
    "images/thumbnail",
    `${filename}-${width}x${height}.jpg`
  );

  // Check if the thumbnail image already exists
  if (existsSync(savePath)) {
    return savePath;
  }

  // Use the sharp library to resize the image and save it to the thumbnail image path
  await sharp(filepath)
    .resize({
      width: Number(width),
      height: Number(height),
    })
    .toFile(savePath);

  return savePath;
}
