import {
  Image,
  Stack,
  Box,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart-slice";
import { useContext } from "react";
import { GlobalContext } from "../context";
import HeartButton from "./HeartButton";
import { useState, useEffect } from "react";

export default function Product({ data }) {
  const shortDescription = data.title.split(",")[0];
  const dispatch = useDispatch();
  const { handleAddToFavorites, favoritesList } = useContext(GlobalContext);
  const { cart } = useSelector((state) => state);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoritesList.some((item) => item.id === data.id));
  }, [favoritesList, data.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(data.id));
  };

  const handleToggleFavorite = () => {
    !isFavorite;
    handleAddToFavorites(data);
    setIsFavorite((prev) => !prev);
  };

  return (
    <Box maxW="sm" borderRadius="lg" overflow="hidden" boxShadow="lg">
      <Box>
        <Box
          position="relative"
          display="inline-block"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.0)" }}
        >
          <Link to={`/${data.id}`}>
            <Image
              src={data.image}
              alt={data.title}
              transform="scale(0.7)"
              borderRadius="lg"
            />
          </Link>

          {data.popular ? (
            <Box
              height="30px"
              width="90px"
              borderRadius="10px"
              bg="green.200"
              position="absolute"
              top="10px"
              left="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="black" fontSize="xl" fontWeight="bold">
                Popular
              </Text>
            </Box>
          ) : (
            ""
          )}
          <HeartButton onClick={handleToggleFavorite} />
        </Box>
      </Box>
      <Box p="6">
        <Stack mt="3px" spacing="3">
          <Heading size="md" color="black">
            {shortDescription}
          </Heading>
          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <Box>
              <Text color="green.300" fontWeight="bold">
                {data.discount}% OFF
              </Text>
              <Text mt="-12px" fontWeight="bold" fontSize="2xl">
                ${data.price}
              </Text>
            </Box>
            <Button
              onClick={
                cart.some((item) => item.id === data.id)
                  ? handleRemoveFromCart
                  : handleAddToCart
              }
              colorScheme="green"
            >
              {cart.some((item) => item.id === data.id)
                ? "Remove From Cart"
                : "Add To Cart"}
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
