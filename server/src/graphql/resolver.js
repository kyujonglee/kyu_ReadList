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
    },
    deleteBook: async (_, { id }) => {
      const { n } = await Book.deleteOne({ _id: id });
      return n === 1 ? true : false;
    }
  }
};

export default resolvers;
