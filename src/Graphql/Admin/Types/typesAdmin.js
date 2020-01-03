import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Query {
    root : String
  }
  type Admin {
    username: String
  	password: Boolean,
  }
  type Mutation {
    login(username: String! password: String!): Admin!   
  }
`;
