import { SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import { GlobalContext } from "../context";
import Product from "../components/Product";
import { useContext } from "react";

export default function Sony() {
  const { products, loading } = useContext(GlobalContext);

  return (
    <SimpleGrid>
      {loading ? (
        <Box>
          <Spinner color="green.300" m="20px" />
        </Box>
      ) : (
        <SimpleGrid minChildWidth={250} spacing={10} p="20px">
          {products &&
            products
              .filter((item) => item.brand === "sony")
              .map((item) => <Product data={item} key={item.id} />)}
        </SimpleGrid>
      )}
    </SimpleGrid>
  );
}
