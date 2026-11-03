import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ darkMode, toggleDarkMode }) {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (

        <nav className="navbar">

            <div className="logo">
                <Link to="/">ShopEase</Link>
            </div>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>

                <Link to="/wishlist">
                    ❤️ Wishlist ({wishlistItems.length})
                </Link>

                <Link to="/cart" className="cart-link">
                    🛒 Cart ({totalItems})
                </Link>

                <button
                    className="theme-btn"
                    onClick={toggleDarkMode}
                >
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>

            </div>

        </nav>

    );

}

export default Navbar;