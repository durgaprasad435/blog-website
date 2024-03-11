import React, { useState,useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import service from "../../services/AuthenticationServices"
import "./pages.css"
import axios from "axios"
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button,Input, Box, Divider, Flex, HStack } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import {InputGroup,InputRightElement,InputLeftElement} from "@chakra-ui/react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function NewBlog(props) {
  var [title,setTitle]=useState("");
  var [description,setDescription]=useState("");
  var [category,setCategory]=useState("")
  var [uploadImage,setUploadImage]=useState(null)
  var [content,setContent]=useState("")
  const navigate = useNavigate();
  const OnUpload=async()=>{
    var blogDetails=new FormData();
    blogDetails.append("Title",title);
    blogDetails.append("Description",description);
    blogDetails.append("Category",category);
    blogDetails.append("File",uploadImage[0]);
    blogDetails.append("AuthorName",props.Username)
    blogDetails.append("Content",content);

    await axios.post("http://localhost:4000/newblog",blogDetails).then(data=>{if(data.data.status==="success"){navigate("/")}}).catch((err)=>{console.log(err)})    
  }
  return (
    <Box>
      <Card className="newblog-card-container"> 
        <Heading className='card-tile'>New Blog</Heading>
        <FormControl width="70%" overflowY="auto">
          <FormLabel>Title</FormLabel>
          <Input onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
          <FormLabel>Description</FormLabel>
          <Input onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
          <FormLabel>Category</FormLabel>
          <Input onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
          <FormLabel>Upload Image</FormLabel>
          <InputGroup>
          <InputLeftElement width="20%">
          <input type='file' onChange={(e)=>setUploadImage(e.target.files)} name='file'/></InputLeftElement>
          <Input/>
          </InputGroup>
          <FormLabel>Content</FormLabel>
          <ReactQuill theme="snow" onChange={setContent} value={content}/>
        </FormControl>
        <Box className='upload-btns'>
          <Button className='btns1' onClick={()=>navigate("/")}>Cancel</Button>
          <Button className='btns2' onClick={OnUpload}>Upload</Button>
        </Box>
        
      </Card>
    </Box>
  )
}

export default NewBlog