export type Author = Readonly<{
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
}>;

export type Article = Readonly<{
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: readonly string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}>;

export type GateState = Readonly<{
  id: string;
}>;

export type GetArticleFxDone = Readonly<{
  article: Article;
}>;