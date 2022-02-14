import React from 'react';
import DisplayArticles from '../../organisms/ArticleList/DisplayArticles';
//import ArticleList from '../../organisms/ArticleList/ArticleList';
import Header from '../../organisms/Header/Header';

function ArticlesPage() {
  return <div>
      <Header />
      <DisplayArticles />
      {/* <ArticleList /> */}
  </div>;
}

export default ArticlesPage;
