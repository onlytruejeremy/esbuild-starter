import React from "react";
import {
  SimpleGrid,
  Button,
  chakra,
  GridItem,
} from "@chakra-ui/react";

import Link from "../Link/Link";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavToggle from "./NavToggle";
import useToggle from "../../utils/useToggle";

const NavBar = () => {
  const { isOpen, toggleOpen } = useToggle();
  return (
    <chakra.header bg="whiteAlpha.800" fontWeight="semibold">
      <SimpleGrid
        maxW="container.xl"
        m="auto"
        as="nav"
        height="70px"
        padding={{
          sm: "4",
          xl: 0,
        }}
        templateColumns="min-content 1fr"
        alignItems="center"
        position="relative"
      >
        <GridItem whiteSpace="nowrap">
          <NavLogo />
        </GridItem>
        <GridItem
          as={SimpleGrid}
          templateColumns={{
            sm: "1fr min-content",
            md: "1fr",
          }}
          gap="4"
        >
          <GridItem>
            <NavMenu open={isOpen} onClick={toggleOpen} />
          </GridItem>
          <GridItem
            display={{
              md: "none",
            }}
          >
            <NavToggle open={isOpen} onClick={toggleOpen} />
          </GridItem>
        </GridItem>
      </SimpleGrid>
    </chakra.header>
  );
};

export default NavBar;
