const {ApolloServer, gql} = require('apollo-server');
const {typeDefs} = require("./schema/typedefs");
const {resolvers} = require('./schema/resolvers')
const DataSource = require('./datasource')
 
const server = new ApolloServer({
    typeDefs,resolvers,dataSources: () => ({
        articleAPI: new DataSource()
    })
});

server.listen().then(({url}) => {
    console.log(`Server is running at ${url}`);
})