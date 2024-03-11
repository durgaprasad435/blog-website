import React,{useEffect,useState} from 'react'
import service from "../../services/AuthenticationServices";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  Box,
  Divider,
  Flex,
  HStack,
} from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/react'
import { Navigate, useNavigate } from "react-router-dom";
function ViewFullMyBlogs({blog,IsMyBlogs}) {
    const navigate = useNavigate();
    const NavigateFunction=()=>{
      if(IsMyBlogs){
        navigate("/myblogs")
      }else{
        navigate("/")
      }
    }
  return (
    
    <Box>
      <Card>
      <Heading className='card-title' size='xl'>{blog.Title}</Heading>
      
      <Box className='blog-image'>
      <Image src={"http://localhost:4000/" + blog.Image} objectFit="cover"
                maxW={{ base: "100%", sm: "500px" }}/>
      </Box>
      <Box className='blog-details'>
      <HStack>
                  <FormControl marginBottom={3}>
                    <FormLabel>Author : {blog.Author}</FormLabel>
                    <FormHelperText>Created At : {new Date(blog.date_created).toDateString()}</FormHelperText>
                  </FormControl>
                  </HStack>
      <FormLabel>Description :</FormLabel>
      <Text>{blog.Description}</Text>
      <FormLabel>Content :</FormLabel>
      <div
          dangerouslySetInnerHTML={{
              __html: blog.Content,
           }}
      />
      </Box>
      <Box className='upload-btns'>
      <IconButton variant='outline'
  colorScheme='teal'onClick={NavigateFunction} icon={<ArrowBackIcon />}/>
      </Box>
      </Card>
    </Box>
  )
}

export default ViewFullMyBlogs