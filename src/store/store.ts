import { configureStore } from "@reduxjs/toolkit";
import products from '../components/productsList/productsSlice';
import cart from "../components/cart/cartSlice";

const store = configureStore({
    reducer: {products, cart},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;


export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch;