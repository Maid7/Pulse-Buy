import { Box,Heading,Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NotFound = () => {

  return (
    <Box p="30px">
      <Heading>Page Not Found</Heading>
      <Text mt="15px">Go To The <Link to="/"> HomePage</Link></Text>
    </Box>
  )
}

export default NotFound
