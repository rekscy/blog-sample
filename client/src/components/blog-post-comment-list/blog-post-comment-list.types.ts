export interface BlogPostCommentListListProps {
  postId: string;
}

export type BlogPostComments = BlogPostComment[];

export interface BlogPostComment {
  id: string;
  title: string | null;
  message: string;
  createdAt: number; // Timezone not managed in purpose
  updatedAt: number | null; // Timezone not managed in purpose
  blogPostId: string;
}
