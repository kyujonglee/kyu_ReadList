import Book from '../models/bookSchema';
import Author from '../models/authorSchema';

const resolvers = {
  Query: {
    book: async (parent, { id }) => {
      return await Book.findById(id);
      // code to get data from db / other source
    },
    author: async (parent, { id }) => {
      return await Author.findById(id);
    },
    books: async (_, args) => {
      return await Book.find({});
    },
    authors: async (_, args) => {
      return await Author.find({});
    }
  },
  Book: {
    author: async ({ authorId }, args) => {
      return await Author.findById(authorId);
    }
  },
  Author: {
    books: async ({ id }, args) => {
      return await Book.find({ authorId: id });
    }
  },
  Mutation: {
    addAuthor: async (_, { name, age }) => {
      let author = new Author({
        name,
        age
      });
      return await author.save();
    },
    addBook: async (_, { name, genre, authorId }) => {
      let book = new Book({
        name,
        genre,
        authorId
      });
      return await book.save();
    },
    deleteBook: async (_, { id }) => {
      const { n } = await Book.deleteOne({ _id: id });
      return n === 1 ? true : false;
    }
  }
};

export default resolvers;
