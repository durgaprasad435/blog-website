import React,{useState} from 'react'
import "../pages/pages.css"
import WelcomeBack from "../../assets/welcome_back.jpg"
import commom from "../../common"
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button,Input, Box, Divider, Flex, HStack } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
function Login() {
  const [email,setEMail]=useState("")
  const [password,setPassword]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
  const [isError,setIsError]=useState(false)
  const [details,SetDetails]=useState({})
  // const handleUserName = (e) =>{
  //   setUserName(e.target.value)
  //   if(userName===""){
  //     setErrorMessage("UserName is required")
  //     setIsError(true)
  //   }
  // }
  const handleEMail=(e)=>{
    setEMail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  // function OnShowPassword() {
  //   var x = document.getElementById("Password");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }
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
      <FormLabel>Email</FormLabel>
      <Input type='email' onChange={handleEMail} />
      {!isError ? (
        <FormHelperText/>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
      <FormLabel>Password</FormLabel>
      <Input type='password' id='Password' onChange={handlePassword} />
      {!isError ? (
        <FormHelperText/>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
      <HStack mt="3">
      <input onClick={commom.OnShowPassword} type='checkbox'></input>
      <Text>Show Password</Text>
      </HStack>
    </FormControl>
    </CardBody>
    <CardFooter>
      <Flex direction="column">
      <Button className='register-btn' variant='outline'width="30%" colorScheme='blue'>
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