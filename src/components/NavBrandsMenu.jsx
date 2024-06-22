import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const NavBrandsMenu = () => {
  return (
    
    <Menu>
    <MenuButton bg="transparent" variant="link" textDecoration="none" as={Button} rightIcon={<ChevronDownIcon />}>
      Brands
    </MenuButton>
    <MenuList>
      <Link to="brands/sony"><MenuItem>Sony</MenuItem></Link>
      <Link to="brands/microsoft"><MenuItem>Microsoft</MenuItem></Link>
      <Link to="brands/logitech"><MenuItem>Logitech</MenuItem></Link>
      <Link to="brands/xiaomi"><MenuItem>Xiaomi</MenuItem></Link>
      <Link to="brands/samsung"><MenuItem>Samsung</MenuItem></Link>
      <Link to="brands/apple"><MenuItem>Apple</MenuItem></Link>
    </MenuList>
  </Menu>
  )
}

export default NavBrandsMenu
