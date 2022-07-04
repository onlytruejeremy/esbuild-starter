import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Box>
        <NavBar />
        <Box as="main">{children}</Box>
      </Box>
    </>
  );
}
