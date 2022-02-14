import React, { useState } from 'react'
import {useQuery, gql, useMutation} from '@apollo/client';
import { useLocation } from "react-router-dom";
import { Box, Modal, TextField, Typography } from '@mui/material';
import CustomButton from '../../atoms/Button/Button';

const Query_GetArticle = gql`
    query GetArticle($articleId: ID!){
        article(id: $articleId) {
            title
            author
            publishedAt
            content
        }
    }
`

const Mutation_UpdateArticle = gql`
    mutation UpdateArticle($updateArticleId: ID!, $newContent: String){
        updateArticle(id: $updateArticleId, newContent: $newContent) {
            id
            title
            content
        }
    }
`

function GetArticleDetail() {

    const [user, setUser] = useState("user");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const query = new URLSearchParams(useLocation().search);
    const getId = query.get("id");

    const {data,refetch} = useQuery(Query_GetArticle,{variables:{articleId: getId }});
    const [save] = useMutation(Mutation_UpdateArticle)

    if(data)
    {
        console.log(data.article);
    }

    const handleSave = () =>{ save({variables:{updateArticleId : getId, newContent : value}});
        setOpen(false);
        refetch()
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        
      };

    const handleEdit = () => { setOpen(true); setValue(data.article.content) }

    const handleUser = () => {
        user !== "admin" ? setUser("admin") : setUser("user") 
    }

    
  return (
    <div>
        { data && (
        <Box sx={{ml:30, mr:30}}>
            Account type: {user}
            <Box sx={{ml:160}}>
                {user !== "admin" ? (<CustomButton children="admin" onClick={handleUser} />) :
                (<CustomButton children="user" onClick={handleUser} />)}
                
            </Box>
            <Box>
                <Typography variant="h5" children={data.article.title} />
            </Box>
            <Box sx={{marginTop:"20px", display:"flex"}}  >
                <Typography variant="body1" children={data.article.author} />
                <Typography variant="body1" children={data.article.publishedAt} sx={{ml:4}} />
            </Box>
            <Box>
                <p>
                    {data.article.content}
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
        )}
    </div>
  )

    
}

export default GetArticleDetail