import Book from '../models/bookSchema';
import Author from '../models/authorSchema';

const resolvers = {
  Query: {
    book: (parent, { id }) => {
      return Book.findById(id);
      // code to get data from db / other source
    },
    author: (parent, { id }) => {
      return Author.findById(id);
    },
    books: (_, args) => {
      return Book.find({});
    },
    authors: (_, args) => {
      return Author.find({});
    }
  },
  Book: {
    author: ({ authorId }, args) => {
      return Author.findById(authorId);
    }
  },
  Author: {
    books: ({ id }, args) => {
      return Book.find({ authorId: id });
    }
  },
  Mutation: {
    addAuthor: (_, { name, age }) => {
      let author = new Author({
        name,
        age
      });
      return author.save();
    },
    addBook: (_, { name, genre, authorId }) => {
      let book = new Book({
        name,
        genre,
        authorId
      });
      return book.save();
    }
  }
};

export default resolvers;

// export let books = [
//   { name: '죽음1', genre: '소설', id: '1', authorId: '1' },
//   { name: '개미', genre: '소설', id: '6', authorId: '1' },
//   { name: '실전 리액트 프로그래밍', genre: 'Fantasy', id: '2', authorId: '2' },
//   { name: '역사의 역사', genre: 'SF', id: '3', authorId: '3' },
//   { name: '유럽 도시 기행', genre: '여행', id: '4', authorId: '3' },
//   { name: '청춘의 독서', genre: '에세이', id: '5', authorId: '3' }
// ];

// export let authors = [
//   { name: '베르나르 베르베르', age: 44, id: '1' },
//   { name: '이재승', age: 33, id: '2' },
//   { name: '유시민', age: 50, id: '3' }
// ];
