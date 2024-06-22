import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.in/api/products?limit=149`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could now fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // functionality to get searched game/games
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  
    if (term.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("searched-products"); 
    
  };
  const handleClick = () => {
    navigate("searched-products");
    setSearchTerm("")
  };

  // functionality to add games to favorites
  const handleAddToFavorites = (getCurrentItem) => {
    const index = favoritesList.findIndex((item) => item.id === getCurrentItem.id);
  
    if (index === -1) {
      // Item not found, add it to favorites
      setFavoritesList([...favoritesList, getCurrentItem]);
    } else {
      // Item found, remove it from favorites
      const updatedFavorites = favoritesList.filter((item) => item.id !== getCurrentItem.id);
      setFavoritesList(updatedFavorites);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        loading,
        products,
        favoritesList,
        handleAddToFavorites,
        handleSearch,
        searchTerm,
        filteredProducts,
        handleSubmit,
        handleClick
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
