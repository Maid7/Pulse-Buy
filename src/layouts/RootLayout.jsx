import { Divider } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"
import Footer from "../components/Footer"

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Divider bg="purple.200" h="2px"/>
      <Breadcrumbs/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout
