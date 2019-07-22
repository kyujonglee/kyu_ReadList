export interface Data {
  books: Array<{
    id: string;
    name: string;
    genre: string;
    authorId: string;
    author: Author;
  }>;
}

export interface Author {
  age: number;
  name: string;
  id: string;
}

export interface Book {
  id: string;
  genre: string;
  name: string;
  authorId: string;
}
