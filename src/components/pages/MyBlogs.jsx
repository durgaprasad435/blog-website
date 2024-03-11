import React, { useState, useEffect } from "react";
import BlogsList from "../common/BlogsList";
import Navigation from "../NavBar/Navigation";
import service from "../../services/AuthenticationServices";
import { Box, Card, Heading, Text } from "@chakra-ui/react";
function MyBlogs(props) {
  var [myBlogs, setMyBlogs] = useState([]);
  var [name, setName] = useState(props.Username);
  const userName = {
    name: props.Username,
  };
  useEffect(() => {
    service.MyBlogs(userName).then((data) => {
      if (data.status == "success") {
        setMyBlogs(data.data);
        //console.log(data.data)
      }
    });
  }, []);
  const OnLogout=async(item)=>{
    await props.MakeLogout(item)
  }
  const OnBlogDelete = (item) => {
    var payload = {};
    payload.id = item.id;
    service.DeleteBlog(payload).then((data) => {
      if (data.status == "success") {
        setMyBlogs(data.data);
      }
    });
  };
  const OnBlogDetails = async (item) => {
    await props.FullMyBlog(item);
  };
  return (
    <Box>
      <Box>
        <Navigation UserName={props.Username} OnLogout={OnLogout} />
      </Box>
      {myBlogs.length === 0 ? (
        <Box className="main">
          <Box className="no-blogs">
            <Text>No Blogs to show.</Text>
          </Box>
        </Box>
      ) : (
        <Box className="main">
          {myBlogs.map((item, index) => {
            return (
              <BlogsList
                blog={item}
                OnBlogDetails={OnBlogDetails}
                IsMyBlogs={props.IsMyBlogs}
                OnBlogDelete={OnBlogDelete}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
}

export default MyBlogs;
