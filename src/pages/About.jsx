import {
  Flex,
  Box,
  Text,
  Heading,
  Image,
  SimpleGrid,
  CardBody,
  Stack,
  Card,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context";
const About = () => {
  const { products } = useContext(GlobalContext);

  const totalProducts = products.length;
  const totalMobiles = products.filter(
    (product) => product.category === "mobile"
  ).length;
  const totalLaptops = products.filter(
    (product) => product.category === "laptop"
  ).length;

  const offers = [
    {
      id: 1,
      title: "Audio",
      description:
        "Elevate your listening experience with our selection of headphones, earphones, speakers, and audio accessories. We offer products from trusted brands that deliver exceptional sound quality.",
      image:
        "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694168007631-71fzp1etPwL._SL1500_.jpg",
    },
    {
      id: 2,
      title: "Gaming",
      description:
        "Dive into the world of gaming with our selection of consoles, gaming laptops, accessories, and more. We cater to both casual gamers and hardcore enthusiasts with products that enhance your gaming experience.",
      image:
        "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694241320686-51qC3djhLQL.jpg",
    },
    {
      id: 3,
      title: "Home Appliances",
      description:
        "Upgrade your home with our range of smart and efficient appliances. From refrigerators and washing machines to microwaves and air conditioners, our products are designed to make your life easier and more comfortable.",
      image:
        "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694266451514-418-9+TCHUL._SL1500_.jpg",
    },
    {
      id: 4,
      title: "Laptops",
      description:
        "From powerful gaming laptops and sleek ultrabooks to robust business machines and versatile 2-in-1s, explore our extensive range of laptops designed to meet your every need.",
      image:
        "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694246023112-719sMfG+11L._SL1500_.jpg",
    },
    {
      id: 5,
      title: "Mobile Phones",
      description:
        "Stay connected with the latest smartphones from top brands like Apple, Samsung, Xiaomi, and more. Whether you're looking for the newest iPhone, a feature-packed Android device, or a budget-friendly option, we've got you covered.",
      image:
        "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074776147-galaxy S22 ultra 5G.jpg",
    },
    {
      id: 6,
      title: "TVs",
      description:
        "Stay connected with the latest smartphones from top brands like Apple, Samsung, Xiaomi, and more. Whether you're looking for the newest iPhone, a feature-packed Android device, or a budget-friendly option, we've got you coveredExperience entertainment like never before with our selection of high-definition and smart TVs.",
      image:
        "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694154515879-819Lw2PE8tL._SL1500_.jpg",
    },
  ];

  return (
    <>
      {/*  */}
      <Flex
        maxWidth="100%"
        minHeight="100vh"
        m="10px"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box
          width={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
          p="30px"
        >
          <Text fontWeight="bold" color="green.400">
            About Us
          </Text>
          <Heading
            fontSize={{ base: "2rem", sm: "2rem", md: "4rem", lg: "5rem" }}
          >
            Our Dream Is Your Goal
          </Heading>
          <Text
            mt={{ base: "30px", sm: "30px", md: "70px", lg: "130px" }}
            fontSize="24px"
          >
            Welcome to Pulse Buy, your ultimate destination for all things
            electronics. We are passionate about providing our customers with
            the latest and greatest in technology, from cutting-edge mobile
            phones and powerful laptops to essential home appliances. Our goal
            is to make your shopping experience as seamless and enjoyable as
            possible, offering a wide selection of high-quality products at
            competitive prices.
          </Text>
        </Box>
        <Box
          w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
          flexDirection={{ base: "column", sm: "column" }}
        >
          <Box w="100%" h="400px" p="10px">
            <Image
              borderRadius="20px"
              h="100%"
              w="100%"
              src="https://img.archiexpo.com/images_ae/photo-g/125975-15350211.jpg"
            />
          </Box>
          <Box w="100%" p="10px">
            <SimpleGrid minChildWidth={250} spacing={10}>
              <Box p="25px" h="130px" bg="gray.100" borderRadius="10px">
                <Heading>{totalProducts}</Heading>
                <Text color="green.400" fontWeight="bold">
                  Total Products
                </Text>
              </Box>
              <Box p="25px" h="130px" bg="gray.100" borderRadius="10px">
                <Heading>{totalMobiles}</Heading>
                <Text color="green.400" fontWeight="bold">
                  Total Mobiles
                </Text>
              </Box>
              <Box p="25px" h="130px" bg="gray.100" borderRadius="10px">
                <Heading>{totalLaptops}</Heading>
                <Text color="green.400" fontWeight="bold">
                  Total Laptops
                </Text>
              </Box>

              <Box p="25px" h="130px" bg="gray.100" borderRadius="10px">
                <Heading>6</Heading>
                <Text color="green.400" fontWeight="bold">
                  Total Brands
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
      {/*  */}
      <Flex
        maxWidth="100%"
        p="50px"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{base: "column", sm: "column",md: "row", lg: "row"}}
      >
        <Box h={{base: "800px", sm: "800px", md: "400px", lg: "400px"}} maxWidth="600px" bg="gray.100" borderRadius="20px" p="20px">
          <Text color="green.400" fontWeight="bold">
            How It Started
          </Text>
          <Heading>Out Story</Heading>
          <Text mt="40px">
            The story of Pulse Buy began with a simple yet powerful idea: to
            make top-quality electronics accessible to everyone. Our founder,
            Maid Sejdinovic, started this journey in 2024 with a small store
            that quickly became a favorite among tech enthusiasts. Recognizing
            the growing demand for convenient online shopping, Maid decided to
            take the next step and bring our extensive product range to a wider
            audience through our online platform. From humble beginnings, Pulse
            Buy has grown into a trusted name in the electronics market. Our
            commitment to quality, customer satisfaction, and staying ahead of
            tech trends has fueled our growth and success. We are proud of our
            journey and excited to continue serving our valued customers.
          </Text>
        </Box>
        <Box h={{base: "600px", sm: "600px", md: "400px", lg: "400px"}} mt={{base: "30px", sm: "30px"}}  maxWidth="600px" bg="gray.100" borderRadius="20px" p="20px">
          <Text color="green.400" fontWeight="bold">
            Our Mission
          </Text>
          <Heading>Satisfying Our Clients</Heading>
          <Text mt="40px">
            At Pulse Buy, our mission is simple: to bring the best electronic
            products to our customers with exceptional service and unbeatable
            value. We strive to stay ahead of the curve by constantly updating
            our inventory with the newest releases and most sought-after
            gadgets. Whether you are a tech enthusiast, a professional in need
            of reliable gear, or someone looking to upgrade their home with
            modern appliances, we have something for everyone.
          </Text>
        </Box>
      </Flex>

      {/*  */}
      <Box>
        <Heading textAlign="center" fontWeight="bold">
          What We Offer
        </Heading>
        <SimpleGrid minChildWidth={350} spacing={10} p="10px">
          {offers.map((product) => (
            <Card maxW="sm" m="10px" key={product.id}>
              <CardBody>
                <Image
                  transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.05)", opacity: 0.8 }}
                  maxHeight="300px"
                  src={product.image}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" textAlign="center">
                  <Heading color="green.400" size="md">{product.title}</Heading>
                  <Text>{product.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default About;
