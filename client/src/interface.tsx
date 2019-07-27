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

export interface Authors {
  authors: [Author];
}

export interface Book {
  id: string;
  genre: string;
  name: string;
  authorId: string;
}

export interface BookVariables {
  genre: string;
  name: string;
  authorId: string;
}

export interface IDetail_Book {
  book: {
    name: string;
    genre: string;
    author: {
      name: string;
      age: number;
      books: [Book];
    };
  };
}