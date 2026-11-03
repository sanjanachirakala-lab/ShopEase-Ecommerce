import { createSlice } from "@reduxjs/toolkit";

// Load saved cart from Local Storage
const getSavedCart = () => {

    try {

        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];

    } catch (error) {

        return [];

    }

};

const cartSlice = createSlice({

    name: "cart",

    initialState: {
        items: getSavedCart()
    },

    reducers: {

        addToCart: (state, action) => {

            const product = action.payload;

            const existingProduct = state.items.find(
                item => item.id === product.id
            );

            if (existingProduct) {

                existingProduct.quantity += 1;

            } else {

                state.items.push({
                    ...product,
                    quantity: 1
                });

            }

        },

        removeFromCart: (state, action) => {

            state.items = state.items.filter(
                item => item.id !== action.payload
            );

        },

        increaseQuantity: (state, action) => {

            const product = state.items.find(
                item => item.id === action.payload
            );

            if (product) {
                product.quantity += 1;
            }

        },

        decreaseQuantity: (state, action) => {

            const product = state.items.find(
                item => item.id === action.payload
            );

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }

        }

    }

});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;