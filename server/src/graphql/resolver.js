export let books = [
  { name: '죽음1', genre: 'Fantasy', id: '1', authorId: '1' },
  { name: '실전 리액트 프로그래밍', genre: 'Fantasy', id: '2', authorId: '2' },
  { name: '역사의 역사', genre: 'SF', id: '3', authorId: '3' }
];

export let authors = [
  { name: '베르나르 베르베르', age: 44, id: '1' },
  { name: '이재승', age: 33, id: '2' },
  { name: '유시민', age: 50, id: '3' }
];

const resolvers = {
  Query: {
    book: (parent, { id }) => {
      const book = books.filter(book => book.id === id);
      //   book[0].author = authors.filter(
      //     author => author.id === book[0].authorId
      //   )[0];
      return book[0];
      // code to get data from db / other source
    },
    author: (parent, { id }) => {
      const author = authors.filter(author => author.id === id);
      return author[0];
    }
  },
  Book: {
    author: ({authorId}, args) => {
      const author = authors.filter(author => author.id === authorId);
      return author[0];
    }
  }
};

export default resolvers;
