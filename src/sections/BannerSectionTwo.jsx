import { Flex, Button, Heading, Text, Image } from "@chakra-ui/react";
import BannerImage from "../assets/laptop.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "../components/useScrollAnimation";
const BannerSectionTwo = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <Flex
      ref={sectionRef}
      flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      height={{ base: "800px", sm: "800px", lg: "400px" }}
      bg="green.400"
      m="40px"
      mt="130px"
      borderRadius="20px"
      justifyContent="space-evenly"
      maxWidth="100%"
    >
      <Flex
        as={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        ml="20px"
        flexDirection="column"
        justifyContent="center"
      >
        <Text color="white">30% OFF</Text>
        <Heading fontSize="50px" color="white">
          LAPTOPS
        </Heading>
        <Text color="white">10 Jan to 28 Jan</Text>
      </Flex>
      <Flex
        as={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          h="300px"
          w="300px"
          borderRadius="50%"
          transform="scale(1)"
          src={BannerImage}
          transition="transform 0.3s ease-in-out"
        
        />
      </Flex>
      <Flex
        as={motion.div}
        initial={{ opacity: 0, x: 100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        ml="20px"
        flexDirection="column"
        justifyContent="center"
      >
        <Text color="white">HP Laptop 15s</Text>
        <Heading fontSize="50px" color="white">
          WINTER SALE
        </Heading>
        <Text color="white">39.6 cm (15.6")</Text>
        <Link to="products/laptop">
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            width="150px"
            borderRadius="20px"
            mt="7px"
          >
            Shop Now
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default BannerSectionTwo;
