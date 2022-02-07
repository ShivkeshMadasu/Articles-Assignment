import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from './components/Page/Article/ArticlesPage';
import React from 'react';
import ArticleDetailPage from "./components/Page/ArticleDetailPage/ArticleDetailPage";

const App: React.FC= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesPage />}></Route>
        <Route path="/article" element={<ArticleDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
