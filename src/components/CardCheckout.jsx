import { Flex,Text,Divider,Button } from "@chakra-ui/react"

export default function CardCheckout({cart,totalPrice, totalDiscount,totalCart}) {
  return (
    <Flex
    boxShadow="md"
    p="10px"
    mt={{base: "50px",sm : "50px"}}
    flexDirection="column"
    h="100%"
    w={{ base: "100%", sm: "100%", lg: "40%" }}
    alignItems="center"
    justifyContent="center"
  >
    <Flex
      h="50px"
      w="150px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>Total Items</Text>
      <Text fontSize="15px" fontWeight="bold">
        {cart.length}
      </Text>
    </Flex>
    <Flex
      h="50px"
      w="150px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>Price</Text>
      <Text fontSize="15px" fontWeight="bold">
        ${totalPrice}
      </Text>
    </Flex>
    <Flex
      h="50px"
      w="150px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>Discount</Text>
      <Text fontSize="15px" fontWeight="bold">
        {totalDiscount}%
      </Text>
    </Flex>
  <Divider w="70%"/>
  <Flex
      h="50px"
      w="150px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text textTransform="uppercase" fontWeight="bold">Total</Text>
      <Text fontSize="15px" fontWeight="bold">
        ${totalCart}
      </Text>
    </Flex>
    <Button colorScheme="green" w="200px">Checkout</Button>
  </Flex>
      
    
  )
}
