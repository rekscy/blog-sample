export interface BlogPostProps {
  postId: string;
}

export type BlogPosts = BlogPost[];

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number | null;
  nbrComments: number;
}
