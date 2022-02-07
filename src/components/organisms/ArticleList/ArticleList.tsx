import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Typography } from '@mui/material';
import Card from "../../molecules/Article/Article"
import CustomButton from '../../atoms/Button/Button';

interface Article{
    id: number;
    title: string;
    author: string;
    image: string;
    likes: number;
    dislikes: number;
}


const ArticleList = () =>{

    const [user, setUser] = useState("user");
    const handleUser = () => {
      setUser("admin");
    }
    const navigate = useNavigate();
    const [articles,setArticles] = useState<Article[]>([]);
    useEffect(() => {
        async function getArticle() {
            await axios.get("http://localhost:8000/articles").then((res) => {
            setArticles(res.data);
            });
        }
        getArticle();
    },[]);
    const cards = (articlesList: Article[]) => {
        return articlesList.map((article: Article,index) => {
          return (
            <Grid item xs={12} sm={12} md={12} lg={12} key={index} >
              <Card
                id={article.id}
                title={article.title}
                author={article.author}
                image={article.image}
                likes={article.likes}
                dislikes={article.dislikes}
                user={user}
                onClick={() => {
                  navigate("/article?id=" + article.id);
                }}
              /> 
              
            </Grid>
          );
        });
      };
  return <div>
    <Box sx={{ml:30, mr:30}}>
      <Box sx={{ml:160}}>
          <CustomButton children="Admin" onClick={handleUser} />
       </Box>
      <Typography variant="h3" children="Articles" marginBottom="30px" />
      <Grid container rowSpacing={3}>
        {cards(articles)}
      </Grid>
    </Box>
  </div>;
}

export default ArticleList;
