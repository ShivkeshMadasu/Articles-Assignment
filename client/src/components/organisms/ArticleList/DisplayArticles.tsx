import React, { useState } from 'react';
import {useQuery, gql} from '@apollo/client';
import { Box, Grid, Typography } from '@mui/material';
import CustomButton from '../../atoms/Button/Button';
import Card from "../../molecules/Article/GetArticle";
import { useNavigate } from "react-router-dom";

interface Article{
    id: number;
    title: string;
    author: string;
    image: string;
    likes: number;
    dislikes: number;
}

const Query_Articles = gql`
    query GetArticles{
        articles{
            id
            title
            author
            image
            likes
            dislikes
        }
    }
`

function DisplayArticles() {

    const navigate = useNavigate();
    const {data} = useQuery(Query_Articles);
    if(data)
    {
        console.log(data);
    }
    const [user, setUser] = useState("user");
    const handleUser = () => {
      user !== "admin" ? setUser("admin") : setUser("user") 
    }

    const cards = (articlesList: Article[]) => {
        return articlesList.map((article: Article,index) => {
          return (
            <Grid item md={12} lg={12} key={index} >
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

  return (
    <div>
        <Box sx={{ml:30, mr:30}}>
            Account type: {user}
            <Box sx={{ml:160}}>
                {user !== "admin" ? (<CustomButton children="admin" onClick={handleUser} />) :
                (<CustomButton children="user" onClick={handleUser} />)}
                
            </Box>
            <Typography variant="h3" children="Articles" marginBottom="30px" />
            <Grid container rowSpacing={3}>
                {data && cards(data.articles)}
            </Grid>
        </Box>
    </div>
  )
}

export default DisplayArticles