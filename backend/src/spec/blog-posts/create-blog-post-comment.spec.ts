export default {
  post: {
    tags: ["Blog posts comments operations"],
    description: "Create a blog post comment for a specific post",
    operationId: "createBlogPostComment",
    parameters: [
      {
        name: "postId",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id"
        },
        required: true,
        description: "Blog post ID"
      },
      {
        name: "commentId",
        in: "path",
        required: true,
        schema: {
          $ref: "#/components/schemas/id"
        },
        description: "Blog post comment ID"
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/InputBlogPostComment"
          }
        }
      }
    },
    responses: {
      "201": {
        description: "Blog post comment created successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/BlogPostComment"
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
