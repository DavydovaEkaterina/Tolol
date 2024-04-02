import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hooks';


import { IStore} from "../../typies/productType";
import { TRequest, TFetchProduct } from "../../typies/requestType";

const initialState: IStore = {
    products: [],
    productsLoadingStatus: 'idle',
    totalProducts: 0,
};

export const fetchProducts: TFetchProduct = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const request: TRequest = useHttp();
        return await request(`http://localhost:3000/products?`);
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.totalProducts = state.totalProducts + 1;
            state.products.filter(item => item.id == action.payload)[0].selected = "true";
            state.products.filter(item => item.id == action.payload)[0].addCount = 
                    `${+state.products.filter(item => item.id == action.payload)[0].addCount + 1}`;
        },
        deleteProduct: (state, action) => {
            state.totalProducts = state.totalProducts - 1;
            state.products.filter(item => item.id == action.payload)[0].addCount = 
                    `${+state.products.filter(item => item.id == action.payload)[0].addCount - 1}`;
            (state.products.filter(item => item.id == action.payload)[0].addCount === "0") && 
            (state.products.filter(item => item.id == action.payload)[0].selected = "false");
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
    addProduct,
    deleteProduct
} = actions;