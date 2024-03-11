import React from 'react'
import ViewFullMyBlogs from '../common/ViewFullMyBlogs'
import {Box} from "@chakra-ui/react"
function MyFullBlogs({blog,IsMyBlogs}) {
  return (
    <Box>
        <ViewFullMyBlogs blog={blog} IsMyBlogs={IsMyBlogs}/>
    </Box>
  )
}

export default MyFullBlogs