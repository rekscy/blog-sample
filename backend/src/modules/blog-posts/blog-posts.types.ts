import { DateTime } from "luxon";

export interface BlogPostCommentInput{
  title?: string;
  message: string;
}

export interface BlogPostComment{
  id: string,
  title: string | null,
  message: string,
  createdAt: DateTime,
  updatedAt: DateTime | null,
  blogPostId: string
}

export interface BlogPostCommentDataBase{
  id: string,
  title: string | null,
  message: string,
  createdAt: number,
  updatedAt: number | null,
  blogPostId: string
}
