import React from "react";
import "../NavBar/Navigation.css";
import { Link, useLocation } from "react-router-dom";
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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from "react-router-dom";
function Navigation(props) {
  const navigate = useNavigate();
  const Logout=async(state)=>{
    await props.OnLogout(state)
    navigate("/")
  }
  return (
    <Box className="navbar">
      <FormControl padding="10px">
        <FormLabel className="heading">CREATIVE BLOGS</FormLabel>
        <FormHelperText className="description">
          More Creative and Impressive.
        </FormHelperText>
      </FormControl>
      {props.UserName === "" ? (
        <Box className="links">
          <Link to="/register">REGISTER</Link>
          <Link to="/login">LOGIN</Link>
        </Box>
      ) : (
        <Box className="links">
          <Link to="/"> HOME </Link>
          <Link to="/newblog">NEW BLOG</Link>
          <Link to="/myblogs">MY BLOGS </Link>
          <Menu>
            <Link>
              <MenuButton>
                ABOUT
              </MenuButton>
            </Link>
            <MenuList className="profile-list">
              <Button className="profile-names" variant="outline" onClick={()=>{navigate("/myprofile")}}>MY PROFILE</Button>
              <Button className="profile-names" variant="outline" onClick={()=>{navigate("/mywishlist")}}>MY WISHLIST</Button>
              <Button className="profile-names" variant="outline" onClick={()=>{Logout(true)}}>LOG OUT</Button>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Box>
  );
}

export default Navigation;
