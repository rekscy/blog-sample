import request from "supertest";
import { app } from "../../../app";

describe("Blog post router", () => {
  describe("Get posts", () => {
    it("return status 200 when posts get fetched", () => {
      return request(app).get("/blog-posts").expect(200);
    });
  });

  describe("Get posts by id", () => {
    it("return status 200 when post abc get fetched", () => {
      return request(app).get("/blog-posts/abc").expect(200);
    });

    it("return status 400 when post ab<c get fetched", () => {
      return request(app).get("/blog-posts/ab<c").expect(400);
    });

    it("return status 404 when post abcd get fetched", () => {
      return request(app).get("/blog-posts/abcd").expect(404);
    });
  });
});
