export default {
  get: {
    tags: ["Blog posts operations"],
    description: "Get all blog posts",
    operationId: "getBlogPosts",
    parameters: [],
    responses: {
      "200": {
        description: "Blog posts were obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/BlogPosts"
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
