import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import productdbSlice from "./productdbSlice";
import productSlice from "./productSlice";


export const store = configureStore({
    reducer:{
        auth: authSlice,
        products: productSlice,
        productsdb: productdbSlice
    },
});