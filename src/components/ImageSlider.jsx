import React from "react";
import Slider from "react-slick";
import { Box, Flex, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692940742197-speaker1.jpg",
      link: "brands/sony",
      title: "sony",
    },
    {
      src: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694241552001-61-jjE67uqL._SL1500_.jpg",
      link: "brands/microsoft",
      title: "microsoft",
    },
    {
      src: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257315660-logitech.jpg",
      link: "brands/logitech",
      title: "logitech",
    },
    {
      src: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078965685-redmi note 12 5g.jpg",
      link: "brands/xiaomi",
      title: "xiaomi",
    },
    {
      src: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694156194279-817zvskL7DL._SL1500_.jpg",
      link: "brands/samsung",
      title: "samsung",
    },
    {
      src: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691054448465-earbud2.jpg",
      link: "brands/apple",
      title: "apple",
    },
  ];

  return (
    <Box
      maxWidth={{ lg: "1100px" }}
      p="30px"
      maxHeight="600px"
      mx="auto"
      mt="20px"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            height="500px"
            backgroundImage={image.src}
            backgroundSize="cover"
            backgroundPosition="center"
            position="relative"
            color="white"
          >
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.4)"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              p={{ base: "10px", md: "20px" }}
              overflow="hidden"
            >
              <Flex
                flexDirection="column"
                flex="1"
                p={{ base: "10px", md: "20px" }}
                alignItems="center"
                justifyContent="center"
              >
                <Heading>{image.title.toUpperCase()}</Heading>
                <Link to={image.link}>
                  <Button w="200px" colorScheme="green" variant="solid">
                    Browse
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
