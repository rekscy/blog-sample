import request from "supertest";
import { app } from "../../../app";
import {
  BlogPostComment,
  BlogPostComments
} from "../../../../../client/src/components/blog-post-comment-list/blog-post-comment-list.types";
import { BlogPost } from "../../../../../client/src/components/blog-post/blog-post.types";

describe("Blog post comments router", () => {
  describe("Get post comments", () => {
    it("return status 200 when comment post get fetched", () => {
      return request(app).get("/blog-posts/abc/comments").expect(200);
    });

    it("return status 400 when invalid comment post get fetched", () => {
      return request(app).get("/blog-posts/ab<c/comments").expect(400);
    });

    it("return status 404 when invalid post comment get fetched", () => {
      return request(app).get("/blog-posts/abcd/comments").expect(404);
    });
  });

  describe("Create post comment", () => {
    it("return status 201 when comment post is created and update nbr of comments", async () => {
      return request(app)
        .get("/blog-posts/abc")
        .expect(200)
        .then(async (getResponse) => {
          await request(app)
            .post("/blog-posts/abc/comments")
            .send({
              title: "Coding the challenge",
              message: "Long message containing text"
            })
            .expect(201)
            .then(async (postResponse) => {
              const postData: BlogPostComment = postResponse.body;
              expect(postData).toHaveProperty("id");
              await request(app)
                .get(`/blog-posts/abc/comments`)
                .expect(200)
                .then((commentsGetResponse) => {
                  const beforeModificationBlogPost: BlogPost = getResponse.body;
                  const comments: BlogPostComments = commentsGetResponse.body;

                  expect(beforeModificationBlogPost.nbrComments + 1).toEqual(
                    comments.length
                  );
                });
            });
        });
    });

    it("return status 201 when missing title", () => {
      return request(app)
        .post("/blog-posts/abc/comments")
        .send({
          message: "Long message containing text"
        })
        .expect(201);
    });

    it("return status 400 when missing message", () => {
      return request(app)
        .post("/blog-posts/abc/comments")
        .send({
          title: "Title"
        })
        .expect(400);
    });

    it("return status 400 when invalid when invalid post param is provided", () => {
      return request(app)
        .post("/blog-posts/a<bc/comments")
        .send({
          title: "Coding the challenge",
          message: "Long message containing text"
        })
        .expect(400);
    });

    it("return status 404 when invalid when invalid post is provided", () => {
      return request(app)
        .post("/blog-posts/abcd/comments")
        .send({
          title: "Coding the challenge",
          message: "Long message containing text"
        })
        .expect(404);
    });
  });

  describe("Update post comment", () => {
    it("return status 204 when comment post is updated", () => {
      return request(app)
        .put("/blog-posts/efg/comments/abc")
        .send({
          title: "Coding the challenge",
          message: "Long message containing text"
        })
        .expect(204);
    });

    it("return status 400 when update  wrong comment", () => {
      return request(app)
        .put("/blog-posts/efg/comments/ab<c")
        .send({
          title: "Coding the challenge",
          message: "Long message containing text"
        })
        .expect(400);
    });

    it("return status 400 when update with invalid post param is provided", () => {
      return request(app)
        .put("/blog-posts/ef<g/comments/abc")
        .send({
          title: "Coding the challenge",
          message: "Long message containing text"
        })
        .expect(400);
    });

    it("return status 404 when update with wrong comment id", () => {
      return request(app)
        .put("/blog-posts/efg/comments/abce")
        .send({
          title: "Coding the challenge",
          message: "Long message containing text"
        })
        .expect(404);
    });

    it("return status 404 when update with wrong post id", () => {
      return request(app)
        .put("/blog-posts/efgs/comments/abc")
        .send({
          title: "Coding the challenge",
          message: "Long message containing text"
        })
        .expect(404);
    });
  });
});
