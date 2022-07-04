import React from "react";
import { Flex, Box, Heading, Button, chakra } from "@chakra-ui/react";

import Link from "../Link/Link";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavToggle from "./NavToggle";
import useToggle from "../../utils/useToggle";

const NavBar = () => {
  const { isOpen: navOpen, toggleOpen: toggleNav } = useToggle();
  return (
    <chakra.header>
      <Flex as="nav">
        <NavLogo />
        <NavMenu />
        <NavToggle />
      </Flex>
    </chakra.header>
  );
};

export default NavBar;
