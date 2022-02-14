import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Box, Modal, TextField, Typography } from '@mui/material';
import CustomButton from '../../atoms/Button/Button';

interface Article {
    id: number;
    title: string;
    author: string;
    image: string;
    content:string;
    publishedAt:string;
  }
    
function ArticleDetail() {
    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id");
    const [article, setArticle] = useState<Article>(Object);
    const [user, setUser] = useState("user");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const handleSave = async() => {
        const res = await fetch("http://localhost:8000/articles/" + id);
        const data = await res.json();
        data["content"] = value;
        await fetch("http://localhost:8000/articles/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        });
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        
      };

    const handleEdit = () => { setOpen(true); setValue(article.content) }

    const handleUser = () => {
        setUser("admin");
    }

    useEffect(() => {
    async function articleDetail() {
        await axios.get("http://localhost:8000/articles/" + id).then((res) => {
        setArticle(res.data);
        });
    }
    articleDetail();
    }, [id,open]);
    return <div>
        <Box sx={{ml:30, mr:30}}>
            <Box sx={{ml:160}}>
                <CustomButton children="Admin" onClick={handleUser} />
            </Box>
            <Box>
                <Typography variant="h5" children={article.title} />
            </Box>
            <Box sx={{marginTop:"20px", display:"flex"}}  >
                <Typography variant="body1" children={article.author} />
                <Typography variant="body1" children={article.publishedAt} sx={{ml:4}} />
            </Box>
            <Box>
                <p>
                    {article.content}
                </p>
                {user === "admin" && (<CustomButton children="Edit" onClick={handleEdit} />)}
                <Modal
                    open={open}
                    //onClose={handleSave}
                    sx={{marginTop:"300px", overflow:"scroll"}}
                >
                    <Box bgcolor="#fff" >
                        <Box>
                            <TextField value={value} multiline sx={{width:"98%", marginTop:"10px", marginBottom:"10px", ml:2}} onChange={handleChange} />
                        </Box>
                        <Box>
                            <CustomButton children="Save" onClick={handleSave} sx={{marginBottom:"10px", ml:2}} />
                        </Box>
                    </Box>
    
                </Modal>
            </Box>
        </Box>
    </div>;
  }
  
export default ArticleDetail;
  