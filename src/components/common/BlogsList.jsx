import React, { useState, useEffect } from "react";
import Navigation from "../NavBar/Navigation";
import service from "../../services/AuthenticationServices";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import axios from "axios";
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
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/react'
import {EditIcon,DeleteIcon} from '@chakra-ui/icons'
import {InputGroup,InputRightElement,InputLeftElement} from "@chakra-ui/react"
import { Navigate, useNavigate } from "react-router-dom";
function BlogsList ({blog,OnBlogDetails,IsMyBlogs,UserName,IsShowFavorite,OnBlogDelete,ShowFavIcon}) {
    const navigate = useNavigate();
    var [favorite,setFavorite]=useState(false)
    const OnSingleBlogDetails=async(blog)=>{
        await OnBlogDetails(blog)
        if(IsMyBlogs){
            navigate("/myblogs/"+`${blog.id}`)
        }else{
            navigate("/blog/"+`${blog.id}`)
        }
    }
    const OnDeleteBlog=(item)=>{
      OnBlogDelete(item)
    }
    const OnEditBlog=(item)=>{
      OnBlogDetails(blog)
      navigate("/edit/"+`${blog.id}`)
    }
    const OnFavorite=async(item,state)=>{
      if(state){
        var blogDetails={}
        blogDetails.id=item.id
        blogDetails.Title=item.Title
        blogDetails.Description=item.Description
        blogDetails.Category=item.Category
        blogDetails.Content=item.Content
        blogDetails.ImageUrl=item.Image
        blogDetails.Author=item.Author
        blogDetails.date_created=item.date_created
        blogDetails.AddtoWishlist=!favorite ? true :false
    await axios.post("http://localhost:4000/addwishlist",blogDetails).then(data=>{if(data.data.status==="success"){setFavorite(true)}}).catch((err)=>{console.log(err)})
      }else{
        var blogDetails={}
        blogDetails.id=item.id
        blogDetails.AddtoWishlist=!favorite ? true :false
        await axios.post("http://localhost:4000/addwishlist",blogDetails).then(data=>{if(data.data.status==="success"){setFavorite(false)}}).catch((err)=>{console.log(err)})
      }
    }
  return (
    <Box>
        <Card 
              margin={30}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "300px" }}
                src={"http://localhost:4000/" + blog.Image}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{blog.Title}</Heading>
                  <HStack>
                  <FormControl>
                    <FormHelperText>- {blog.Author}</FormHelperText>
                    <FormHelperText>Created at : {new Date(blog.date_created).toDateString()}</FormHelperText>
                  </FormControl>
                  </HStack>
                  <Text py="2">{blog.Description}</Text>
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                      __html: blog.Content,
                    }}
                  />
                </CardBody>
                <Box className="blogs-viewmore">
                 
                  <InputGroup>
                  {!ShowFavIcon?
                    <InputLeftElement position="relative" width="auto">
                    <Button
                      variant="transprent"
                      colorScheme="blue"
                      onClick={()=>{OnSingleBlogDetails(blog)}}
                    >
                      View more ->
                    </Button>
                    </InputLeftElement>
                  : <Button
                  variant="transprent">
                </Button>}
                  {IsShowFavorite && !IsMyBlogs ?
                  <InputRightElement width="auto" marginRight="15px">
                    {favorite ?
                    <IconButton variant="transprent" icon={<FavoriteOutlinedIcon/>} onClick={()=>{OnFavorite(blog,false)}}></IconButton>
                    :
                    <IconButton variant="transprent" icon={<FavoriteBorderOutlinedIcon/>} onClick={()=>{OnFavorite(blog,true)}}></IconButton>}
                  
                  </InputRightElement>
                  :
                  null
                  }
                  {IsMyBlogs ? 
                  <InputRightElement width="auto" marginRight="15px">
                  {favorite  ?
                    <IconButton variant="transprent" icon={<FavoriteOutlinedIcon/>} onClick={()=>{OnFavorite(blog,false)}}></IconButton>
                    :
                    <IconButton variant="transprent" icon={<FavoriteBorderOutlinedIcon/>} onClick={()=>{OnFavorite(blog,true)}}></IconButton>}
                  <IconButton variant="transprent" icon={<EditIcon/>} onClick={()=>{OnEditBlog(blog)}}></IconButton>
                  <IconButton variant="transprent" icon={<DeleteOutlinedIcon/>} onClick={()=>{OnDeleteBlog(blog)}}></IconButton>
                  </InputRightElement>
                  :
                  null}
                  {ShowFavIcon ? 
                  <InputRightElement>
                  <IconButton variant="transprent" icon={<DeleteOutlinedIcon/>} marginRight={10} onClick={()=>{OnDeleteBlog(blog)}}></IconButton>
                  </InputRightElement>
                 : null}
                  </InputGroup>
                </Box>
              </Stack>
            </Card>
    </Box>
  )
}

export default BlogsList;