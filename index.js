import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { MONGODB } from './config.js';
import { resolvers } from './Graphql/Resolvers/index.js';
import { typeDefs } from './Graphql/TypeDefs.js';

const server = new ApolloServer({
    resolvers,
    typeDefs,
    introspection: true,
    playground: true,


});
const PORT = process.env.PORT || 5000
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
    return server.listen({ port: PORT });
}).then((res) => {
    console.log(`server running on port${res.url}`);
});

