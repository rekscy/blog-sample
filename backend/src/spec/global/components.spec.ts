export default {
  components: {
    schemas: {
      id: {
        type: "string",
        required: true,
        description: "Identifier",
        example: "abc123XYZ"
      },
      BlogPosts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/BlogPost"
        }
      },
      BlogPost: {
        type: "object",
        properties: {
          id: {
            type: "string",
            required: true,
            description: "BlogPost identifier",
            example: "abc123XYZ"
          },
          title: {
            type: "string",
            required: true,
            description: "Blog Post title",
            example: "Coding the challenge"
          },
          content: {
            type: "string",
            required: true,
            description: "Blog post content",
            example: "Long message containing html"
          },
          nbrComments: {
            type: "number",
            required: true,
            description: "Number of comments in the post",
            example: 3
          },
          createdAt: {
            type: "number",
            required: true,
            description: "Timestamp of creation",
            example: 1627197863
          }
        }
      },
      BlogPostComments: {
        type: "array",
        items: {
          $ref: "#/components/schemas/BlogPostComment"
        }
      },
      BlogPostComment: {
        type: "object",
        properties: {
          id: {
            type: "string",
            required: true,
            description: "BlogPost comment identifier",
            example: "abc123XYZ"
          },
          title: {
            type: "string",
            description: "Comment title",
            example: "Great post!"
          },
          message: {
            type: "string",
            required: true,
            description: "Comment message",
            example: "Thank you for the post!"
          },
          createdAt: {
            type: "number",
            required: true,
            description: "Timestamp of creation",
            example: 1627197863
          },
          updatedAt: {
            type: "number",
            required: true,
            description: "Timestamp of last modification",
            example: 1627197863
          },
          blogPostId: {
            type: "string",
            required: true,
            description: "BlogPost identifier",
            example: "abc123XYZ"
          }
        }
      },
      InputBlogPostComment: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Blog post comment title",
            example: "Coding the challenge"
          },
          message: {
            type: "string",
            required: true,
            description: "Blog post comment message",
            example: "Long message containing html"
          }
        }
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string"
          },
          errors: {
            type: "array",
            items: {
              type: "object",
              properties: {
                field: {
                  type: "string"
                },
                errorMessage: {
                  type: "string"
                }
              }
            }
          }
        },
        example: {
          message: "Some error message"
        }
      },
      BadRequestError: {
        type: "object",
        properties: {
          message: {
            type: "string"
          }
        },
        example: {
          message: "Invalid parameters provided",
          errors: [
            {
              field: "title",
              errorMessage: "Title must be a valid string"
            },
            {
              field: "content",
              errorMessage: "Content must be provided"
            }
          ]
        }
      }
    }
  }
};
