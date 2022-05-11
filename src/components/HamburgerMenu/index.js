// import styles from "./HamburgerMenu.module.css";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function HamburgerMenu(props) {
  const [size, setSize] = React.useState("xs");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Button
        onClick={() => handleClick(size)}
        key={size}
        m={4}
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
      />

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Link>
              <Heading>All Posts</Heading>
            </Link>
            <Link>
              <Heading>Add Post</Heading>
            </Link>
            <Link>
              <Heading>Login</Heading>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
