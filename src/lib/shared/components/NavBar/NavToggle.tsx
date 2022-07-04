import React from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";

const NavToggle = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <IconButton
      boxShadow="0 0px 2px rgba(0,0,0,.7)"
      aria-label="nav-toggle"
      icon={open ? <FiX /> : <FiMenu />}
      onClick={onClick}
    />
  );
};

export default NavToggle;
