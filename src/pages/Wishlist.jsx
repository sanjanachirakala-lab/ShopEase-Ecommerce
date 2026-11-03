import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";
import { Link } from "react-router-dom";

function Wishlist() {

    const dispatch = useDispatch();

    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    if (wishlistItems.length === 0) {

        return (

            <div className="empty-cart">

                <h1>Your Wishlist is Empty ❤️</h1>

                <p>You haven't saved any favourite products yet.</p>

                <Link to="/products" className="continue-btn">
                    Explore Products
                </Link>

            </div>

        );

    }

    return (

        <div className="products-page">

            <h1>My Wishlist ❤️</h1>

            <div className="products-grid">

                {wishlistItems.map((product) => (

                    <div className="product-card" key={product.id}>

                        <img
                            src={product.image}
                            alt={product.title}
                        />

                        <h3>{product.title}</h3>

                        <p className="product-price">
                            ${product.price}
                        </p>

                        <Link
                            to={`/product/${product.id}`}
                            className="view-btn"
                        >
                            View Details
                        </Link>

                        <button
                            className="remove-btn"
                            onClick={() => dispatch(removeFromWishlist(product.id))}
                        >
                            Remove from Wishlist
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Wishlist;