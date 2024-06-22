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

export default function Brands() {
  const { products } = useContext(GlobalContext);
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
      <SimpleGrid ref={gridRef} minChildWidth={250} spacing={10} p="60px">
        {displayProducts &&
          displayProducts.map((item) => (
            <Card maxW="sm" key={item.id}>
              <CardBody>
                <Image
                  src={item.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" fontWeight="bold">
                    {item.title.split(",")[0]}
                  </Heading>
                  <Text color="green.300" fontWeight="bold">
                    {item.discount}% OFF
                  </Text>
                  <Text color="green.300" fontSize="2xl" mt="-16px">
                    ${item.price}
                  </Text>
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
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}
