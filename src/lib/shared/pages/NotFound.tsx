import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import Link from "../components/Link/Link";
const NotFound = () => {
  return (
    <Flex
      height="calc(100vh - 70px)"
      flexFlow="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      css={`
        * {
          max-width: 75ch;
        }
      `}
      gap="4"
    >
      <Heading>404 Not Found</Heading>
      <Text>
        Unfortunately the page you requested doesn't exist or cannot
        be retrieved at this time. You can try going to the home page
        by following the link below.
      </Text>
      <Button
        bg="purple.500"
        color="whiteAlpha.800"
        _hover={{
          bg: "purple.700",
          textDecor: "none",
        }}
        as={Link}
        href="/"
      >
        Go Home
      </Button>
    </Flex>
  );
};

export default NotFound;
