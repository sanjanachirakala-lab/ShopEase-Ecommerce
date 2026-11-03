import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";

function ProductCard({ product }) {

    const dispatch = useDispatch();

    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    const isWishlisted = wishlistItems.some(
        item => item.id === product.id
    );

    const handleWishlist = () => {

        if (isWishlisted) {
            dispatch(removeFromWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }

    };

    return (

        <div className="product-card">

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
                className="wishlist-btn"
                onClick={handleWishlist}
            >
                {isWishlisted ? "❤️ Remove from Wishlist" : "♡ Add to Wishlist"}
            </button>

        </div>

    );

}

export default ProductCard;