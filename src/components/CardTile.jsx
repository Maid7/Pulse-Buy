import {
  Flex,
  Box,
  Text,
  Divider,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cart-slice";

export default function CardTile(data) {
  const shortTitle = data.data.title.split(",")[0];

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(data.data.id));
  };

  return (
    <>
      <Flex
        boxShadow="md"
        p="20px"
        w="100%"
        height={{ base: "600px", sm: "800px", md: "200px", lg: "200px" }}
        flexDirection={{ base: "column", sm: "column", lg: "row" }}
      >
        <Box flex="1" height="100%">
          <Image src={data.data.image} w="100%" h="100%" />
        </Box>
        <Box flex="2" height="100%" p="10px">
          <Heading fontSize="17px" color="green.200">
            {shortTitle}
          </Heading>
          <Text color="gray.500" mt="8px">
            ({data.data.brand})
          </Text>
          <Box
            m="10px"
            h="30px"
            w="30px"
            borderRadius="50%"
            bg={data.data.color.toString()}
            border={data.data.color === "white" ? "1px solid green" : "none"}
          ></Box>
        </Box>
        <Flex
          flex="1"
          height="100%"
          direction="column"
          align="center"
          justify="space-between"
        >
          <Button
            alignSelf={{
              base: "flex-start",
              sm: "flex-start",
              md: "flex-end",
              lg: "flex-end",
            }}
            onClick={handleRemoveFromCart}
            variant="link"
            colorScheme="gray"
            mb={{ base: "260px" }}
            mt={{ lg: "25px" }}
          >
            Remove
          </Button>
          <Box
            alignSelf={{
              base: "flex-start",
              sm: "flex-start",
              md: "flex-end",
              lg: "flex-end",
            }}
            fontSize="20px"
            color="green.400"
            mt={{ base: "-240px" }}
            mb={{ lg: "29px" }}
            fontWeight="bold"
          >
            {data.data.discount > 0 && (
              <Text color="green.300" fontWeight="bold">
                {data.data.discount}% Off
              </Text>
            )}
            <Text>${data.data.price}</Text>
          </Box>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
}
