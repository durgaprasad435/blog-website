import React,{useState} from 'react'
import "../pages/pages.css"
import Welcome from "../../assets/welcome.png"
import common from '../../common'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button,Input, Box, Divider, Flex ,HStack} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
function Register() {
  const [userName, setUserName] = useState('')
  const [email,setEMail]=useState("")
  const [password,setPassword]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
  const [isError,setIsError]=useState(false)
  const [details,SetDetails]=useState({})
  const handleUserName = (e) =>{
    setUserName(e.target.value)
    if(userName===""){
      setErrorMessage("UserName is required")
      setIsError(true)
    }
  }
  const handleEMail=(e)=>{
    setEMail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }

  return (
    <Box className='card-container'>
      <Card className='register-card'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Stack>
    <CardBody>
      <FormControl variant="floating" isInvalid={isError}>
      <FormLabel>User Name</FormLabel>
      <Input type='email' onChange={handleUserName} />
      {!isError ? (
        <FormHelperText/>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
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
    </FormControl>
    <HStack mt="3">
    <input onClick={common.OnShowPassword} type='checkbox'></input>
      <Text>Show Password</Text>
      </HStack>
    </CardBody>
    <CardFooter>
      <Flex direction="column">
      <Button className='register-btn' variant='outline'width="30%" colorScheme='red'>
        Register
      </Button>
      <Text marginTop="5px">If you already registred.Please click on <span><a className='login-link' href='/login'>login</a></span></Text>
      </Flex>
      </CardFooter>
  </Stack>
  <Box className='right-panel'>
<Heading className='card-title' size='md'>Register</Heading>
  <Image
    objectFit='cover'
    borderRadius='full'
    maxW={{ base: '100%', sm: '200px' }}
    src={Welcome}
    alt='img'
  />
</Box>
</Card>
    </Box>
  )
}

export default Register