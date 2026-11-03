import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} from "../store/cartSlice";

import { Link } from "react-router-dom";

function Cart() {

    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {

        return (

            <div className="empty-cart">

                <h1>Your Cart is Empty 🛒</h1>

                <p>Looks like you haven't added anything yet.</p>

                <Link to="/products" className="continue-btn">
                    Continue Shopping
                </Link>

            </div>

        );

    }

    return (

        <div className="cart-page">

            <h1>Shopping Cart</h1>

            <div className="cart-container">

                <div className="cart-items">

                    {cartItems.map((item) => (

                        <div className="cart-item" key={item.id}>

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="cart-item-info">

                                <h3>{item.title}</h3>

                                <p className="cart-price">
                                    ${item.price}
                                </p>

                                <div className="quantity-controls">

                                    <button
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() => dispatch(increaseQuantity(item.id))}
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                <div className="cart-summary">

                    <h2>Order Summary</h2>

                    <p>
                        Total Items: {
                            cartItems.reduce(
                                (total, item) => total + item.quantity,
                                0
                            )
                        }
                    </p>

                    <h3>
                        Total Price: ${totalPrice.toFixed(2)}
                    </h3>

                    <button className="checkout-btn">
                        Proceed to Checkout
                    </button>

                    <Link to="/products" className="continue-shopping">
                        Continue Shopping
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Cart;