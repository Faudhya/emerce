import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterslice";
import productReducer from "../features/counter/productslice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
    },
});
