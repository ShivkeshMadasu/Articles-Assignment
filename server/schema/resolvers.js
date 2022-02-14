// const {data} = require('../Articles/articles')
// const _ = require('lodash')

const resolvers = {

    Query : {

        articles: (_, __, { dataSources }) =>
            dataSources.articleAPI.getArticles(),

        article : (parent,{id},{dataSources}) => 
            dataSources.articleAPI.getArticle(id)
        
    },
    

    Mutation : {
        updateArticle : async (parent,{id,newContent},{dataSources}) => {
            let article = await dataSources.articleAPI.getArticle(id);
            if(article)
            {
                console.log(article);
                article.content = newContent;
                console.log(article);
                return await dataSources.articleAPI.updateArticle(id,article);
            }
        }
    }

}

module.exports = {resolvers};


// Query : {
//     articles(){
//         return data;
//     },
//     article : (parent,{id}) => {
//         return _.find(data, {id : Number(id)});
//     }
// },

// Mutation : {
//     updateArticle : (parent,{id,newContent}) => {
//         let updatedArticle;
//         data.forEach( (article) => {
//             if(article.id === Number(id))
//             {
//                 article.content = newContent;
//                 updatedArticle = article;
//             }
//         });
//         return updatedArticle;
//     }
// }