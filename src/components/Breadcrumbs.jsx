import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      return (
        <Flex key={index} alignItems="center">
          <Link
            as={NavLink}
            to={currentLink}
            color="blue.500"
            _hover={{ textDecoration: "underline" }}
          >
            {crumb}
          </Link>
          {index < array.length - 1 && (
            <Box mx={2} color="gray.500">
              &gt;
            </Box>
          )}
        </Flex>
      );
    });

  return (
    <Flex m="20px" alignItems="center">
      {crumbs}
    </Flex>
  );
}
