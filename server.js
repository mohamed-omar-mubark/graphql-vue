import { ApolloServer, gql } from "apollo-server";

// Define schema
const typeDefs = gql`
  type Query {
    hello: String
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

// Users data
const users = [
  { id: 1, name: "Mohamed Omar", email: "mohamed@gmail.com" },
  { id: 2, name: "Ahmed Ali", email: "ahmed@gmail.com" },
  { id: 3, name: "Ali Mohamed", email: "ali@gmail.com" },
];

// Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello from Apollo Server!",
    users: () => users,
  },
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Enable introspection
  playground: true, // Enable GraphQL Playground
});

// Start the server
server.listen({ port: 8080 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
