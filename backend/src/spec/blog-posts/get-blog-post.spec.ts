export default {
  get: {
    tags: ["Blog posts operations"],
    description: "Get a specific blog post by his id",
    operationId: "getBlogPost",
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
              $ref: "#/components/schemas/BlogPost"
            }
          }
        }
      },
      "400": {
        description: "Blog post has invalid params",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/BadRequestError"
            }
          }
        }
      },
      "404": {
        description: "Blog post not exists",
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
