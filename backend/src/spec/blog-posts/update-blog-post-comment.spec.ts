export default {
  put: {
    tags: ["Blog posts comments operations"],
    description: "Update blog post comment by id for a specific post",
    operationId: "updateBlogPostComment",
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
      "204": {
        description: "Comment updated successfully",
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
