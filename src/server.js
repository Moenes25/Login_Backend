import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { setContext } from 'apollo-link-context';
import {
  verifyToken
} from "./utils/authorization"

import { Mutation } from "../src/Graphql/Admin/Mutations/mutationsAdmin";
import { typeDefs } from "../src/Graphql/Admin/Types/typesAdmin";

 // root server                     
const startServer = async () => {
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true 
  };
// this will handel the work with mongodb
 const server = new ApolloServer({
  
  typeDefs,
  // extend Query and Mutation
 resolvers:Mutation,
 context: ({req,res}) => ({
   req : req,
   res : res
 }),
 cors: corsOptions
});
 // connect to Mongodb database
const mongoServer = await mongoose.connect("mongodb://localhost:27017/Admindb", {
  useUnifiedTopology: true ,useNewUrlParser: true}).catch((err) => console.log('no connection was found'))
 // starting the server on port 5000
 mongoServer ? server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at  ${url}`)
}).catch((err) => console.log('check server catch')) : console.log('server not working')
}; 
// call the root Function
startServer();