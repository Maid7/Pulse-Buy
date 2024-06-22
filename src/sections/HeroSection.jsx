import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Create animated components
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const HeroSection = () => {
  return (
    <MotionFlex
      backgroundImage={
        "https://cdn.prod.website-files.com/605826c62e8de87de744596e/63f5e30a4d577354fdfce512_Duotone-Master-ssssFile-copy.jpg"
      }
      maxWidth="100%"
      position="relative"
      h="80vh"
      backgroundSize="cover"
      backgroundPosition="center"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ base: "column", sm: "column", lg: "row", xl: "row" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MotionFlex
        p="100px"
        flexDirection="column"
        position="absolute"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <MotionHeading
          color="green.400"
          fontSize={{ base: "2em", sm: "2em", md: "4em", lg: "5em" }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Explore Our Newest & More Trendsetting Collection.
        </MotionHeading>
        <MotionText
          color="white"
          mt="20px"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          We take pride in introducing our finest premium-quality materials.
        </MotionText>

        <Link to="products/tv">
          <MotionButton
            mt="20px"
            colorScheme="green"
            maxWidth="220px"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            whileHover={{ scale: 1.1 }}
          >
            Explore Now {"->"}
          </MotionButton>
        </Link>
      </MotionFlex>
    </MotionFlex>
  );
};

export default HeroSection;
