import React, { useState, useEffect } from "react";
import Navigation from "../NavBar/Navigation";
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
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import BlogsList from "../common/BlogsList";
import FantayCat from "../Categories/FantayCat";
import PopularCat from "../Categories/PopularCat"
import TechCat from "../Categories/TechCat"
function Blogs(props) {
  var [allBlogs, setAllBlogs] = useState([]);
  var [categoryBlogs, setCategoryBlogs] = useState([]);
  const navigate = useNavigate();
  const Array = ["Fantacy", "Popular", "Technology"];
  // const OnCategorySelect = async (cat) => {
  //   console.log(cat);
  //   var lowerCat = cat.toLowerCase();
  //   var catt = {
  //     Category: lowerCat,
  //   };
  //   await service.GetCategory(catt).then((data) => {
  //     setCategoryBlogs(data.data);
  //   });
  // };
  useEffect(() => {
    service.AllBlogs().then((data) => {
      if (data.status == "success") {
        setAllBlogs(data.data);
        //console.log(data.data)
      }
    });
  }, []);
  const OnLogout = async (item) => {
    await props.MakeLogout(item);
  };
  const OnBlogDetails = async (item) => {
    //console.log(item)
    await props.BlogDetails(item);
    //navigate("/blog/"+`${item.id}`)
  };
  return (
    <Box>
      <Box>
        <Navigation UserName={props.Username} OnLogout={OnLogout} />
      </Box>
      <Box className="main">
        {allBlogs.map((item, ind) => {
          return (
            <BlogsList
              blog={item}
              OnBlogDetails={OnBlogDetails}
              UserName={props.Username}
              IsShowFavorite={props.IsFavorite}
            />
          );
        })}
      </Box>
      <Box backgroundColor="beige">
        <Tabs variant="unstyled" isFitted>
          <TabList>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Fantacy</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Popular</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Technology</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FantayCat OnBlogDetails={OnBlogDetails} IsShowFavorite={props.IsFavorite}></FantayCat>
            </TabPanel>
            <TabPanel>
              <PopularCat OnBlogDetails={OnBlogDetails} IsShowFavorite={props.IsFavorite}></PopularCat>
            </TabPanel>
            <TabPanel>
              <TechCat OnBlogDetails={OnBlogDetails} IsShowFavorite={props.IsFavorite}></TechCat>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Blogs;
