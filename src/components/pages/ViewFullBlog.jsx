import React,{useEffect,useState} from 'react'
import ViewFullMyBlogs from '../common/ViewFullMyBlogs';
import { Box } from '@chakra-ui/react';
function ViewFullBlog({blog}) {

  return (
    <Box>
      <ViewFullMyBlogs blog={blog}/>
    </Box>
  )
}

export default ViewFullBlog