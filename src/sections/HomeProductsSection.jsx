import { useContext, useState, useRef } from "react";
import { GlobalContext } from "../context";
import ReactPaginate from "react-paginate";

import {
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
 
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function HomeProductsSection() {
  const { products } = useContext(GlobalContext);
  const { cart } = useSelector((state) => state);
  const [pageNumber, setPageNumber] = useState(0);
  const gridRef = useRef(null);

  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = products.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );

  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    gridRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Heading textAlign="center" color="black">
        Our Products
      </Heading>
      <Text color="gray" textAlign="center">
        Explore Our Products
      </Text>
      <SimpleGrid ref={gridRef} minChildWidth={250} spacing={10} p="60px">
        {displayProducts &&
          displayProducts.map((item) => (
            <Card maxW="sm" key={item.id}>
              <CardBody>
               <Link to={`/${item.id}`}>
               <Image
                  src={item.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.2)", opacity: 0.8 }}
                />
               </Link> 
                <Stack mt="6" spacing="3">
                  <Heading size="md" fontWeight="bold">
                    {item.title.split(",")[0]}
                  </Heading>
                  <Flex>
                    <Box>
                    <Text color="green.300" fontWeight="bold">
                    {item.discount}% OFF
                  </Text>
                  <Text color="green.300" fontSize="2xl" mt="-16px">
                    ${item.price}
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
              </CardBody>
            </Card>
          ))}
      </SimpleGrid>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </>
  );
}
