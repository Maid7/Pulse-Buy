import React from "react";
import { Box, Flex, Grid, Text, Stack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="green.400" color="white" py="6" mt="50px" maxWidth="100%">
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 4, md: 8 }}
        px={{ base: 4, md: "6%", lg: "10%" }}
        maxW="1200px"
        mx="auto"
      >
        <Stack spacing={{ base: 4, md: 8 }}>
          <Text fontSize="xl" fontWeight="bold">
            Pulse Buy
          </Text>
          <Text>Sije,Tesanj</Text>

          <Text>Phone: +387 64 4404 964</Text>
          <Text>Email: maidsejdinovic3@gmail.com</Text>
        </Stack>

        <Stack spacing={{ base: 4, md: 8 }}>
          <Text fontSize="xl" fontWeight="bold">
            Links
          </Text>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="help">Help</Link>
          <Link to="favorites">Favorites</Link>
        </Stack>

        <Stack spacing={{ base: 4, md: 8 }}>
          <Text fontSize="xl" fontWeight="bold">
            Social Media
          </Text>
          <Flex>
            <Link href="#" mr="4">
              Facebook
            </Link>
            <Link href="#">Twitter</Link>
          </Flex>
          <Flex>
            <Link href="#" mr="4">
              Instagram
            </Link>
            <Link href="#">LinkedIn</Link>
          </Flex>
        </Stack>
      </Grid>

      <Divider mt="6" borderColor="white" />

      <Box mt="4" textAlign="center">
        <Text>
          &copy; {new Date().getFullYear()} Pulse Buy. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
