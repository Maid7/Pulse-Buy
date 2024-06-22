import { Outlet, NavLink } from "react-router-dom";
import { Flex, Box, Link } from "@chakra-ui/react";

const BrandsLayout = () => {
  // custom NavLink
  const CustomNavLink = ({ to, children, ...props }) => (
    <NavLink to={to} exact>
      {({ isActive }) => (
        <Link
          as={Box}
          h="30px"
          w="90px"
          borderRadius="20px"
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={isActive ? "white" : "black"}
          fontWeight={isActive ? "bold" : "normal"}
          bg={isActive ? "green.200" : "white"}
          {...props}
        >
          {children}
        </Link>
      )}
    </NavLink>
  );
  return (
    <>
      <Flex
        maxWidth="700px"
        alignItems="center"
        justifyContent="space-evenly"
        m="20px"
        px={{ base: 4, md: 8 }}
        flexWrap={{base: "wrap", sm: "wrap"}}
      >

        <CustomNavLink to="sony">Sony</CustomNavLink>

        <CustomNavLink to="microsoft">Microsoft</CustomNavLink>

        <CustomNavLink to="logitech">Logitech</CustomNavLink>

        <CustomNavLink to="xiaomi">Xiaomi</CustomNavLink>

        <CustomNavLink to="samsung">Samsung</CustomNavLink>

        <CustomNavLink to="apple">Apple</CustomNavLink>
      </Flex>
      <Outlet />
    </>
  );
};

export default BrandsLayout;
