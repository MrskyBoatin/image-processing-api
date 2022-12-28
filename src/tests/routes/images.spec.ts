import { existsSync } from "fs";
import request from "supertest";
import app from "../../app";
import { convertImage } from "../../utilities/convertImage";

// Test the /api/images route
describe("GET /api/images", () => {
  // Test the behavior when all required query parameters are provided
  describe("when all required query parameters are provided", () => {
    it("returns a resized image thumbnail", async () => {
      const response = await request(app).get(
        "/api/images?filename=encenadaport&width=200&height=200"
      );

      expect(response.status).toEqual(200);
      expect(response.headers["content-type"]).toEqual("image/jpeg");
    });
  });

  // Test the behavior when a required query parameter is missing
  describe("when a required query parameter is not provided", () => {
    it("returns a 400 Bad Request error", async () => {
      const response = await request(app).get(
        "/api/images?filename=encenadaport&width=200"
      );

      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual(
        "filename, width and height query parameter is required"
      );
    });
  });
});

// Test the convertImage function
describe("convertImage", () => {
  // Test the behavior when the file exists
  describe("when the file exists", () => {
    it("returns a resized image", async () => {
      const image = await convertImage({
        filename: "encendaport",
        width: 200,
        height: 200,
      });

      expect(existsSync(image)).toEqual(true);
      expect(image).toContain("encenadaport-200x200.jpg");
    });
  });

  describe("when the file does not exist", () => {
    it("returns an error", async () => {
      await expectAsync(
        convertImage({
          filename: "notFound",
          width: 200,
          height: 200,
        })
      ).toBeRejected();
    });
  });
});
