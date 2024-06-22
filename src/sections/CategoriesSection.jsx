import { Grid, GridItem, Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TV from "../assets/tv.jpg";
import Audio from "../assets/audio.jpg";
import Laptop from "../assets/laptop.jpg";
import Mobile from "../assets/mobile.jpg";
import Gaming from "../assets/gaming.jpg";
import Appliances from "../assets/appliances.jpg";

const CategoriesSection = () => {
  const categoryData = [
    { title: "Enjoy With Audio", image: Audio, link: "products/audio" },
    { title: "Enjoy With Mobile", image: Mobile, link: "products/mobile" },
    { title: "Enjoy With TV", image: TV, link: "products/tv" },
    { title: "Enjoy With Laptop", image: Laptop, link: "products/laptop" },
    { title: "Enjoy With Gaming", image: Gaming, link: "products/gaming" },
    {
      title: "Enjoy With Appliances",
      image: Appliances,
      link: "products/appliances",
    },
  ];

  // Create animated components
  const MotionButton = motion(Button);

  const renderCategory = (category, index) => (
    <GridItem
      key={index}
      colSpan={{ base: 1, md: index === 2 || index === 3 ? 6 : 3 }}
    >
      <Box
        height="300px"
        backgroundImage={category.image}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        color="white"
        borderRadius="25px"
      >
        <Flex
          position="absolute"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          p={{ base: "10px", md: "20px" }}
          overflow="hidden"
          borderRadius="25px"
        >
          <Flex
            flexDirection="column"
            flex="1"
            p={{ base: "10px", md: "20px" }}
          >
            <Heading mt="60px">{category.title}</Heading>
            <Link to={category.link}>
              <MotionButton
                w="200px"
                colorScheme="green"
                variant="solid"
                mt="30px"
                whileHover={{ scale: 1.1 }}
              >
                Browse
              </MotionButton>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </GridItem>
  );

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(12, 1fr)" }}
      gap={4}
      p={4}
      mt={{ base: "10rem", sm: "10rem" }}
    >
      {categoryData.map(renderCategory)}
    </Grid>
  );
};

export default CategoriesSection;
