import gql from 'graphql-tag';

export const ALL_BOOKS = gql`
  query All_Books_Query {
    books {
      id
      name
      genre
    }
  }
`;

export const ALL_AUTHOR = gql`
  query All_authors_query {
    authors {
      id
      name
      age
    }
  }
`;

export const Detail_Book = gql``;

export const ADD_BOOK = gql`
  mutation Add_book_mutation(
    $name: String!
    $genre: String!
    $authorId: String!
  ) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
    }
  }
`;
