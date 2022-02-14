import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from './components/Page/Article/ArticlesPage';
import ArticleDetailPage from "./components/Page/ArticleDetailPage/ArticleDetailPage";

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
//import DisplayArticles from './components/organisms/ArticleList/DisplayArticles';

const App: React.FC= () => {
  const client = new ApolloClient({
    cache : new InMemoryCache(),
    uri : 'http://localhost:4000/graphql'
  });
  return (<ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<ArticlesPage />}></Route>
      <Route path="/article" element={<ArticleDetailPage />}></Route>
      </Routes>
  </BrowserRouter>
  </ApolloProvider>
  );
}

export default App;

/* <BrowserRouter>
<Routes>
  <Route path="/" element={<ArticlesPage />}></Route>
  <Route path="/article" element={<ArticleDetailPage />}></Route>
</Routes>
</BrowserRouter> */
