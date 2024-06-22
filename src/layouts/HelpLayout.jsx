import { Box, Heading,Text,Flex } from "@chakra-ui/react"
import { Outlet,NavLink  } from "react-router-dom"



const HelpLayout = () => {

  const getActiveLinkStyles = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'green' : 'black',
  });

  return (
    <Box m="20px 30px">
    <Heading>Website Help</Heading>
    <Text mt="10px">We're here to assist you! Whether you're looking for answers to common questions or need help with a specific issue, you'll find the resources you need right here.</Text>
      
     <Flex justifyContent="center" alignItems="center" gap="30px" mt="20px">
      <NavLink to="faq" style={getActiveLinkStyles}>View the FAQ</NavLink>
      <NavLink to="contact" style={getActiveLinkStyles}>Contact Us</NavLink>
      </Flex> 
     
     <Outlet/> 
    </Box>
  )
}

export default HelpLayout
