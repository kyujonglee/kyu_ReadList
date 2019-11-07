import dotenv from 'dotenv';
dotenv.config();
import { GraphQLServer } from 'graphql-yoga';
import morgan from 'morgan';
import resolvers from './graphql/resolver';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 4000;

// mongoose connect
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('✅ connected to database'));

import './models/authorSchema';
import './models/bookSchema';

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers
});

server.express.use(morgan('dev'));

server.start({ port: PORT }, () =>
  console.log(`✅ server running on port ${PORT}`)
);
