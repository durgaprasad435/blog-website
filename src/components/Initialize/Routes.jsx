import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from '../NavBar/Navigation';
import Register from "../pages/Register"
import Login from '../pages/Login';
import Blogs from '../pages/Blogs';
import NewBlog from "../pages/NewBlog"
import ViewFullBlog from '../pages/ViewFullBlog';
import MyBlogs from '../pages/MyBlogs';
import MyFullBlogs from '../pages/MyFullBlogs';
import UpdateBlog from '../pages/UpdateBlog';
import MyWishlist from '../pages/MyWishlist';
function AllRoutes() {
  var [username,setUserName]=useState("")
  var [blog,setBlog]=useState(null)
  var [myblog,setMyBlog]=useState(null)
  var [isMyBlogs,setMyBlogs]=useState(true)
  var [isShowFavorite,setIsShowFavorite]=useState(false)
  const User=(item)=>{
    setUserName(item)
  }
  const BlogDetails=(item)=>{
    setBlog(item)
  }
  const FullMyBlog=(item)=>{
    setMyBlog(item)
  }
  const IsShowFavorite=(item)=>{
    setIsShowFavorite(true)
  }
  const MakeLogout=(item)=>{
    setUserName("")
    setIsShowFavorite(false)
  }
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Blogs Username={username} MakeLogout={MakeLogout} BlogDetails={BlogDetails} IsFavorite={isShowFavorite}/>}/>
                <Route path="/newblog" element={<NewBlog Username={username}/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login User={User} IsShowFavorite={IsShowFavorite}/>}/>
                <Route path="/blog/:id" element={<ViewFullBlog blog={blog}/>}/>
                <Route path='/myblogs/:id' element={<MyFullBlogs blog={myblog} IsMyBlogs={isMyBlogs}/>}/>
                <Route path='/myblogs' element={<MyBlogs Username={username} MakeLogout={MakeLogout} FullMyBlog={FullMyBlog} IsMyBlogs={isMyBlogs}/>}/>
                <Route path="/edit/:id" element={<UpdateBlog blog={myblog}/>}/>
                <Route path="/mywishlist" element={<MyWishlist Username={username}MakeLogout={MakeLogout} IsMyBlogs={isMyBlogs} FullMyBlog={FullMyBlog}/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default AllRoutes;