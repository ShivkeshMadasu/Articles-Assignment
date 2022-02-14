const {RESTDataSource} = require('apollo-datasource-rest');

class DataSource extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = 'http://localhost:8080/';
    }

    async getArticles(){
        return this.get('articles');
    }

    async getArticle(id){
        return this.get(`articles/${id}`);
    }

    async updateArticle(id,article){
        return this.patch(`articles/${id}`,article);
    }

} 

module.exports = DataSource;