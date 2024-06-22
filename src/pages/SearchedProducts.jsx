import { useContext } from "react";
import { GlobalContext } from "../context";
import { Spinner, SimpleGrid,Box } from "@chakra-ui/react";
import Product from "../components/Product"
export default function SearchedProducts() {

    const { loading, filteredProducts } = useContext(GlobalContext);

  return (
    <>
    {loading ? (
      <Box>
        <Spinner mt="20px" color="purple.300" />
      </Box>
    ) : (
      <SimpleGrid minChildWidth={250} spacing={10} mt="20px">
        {filteredProducts &&
          filteredProducts.map((item, index) => (
            <Product data={item} key={index} />
          ))}
      </SimpleGrid>
    )}
  </>
  )
}
