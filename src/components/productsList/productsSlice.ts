import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hooks';

import { IStore, TRequest, TFetchProduct } from "../../typies/typies";

const initialState: IStore = {
    products: [],
    productsLoadingStatus: 'idle',
    totalProducts: 0
};

export const fetchProducts: TFetchProduct = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const request: TRequest = useHttp();
        return await request('http://localhost:3000/products');
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state) => {
            state.totalProducts = state.totalProducts + 1;
        }
    },
    extraReducers: (builder) => {
        builder
                .addCase(fetchProducts.pending, state => {state.productsLoadingStatus = 'loading'})
                .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.productsLoadingStatus = 'idle';
                    state.products = action.payload;
                })
                .addCase(fetchProducts.rejected, state => {
                    state.productsLoadingStatus = 'error';
                })
                .addDefaultCase(() => {})
    }
});

const { actions, reducer} = productsSlice;

export default reducer;
export const {
    addProduct
} = actions;