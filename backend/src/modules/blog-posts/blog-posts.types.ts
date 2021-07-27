export interface BlogPostDataBase {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number | null;
  nbrComments: number;
}
