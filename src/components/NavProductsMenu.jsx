import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const NavProductsMenu = () => {
  return (
    
    <Menu>
    <MenuButton bg="transparent" variant="link" textDecoration="none" as={Button} rightIcon={<ChevronDownIcon />}>
      Products
    </MenuButton>
    <MenuList>
      <Link to="products/tv"><MenuItem>TV</MenuItem></Link>
      <Link to="products/laptop"><MenuItem>Laptop</MenuItem></Link>
      <Link to="products/audio"><MenuItem>Audio</MenuItem></Link>
      <Link to="products/gaming"><MenuItem>Gaming</MenuItem></Link>
      <Link to="products/mobile"><MenuItem>Mobile</MenuItem></Link>
      <Link to="products/appliances"><MenuItem>Appliances</MenuItem></Link>
    </MenuList>
  </Menu>
  )
}

export default NavProductsMenu
