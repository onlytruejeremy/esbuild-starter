import React from "react";
import { Button, Flex, Box, FlexProps } from "@chakra-ui/react";

import Link from "../Link/Link";
const links = [
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Login",
    href: "/Login",
  },
  {
    name: "Get Started",
    href: "/register",
    isBtn: true,
  },
];

type NavMenuProps = FlexProps & {
  open: boolean;
  onClick: () => void;
};

const NavMenu = ({ open, onClick, ...rest }: NavMenuProps) => {
  return (
    <Flex
      borderTop={{
        sm: open ? "2px solid" : "none",
        md: "none",
      }}
      borderColor={{
        sm: open ? "purple.500" : "whiteAlpha.800",
      }}
      alignItems="center"
      justifyContent="flex-end"
      gap="4"
      flexFlow={{
        sm: "column",
        md: "row",
      }}
      position={{
        sm: "absolute",
        md: "unset",
      }}
      top="70px"
      right="0"
      bg={{
        sm: "whiteAlpha.800",
        md: "none",
      }}
      p={{
        sm: open ? 4 : 0,
        md: 0,
      }}
      maxHeight={{
        sm: !open ? "0" : "999rem",
        md: "999rem",
      }}
      overflow="hidden"
      opacity={{
        sm: open ? 1 : 0,
        md: 1,
      }}
      minWidth={{
        sm: "200px",
      }}
      transition={
        !open
          ? "padding 250ms 250ms ease, height 250ms, max-height 250ms ease, opacity 250ms, border 0ms 250ms"
          : "padding 0ms 0ms ease, height 250ms, max-height 250ms ease, opacity 250ms, border 250ms 0ms"
      }
      borderBottomLeftRadius="10px"
    >
      {links.map(({ name, href, isBtn }) => {
        return (
          <Box key={name}>
            {isBtn ? (
              <Button
                as={Link}
                bg="purple.500"
                color="whiteAlpha.800"
                href={href}
                _hover={{
                  textDecor: "none",
                  bg: "purple.700",
                }}
              >
                {name}
              </Button>
            ) : (
              <Link href={href}>{name}</Link>
            )}
          </Box>
        );
      })}
    </Flex>
  );
};

export default NavMenu;
