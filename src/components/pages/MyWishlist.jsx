import { Box,Text} from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import BlogsList from '../common/BlogsList'
import Navigation from "../NavBar/Navigation";
import service from "../../services/AuthenticationServices"
function MyWishlist(props) {
  var [myWishlist, setMyWishList] = useState([]);
  var [name, setName] = useState(props.Username);
  var [showFavIcon,setShowFavIcon]=useState(true)
  const userName = {
    name: props.Username,
  };
  const OnBlogDelete = (item) => {
    var payload = {};
    payload.id = item.id;
    service.DeleteFromWishList(payload).then((data) => {
      if (data.status == "success") {
        setMyWishList(data.data);
      }
    });
  };
  const OnBlogDetails = async (item) => {
    await props.FullMyBlog(item);
  };
  const OnLogout=async(item)=>{
    await props.MakeLogout(item)
  }
  useEffect(() => {
    service.MyWishList().then((data) => {
      if (data.status == "success") {
        setMyWishList(data.data);
        //console.log(data.data)
      }
    });
  }, []);
  return (
    <Box>
      <Box>
        <Navigation UserName={props.Username} OnLogout={OnLogout} />
      </Box>
      {myWishlist.length === 0 ? (
        <Box className="main">
          <Box className="no-blogs">
            <Text>No blogs in your wishlist.</Text>
          </Box>
        </Box>
      ) : (
        <Box className="main">
          {myWishlist.map((item, index) => {
            return (
              <BlogsList
                blog={item}
                UserName={props.Username}
                ShowFavIcon={showFavIcon}
                OnBlogDelete={OnBlogDelete}
                OnBlogDetails={OnBlogDetails}
              />
            );
          })}
        </Box>
      )}
    </Box>
  )
}

export default MyWishlist