import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardTile from "../components/CardTile";
import CardCheckout from "../components/CardCheckout";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    const price = cart.reduce((acc, curr) => acc + (Number(curr.price) || 0), 0);
    const discount = cart.reduce((acc, curr) => acc + (Number(curr.discount) || 0), 0);
    setTotalPrice(price);
    setTotalDiscount(discount);
    const discountedPrice = price - (price * (discount / 100));
    setTotalCart(discountedPrice);
  }, [cart]);

  return (
    <>
      {cart && cart.length ? (
        <Flex
          w="100%"
          p="20px"
          minHeight="100vh"
          flexDirection={{ base: "column", sm: "column", lg: "row" }}
        >
          <Flex
            minHeight="100%"
            w={{ base: "100%", sm: "100%", lg: "60%" }}
            flexDirection="column"
          >
            {cart.map((cartItem) => (
              <CardTile key={cartItem.id} data={cartItem} />
            ))}
          </Flex>
          <CardCheckout
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
            totalCart={totalCart}
            cart={cart}
          />
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
          <Heading color="green.400">Your Cart Is Empty</Heading>
          <Link to="/">
            <Button variant="link">Shop Now!</Button>
          </Link>
        </Flex>
      )}
    </>
  );
};

export default Cart;
