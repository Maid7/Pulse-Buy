import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart-slice";
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { GlobalContext } from "../context";
import ProductDescription from "../components/ProductDescription";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useContext(GlobalContext);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    fetch(`https://fakestoreapi.in/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could now fetch data");
        }
        return res.json();
      })

      .then((data) => {
        setProductDetails(data.product);
      });
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productDetails.id));
  };
  console.log(productDetails);
  return (
    <>
      {loading ? (
        <Box>
          <Spinner color="green.300" m="20px" />
        </Box>
      ) : (
        <>
          <Heading textAlign="center">{productDetails.title}</Heading>
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            width="90%"
            minHeight="100vh"
            m="20px auto"
          >
            <Box
              position="relative"
              display="inline-block"
              w={{ base: "100%", sm: "100%", md: "50%", lg: "65%" }}
            >
              <Image src={productDetails.image} w="100%" h="100%" />
              {productDetails.onSale ? (
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
                    On Sale
                  </Text>
                </Box>
              ) : (
                ""
              )}
            </Box>
            <Flex
              p="80px 30px"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Text color="green.300" fontWeight="bold">
                {productDetails.discount}% OFF
              </Text>
              <Heading>${productDetails.price}</Heading>
              <Box
                maxWidth="300px"
                mt="10px"
                p="7px"
                bg="green.500"
                color="white"
                fontWeight="bold"
                borderRadius="20px"
              >
                Free Delivery With Advance Payment
              </Box>
              {/* Product Description component */}
              <ProductDescription text={productDetails.description || ""} />
              {productDetails.color && (
                <Flex alignItems="center">
                  <Heading>Color:</Heading>
                  <Box
                    m="10px"
                    h="30px"
                    w="30px"
                    borderRadius="50%"
                    bg={productDetails.color.toString()}
                    border={
                      productDetails.color === "white"
                        ? "1px solid green"
                        : "none"
                    }
                  ></Box>
                </Flex>
              )}
              <Button
              maxWidth="150px"
              borderRadius="30px"
              mt="20px"
                onClick={
                  cart.some((item) => item.id === productDetails.id)
                    ? handleRemoveFromCart
                    : handleAddToCart
                }
                colorScheme="green"
              >
                {cart.some((item) => item.id === productDetails.id)
                  ? "Remove From Cart"
                  : "Add To Cart"}
              </Button>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}
