import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../context";
import NavProductsMenu from "./NavProductsMenu";
import NavBrandsMenu from "./NavBrandsMenu";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchTerm, handleSearch, handleSubmit, handleClick } =
    useContext(GlobalContext);

  return (
    <Box bg="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box fontWeight="bold" fontSize="lg" color="green.400">
            <Link to="/">PulseBuy</Link>
          </Box>
          <HStack
            ml={{ base: "0", md: "400px" }}
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
            p="13px"
            borderRadius="20px"
          >
            <NavProductsMenu />
            <NavBrandsMenu />
            <NavLink
              to="/"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "black",
              })}
            >
              Home
            </NavLink>

            <NavLink
              to="about"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "black",
              })}
            >
              About
            </NavLink>

            <NavLink
              to="help"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "black",
              })}
            >
              Help
            </NavLink>

            <NavLink
              to="favorites"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "black",
              })}
            >
              Favorites
            </NavLink>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <InputGroup size="md" maxW="300px" mr={4}>
            <form onSubmit={handleSubmit}>
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Search"
                _placeholder={{ color: "gray.300" }}
                value={searchTerm}
                onChange={handleSearch}
              />
              <InputRightElement>
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  onClick={handleClick}
                />
              </InputRightElement>
            </form>
          </InputGroup>
          <Link to="cart">
            <FaShoppingCart size={20} color="green" />
          </Link>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          display={{ md: "none" }}
          position="absolute"
          bg="white"
          w="100%"
          zIndex="10"
          boxShadow="lg"
        >
          <Stack as="nav" spacing={4} p={4}>
            <NavLink
              to="/"
               align="center"
              onClick={onClose}
              isActive={(match) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "black",
              })}
            >
              Home
            </NavLink>

            <NavLink
             align="center"
              to="about"
              onClick={onClose}
              isActive={(match) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "black",
              })}
            >
              About
            </NavLink>

            <NavLink
             align="center"
              to="help"
              onClick={onClose}
              isActive={(match) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "black",
              })}
            >
              Help
            </NavLink>

            <NavLink
            align="center"
              to="favorites"
              onClick={onClose}
              isActive={(match) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "black",
              })}
            >
              Favorites
            </NavLink>
            <NavProductsMenu />
            <NavBrandsMenu />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
