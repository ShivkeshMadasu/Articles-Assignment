const {gql} = require('apollo-server');

const typeDefs = gql`
    type Article {
        id : ID!
        author : String!
        title : String!
        image : String!
        publishedAt : String!
        likes : Int!
        dislikes : Int!
        content : String!
    }

    type Query{
        articles : [Article!]!
        article(id: ID!): Article!
    }

    type Mutation{
        updateArticle( id : ID!, newContent : String) : Article
    }
`;

module.exports = {typeDefs};