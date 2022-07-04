import React, { ReactNode } from "react";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

type LinkProps = ChakraLinkProps & {
  children: ReactNode;
};
export default function Link({ href, children, ...rest }: LinkProps) {
  return (
    <ChakraLink as={NavLink} to={href} {...rest}>
      {children}
    </ChakraLink>
  );
}
