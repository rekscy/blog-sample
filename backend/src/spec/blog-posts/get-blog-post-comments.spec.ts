export default {
  get: {
    tags: ["Blog posts comments operations"],
    description: "Get blog post comments for a specific post",
    operationId: "getBlogPostComments",
    parameters: [
      {
        name: "postId",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id"
        },
        required: true,
        description: "Blog post ID"
      }
    ],
    responses: {
      "200": {
        description: "Blog post details",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/BlogPostComments"
            }
          }
        }
      },
      "400": {
        description: "Blog post comment has invalid params",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/BadRequestError"
            }
          }
        }
      },
      "404": {
        description: "Blog post does not exist",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error"
            }
          }
        }
      },
      "500": {
        description: "Internal error",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error"
            }
          }
        }
      }
    }
  }
};
