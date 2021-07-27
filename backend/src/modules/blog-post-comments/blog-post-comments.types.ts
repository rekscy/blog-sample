export interface BlogPostCommentInput {
  title?: string;
  message: string;
}

export interface BlogPostCommentDataBase {
  id: string;
  title: string | null;
  message: string;
  createdAt: number; // Timezone not managed in purpose
  updatedAt: number | null; // Timezone not managed in purpose
  blogPostId: string;
}
