import { Box, HStack, Image, Link, Button, Icon, VStack, useDisclosure } from "@chakra-ui/react";
import logo from "../icons_assets/Logo.svg";
import { Link as ReactLink } from "react-router-dom";
import { useState } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useState(window.innerWidth <= 768);

  return (
    <>
      <HStack
        justifyContent={"space-between"}
        padding={3}
        paddingLeft={["5", "10", "16", "20"]}
        paddingRight={["5", "10", "16", "20"]}
        fontSize={["xs", "sm", "md", "lg"]}
      >
        <Box>
          <Image src={logo} width={'fit-content'} alt="logo"/>
        </Box>

        <Box>
          {isMobile ? (
            <HStack
              spacing={[1, 2, 3, 4]}
              justifySelf={"end"}
              alignItems="center"
            >
              <Button variant="ghost" onClick={onOpen} name="menu">
                <Icon as={HamburgerIcon} w={6} h={6} />
              </Button>
            </HStack>
          ) : (
            <HStack spacing={[1, 2, 3, 4]} justifySelf={"end"}>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"}>
                Home
              </Link>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"}>
                About
              </Link>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"}>
                Menu
              </Link>
              <Link as={ReactLink} to={"/booking"} fontWeight={"bold"}>
                Reservations
              </Link>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"} noOfLines={1}>
                Order Online
              </Link>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"}>
                Login
              </Link>
            </HStack>
          )}

          {isMobile && (
            <VStack
              pos="absolute"
              top="0"
              left="0"
              right="0"
              p={2}
              spacing={2}
              bg="white"
              boxShadow="md"
              display={isOpen ? "flex" : "none"}
              zIndex="dropdown"
            >
              <Button variant="ghost" alignSelf="flex-end" onClick={onClose} name="menu">
                <Icon as={HamburgerIcon} w={6} h={6} />
              </Button>

              <Box display={'flex'} flexDir={'row'} width={'full'} justifyContent={'space-evenly'}> 

              <Link as={ReactLink} to={"/"} fontWeight={"bold"}>
                Home
              </Link>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"}>
                About
              </Link>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"}>
                Menu
              </Link>
              <Link as={ReactLink} to={"/booking"} fontWeight={"bold"}>
                Reservations
              </Link>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"} noOfLines={1}>
                Order Online
              </Link>
              <Link as={ReactLink} to={"/"} fontWeight={"bold"}>
                Login
              </Link>
              </Box>
            </VStack>
          )}
        </Box>
      </HStack>
    </>
  );
}
