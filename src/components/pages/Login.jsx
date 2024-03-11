import React,{useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import "./pages.css"
import WelcomeBack from "../../assets/welcome_back.jpg"
import commom from "../../common"
import services from '../../services/AuthenticationServices'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button,Input, Box, Divider, Flex, HStack } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import Blogs from './Blogs';
import { IconButton } from '@chakra-ui/react'
import {ViewOffIcon,ViewIcon} from '@chakra-ui/icons'
import {InputGroup,InputRightElement,InputLeftElement} from "@chakra-ui/react"
function Login(props) {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
  const [isError,setIsError]=useState(false)
  const [details,SetDetails]=useState({})
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const handleUserName = (e) =>{
    setUserName(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleClick = () => setShow(!show)
  const OnLogin=()=>{
    var loginDetails={
      UserName:userName,
      Password:password
    }
    console.log(loginDetails)
    services.loginService(loginDetails).then(data=>{
      if(data.status=="success"){
          //navigate("/"+`${data.UserName}`)
          navigate("/")
          props.User(data.UserName)
          props.IsShowFavorite(true)
      }else{
        console.log(data)
      }
    })
  }
  return (
    <Box className='card-container'>
      <Card className='register-card'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
<Box className='left-panel'>
<Heading className='card-title' size='md'>Login</Heading>
  <Image
    objectFit='cover'
    borderRadius='full'
    maxW={{ base: '100%', sm: '200px' }}
    src={WelcomeBack}
    alt='img'
  />
</Box>
  <Stack>
    <CardBody>
      <FormControl variant="floating" isInvalid={isError}>
      <FormLabel>UserName</FormLabel>
      <Input type='text' onChange={handleUserName} />
      {!isError ? (
        <FormHelperText/>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
      <FormLabel>Password</FormLabel>
      {/* <Input type='password' id='Password' onChange={handlePassword} />
      {!isError ? (
        <FormHelperText/>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
      <HStack mt="3">
      <input onClick={commom.OnShowPassword} type='checkbox'></input>
      <Text>Show Password</Text>
      </HStack> */}
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'} onChange={handlePassword}
      />
      <InputRightElement width='2.5rem'>
        <IconButton h='1.75rem' size='sm' backgroundColor="transparent" onClick={handleClick}>
        {show ? <ViewIcon/> :<ViewOffIcon/>}
        </IconButton>
      </InputRightElement>
    </InputGroup>
    </FormControl>
    </CardBody>
    <CardFooter>
      <Flex direction="column">
      <Button className='register-btn' variant='outline'width="30%" colorScheme='blue' onClick={OnLogin}>
        Login
      </Button>
      <Text marginTop="5px">If you not yet registred ? Please, click on <span><a className='login-link' href='/register'>register</a></span> and then login.</Text>
      </Flex>
      </CardFooter>
  </Stack>
</Card>
    </Box>
  )
}

export default Login