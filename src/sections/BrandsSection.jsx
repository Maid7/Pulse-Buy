import { Heading,Box } from "@chakra-ui/react";
import ImageSlider from "../components/ImageSlider";
export default function BrandsSection() {
  return (
        <Box maxHeight="600px">
          <Heading mt="120px" textAlign="center">Browse By Categories</Heading>  
              <ImageSlider/>
        </Box>
       
  
  )
}
