import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import GraphQLBigInt from './GraphQLBigInt';

const PORT = 4000;

const typeDefs = gql`
  scalar BigInt
  type Region {
    id: Int!
    population: BigInt!
  }
  type Query {
    region: Region
  }
`;

const resolvers = {
  BigInt: GraphQLBigInt,
  Query: {
    region: () => ({
      id: 1,
      population: 100n, // Must support bigint values
    }),
  },
};

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
})()
