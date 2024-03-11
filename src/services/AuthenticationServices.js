import proxy from "./proxy";
var host="http://localhost:4000"


function loginService(reqbody){
    return proxy.post(host,"/login",reqbody)
}
function registerService(reqbody){
    return proxy.post(host,"/register",reqbody)
}
function newBlogService(reqbody){
    return proxy.post(host,"/newblog",reqbody)
}
function AllBlogs(){
    return proxy.get(host,"/allblogs")
}
function MyBlogs(reqbody){
    return proxy.post(host,"/myblogs",reqbody)
}
function MyWishList(){
    return proxy.get(host,"/mywishlist")
}
function DeleteBlog(reqbody){
    return proxy.post(host,"/deleteblog",reqbody)
}
function DeleteFromWishList(reqbody){
    return proxy.post(host,"/deletewishlist",reqbody)
}
function GetCategory(reqbody){
    return proxy.post(host,"/blogs",reqbody)
}


export default{
    loginService,
    registerService,
    newBlogService,
    AllBlogs,
    MyBlogs,
    DeleteBlog,
    MyWishList,
    DeleteFromWishList,
    GetCategory
}