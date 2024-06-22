import {

  Route,
  Routes,

} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollToTop from "./components/ScrollToTop";

// layouts
import RootLayout from "./layouts/RootLayout";
import ProductsLayout from "./layouts/ProductsLayout";
import BrandsLayout from "./layouts/BrandLayout";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
// category pages
import TV from "./pages/categories/TV";
import Mobile from "./pages/categories/Mobile";
import Audio from "./pages/categories/Audio";
import Appliances from "./pages/categories/Appliances";
import Gaming from "./pages/categories/Gaming";
import Laptop from "./pages/categories/Laptop";
// brands pages
import Sony from "./brands/Sony";
import Microsoft from "./brands/Microsoft";
import Logitech from "./brands/Logitech";
import Xiaomi from "./brands/Xiaomi";
import Samsung from "./brands/Samsung";
import Apple from "./brands/Apple";
import Brands from "./pages/Brands";
import Favorites from "./pages/Favorites";
import SearchedProducts from "./pages/SearchedProducts";


function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
       <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="products" element={<ProductsLayout />}>
        <Route path="tv" element={<TV />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="audio" element={<Audio />} />
        <Route path="appliances" element={<Appliances />} />
        <Route path="gaming" element={<Gaming />} />
        <Route path="laptop" element={<Laptop />} />
      </Route>

      <Route path="brands" element={<BrandsLayout />}>
        <Route index element={<Brands />} />
        <Route path="sony" element={<Sony />} />
        <Route path="microsoft" element={<Microsoft />} />
        <Route path="logitech" element={<Logitech />} />
        <Route path="xiaomi" element={<Xiaomi />} />
        <Route path="samsung" element={<Samsung />} />
        <Route path="apple" element={<Apple />} />
      </Route>

      <Route path="*" element={<NotFound />} />

      <Route path=":id" element={<ProductDetails />} />
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="searched-products" element={<SearchedProducts/>}/>
    </Route>
    </Routes>
    </>
    
  )
 
}

export default App;
