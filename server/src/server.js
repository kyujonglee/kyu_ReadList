import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolver';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 4000;

// mongoose connect
mongoose.connect(
  'mongodb+srv://user:user@cluster0-62rou.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);
mongoose.connection.once('open', () => console.log('connected to database'));

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers
});

server.start({ port: PORT }, () =>
  console.log(`server running on port ${PORT}`)
);
