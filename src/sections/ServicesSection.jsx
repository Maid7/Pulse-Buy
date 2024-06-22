import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { FaCarSide } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
const ServicesSection = () => {
  return (
    <Flex
      p="20px"
      h="400px"
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
    
        height="80px"
        w="300px"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        p={6}
      >
        <Box
          flex="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FaCarSide
            size="10px"
            style={{ width: "100%", height: "100%", color: "green" }}
          />
        </Box>
        <Box flex="5" p={4} textAlign="center">
          <Heading color="black" size="md">
            Free Shipping
          </Heading>
          <Text color="gray">Free Shipping On All Orders</Text>
        </Box>
      </Flex>
      <Flex
       
        w="300px"
        height="80px"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        p={4}
      >
        <Box
          flex="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <RiCheckboxCircleFill
            size="10px"
            style={{ width: "100%", height: "100%", color: "green" }}
          />
        </Box>
        <Box flex="5" p={4} textAlign="center">
          <Heading color="black" size="md">
            Safe Money
          </Heading>
          <Text color="gray">30 Days Money Back</Text>
        </Box>
      </Flex>
      <Flex
       
        height="80px"
        w="300px"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        p={4}
      >
        <Box
          flex="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <BsFillCreditCardFill
            size="10px"
            style={{ width: "100%", height: "100%", color: "green" }}
          />
        </Box>
        <Box flex="5" p={4} textAlign="center">
          <Heading color="black" size="md">
            Secure Payment
          </Heading>
          <Text color="gray">All Payment Secure</Text>
        </Box>
      </Flex>
      <Flex
       
        height="80px"
        w="300px"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        p={4}
      >
        <Box
          flex="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FaHeadphones
            size="10px"
            style={{ width: "100%", height: "100%", color: "green" }}
          />
        </Box>
        <Box flex="5" p={4} textAlign="center">
          <Heading color="black" size="md">
            Online Support 24/7
          </Heading>
          <Text color="gray">Technical Support 24/7</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ServicesSection;
