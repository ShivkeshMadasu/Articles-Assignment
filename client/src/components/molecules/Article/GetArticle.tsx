import React, { useEffect, useState } from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';



interface ArticleProps{
    id:number;
    title: string;
    author: string;
    image: string;
    likes: number;
    dislikes: number;
    user:string;
    onClick?: ()=>void
}

function GetArticle(props: ArticleProps) {

    const [like,setLike] = useState(props.likes)
    const [dislike, setDislike] = useState(props.dislikes)
    const [once,setOnce] = useState(true)

    const handleLike = () =>{
        if(once === true)
        {
            setLike(like+1)
            setOnce(false);
        }
    }

    const handleDislike = () =>{ 
        if(once === true)
        {
            setDislike(dislike+1)
            setOnce(false);
        }
    }

    useEffect( ()=>{ async function update(){
        const res = await fetch("http://localhost:8080/articles/" + props.id);
        const data = await res.json();
        data["likes"] = like;
        data["dislikes"] = dislike;
        await fetch("http://localhost:8080/articles/" + props.id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        });} 
        update();
    },[like,dislike,props.id])

    return <div>
        <Box boxShadow={3} width="900px">
        <Card onClick={props.onClick}  sx={{height:"auto", boxShadow:"none" }} >
            <CardActionArea>
                <CardMedia component="img" image={props.image} alt="image"  sx={{height:"290px", width:"900px"}} />
                <CardContent>
                    <Typography variant="h6" children={props.title} />
                    <Typography variant="body2" children={props.author} />
                </CardContent>
            </CardActionArea>
        </Card>
        {props.user === "user" && (
            <Box>
                <IconButton onClick={handleLike}>
                    <ThumbUpAltIcon />{like}
                </IconButton>
                <IconButton onClick={handleDislike}>
                    <ThumbDownAltIcon />{dislike}
                </IconButton>
            </Box>)}
        </Box>
    </div>;
}

export default GetArticle;