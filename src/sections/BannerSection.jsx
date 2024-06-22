import { Flex, Button, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BannerImage from "../assets/mobile.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScrollAnimation } from "../components/useScrollAnimation";

const BannerSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <Flex
      ref={sectionRef}
      flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      height={{ base: "800px", sm: "800px", lg: "400px" }}
      bg="green.400"
      m="40px"
      borderRadius="20px"
      justifyContent="space-evenly"
       maxWidth="100%"
    >
      <Flex
        ml="20px"
        flexDirection="column"
        justifyContent="center"
        as={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <Text color="white">30% OFF</Text>
        <Heading fontSize="50px" color="white">
          MOBILES
        </Heading>
        <Text color="white">10 Jan to 28 Jan</Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        as={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
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
        ml="20px"
        flexDirection="column"
        justifyContent="center"
        as={motion.div}
        initial={{ opacity: 0, x: 100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Text color="white">iPhone 14 Pro</Text>
        <Heading fontSize="50px" color="white">
          WINTER SALE
        </Heading>
        <Text color="white">15.54 cm (6.1-inch)</Text>
        <Link to="products/mobile">
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

export default BannerSection;
