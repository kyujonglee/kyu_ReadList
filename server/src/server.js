import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolver';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers
});

server.start({ port: PORT }, () =>
  console.log(`server running on port ${PORT}`)
);
