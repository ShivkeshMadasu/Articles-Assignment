import React from 'react';
import { Button } from '@mui/material';

interface ButtonProps{
    className?:string,
    children:string,
    onClick?:() => void,
    sx?:any
}

const CustomButton: React.FC<ButtonProps> = (props)=>{

  return <div>
      <Button variant="contained" className={props.className} children={props.children} onClick={props.onClick} sx={props.sx} />
  </div>;
}

export default CustomButton;
