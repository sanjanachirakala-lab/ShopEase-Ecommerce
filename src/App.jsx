import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

function App() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (

        <div className={darkMode ? "app dark-mode" : "app"}>

            <BrowserRouter>

                <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/products" element={<Products />} />

                    <Route path="/product/:id" element={<ProductDetails />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/wishlist" element={<Wishlist />} />

                    <Route path="*" element={<NotFound />} />

                </Routes>

                <Footer />

            </BrowserRouter>

        </div>

    );

}

export default App;