import { Heading,Box,Text } from "@chakra-ui/react";

const Faq = () => {
  return (
    <Box>
      <Heading textAlign="center" mt="20px">Frequently Asked Questions</Heading>
      <Box border="1px dashed lightgreen" p="5px 20px" maxWidth="600px" border-radius="4px" margin="20px auto">
        <Heading>How do I create an account?</Heading>
        <Text>
          You can create an account by clicking the "Sign Up" button on the top
          right corner of our homepage and following the prompts.
        </Text>
      </Box>
      <Box bg="lightgreen" p="5px 20px"  maxWidth="600px" border-radius="4px" margin="20px auto">
        <Heading>How do I reset my password?</Heading>
        <Text>
          Click on "Forgot Password" on the login page, and we'll send you an
          email with instructions on how to reset it.
        </Text>
      </Box>
      <Box border="1px dashed lightgreen" p="5px 20px"  maxWidth="600px" border-radius="4px" margin="20px auto">
        <Heading>What is your return policy?</Heading>
        <Text>
          We offer a 30-day return policy for all items. Please visit our
          Returns & Refunds page for more details.
        </Text>
      </Box>
    </Box>
  );
};

export default Faq;
