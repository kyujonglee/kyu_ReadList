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

export const DETAIL_BOOK = gql`
  query Detail_book_query($id: String!) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
        books {
          name
          genre
        }
      }
    }
  }
`;

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

export const DELETE_BOOK = gql`
  mutation Delete_book_mutation($id: String!){
    deleteBook(id:$id)
  }
`;
