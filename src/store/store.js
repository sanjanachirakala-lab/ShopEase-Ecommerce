import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({

    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer
    }

});

store.subscribe(() => {

    const state = store.getState();

    localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.items)
    );

    localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlist.items)
    );

});