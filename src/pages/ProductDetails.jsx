import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getProducts } from "../services/productService";
import { addToCart } from "../store/cartSlice";
import Loader from "../components/Loader";

function ProductDetails() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const data = await getProducts();

                const selectedProduct = data.find(
                    item => item.id === Number(id)
                );

                if (!selectedProduct) {
                    setError("Product not found");
                } else {
                    setProduct(selectedProduct);
                }

            } catch (err) {

                setError("Unable to load product details.");

            } finally {

                setLoading(false);

            }

        };

        fetchProduct();

    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <h2 className="error-message">{error}</h2>;
    }

    return (

        <div className="product-details">

            <div className="details-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="details-info">

                <h1>{product.title}</h1>

                <h3>Category: {product.category}</h3>

                <p className="details-price">
                    ${product.price}
                </p>

                <p className="details-description">
                    {product.description}
                </p>

                <p>⭐ Rating: {product.rating.rate} / 5</p>

                <p>Available Stock: {product.rating.count}</p>

                <button
                    className="add-cart-btn"
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to Cart
                </button>

            </div>

        </div>

    );

}

export default ProductDetails;