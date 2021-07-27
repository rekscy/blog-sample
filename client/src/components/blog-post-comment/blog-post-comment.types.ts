export interface BlogPostCommentListListProps {
  postId: string
}

export type BlogPostComments = BlogPostComment[];

export interface BlogPostComment {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number | null;
  nbrComments: number;
}
