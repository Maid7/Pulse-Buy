import { useState } from 'react';
import { Box, Text, Button,Heading } from '@chakra-ui/react';

const ProductDescription = ({ text = "", initialLength = 300 }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Box mt="30px">
      <Text
        color="black"
        fontSize="sm"
        fontWeight="bold"
        maxWidth="400px"
        whiteSpace="pre-wrap"
        overflowWrap="break-word"
      >
        {showMore ? text : `${text.substring(0, initialLength)}${text.length > initialLength ? '...' : ''}`}
      </Text>
      {text.length > initialLength && (
        <Button
          mt={2}
          colorScheme="teal"
          size="sm"
          variant="link"
          onClick={handleToggle}
        >
          {showMore ? 'Show Less' : 'More Info +'}
        </Button>
      )}
    </Box>
  );
};

export default ProductDescription