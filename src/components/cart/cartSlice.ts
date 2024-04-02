import { createSlice } from "@reduxjs/toolkit"
import { IStore, ICart } from "../../typies/cartType";
import { PayloadAction } from "@reduxjs/toolkit";


const initialState: IStore = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, actions: PayloadAction<ICart>) => {
            state.cart.push(actions.payload);

        },
        addProductInCart: (state, action) => {
            state.cart.filter(item => item.id == action.payload)[0].addCount = 
                    `${+state.cart.filter(item => item.id == action.payload)[0].addCount + 1}`;
        },
        deleteProductFromCart: (state, action) => {
            state.cart.filter(item => item.id == action.payload)[0].addCount = 
                    `${+state.cart.filter(item => item.id == action.payload)[0].addCount - 1}`;
            if(state.cart.filter(item => item.id == action.payload)[0].addCount === "0") {
                state.cart = state.cart.filter(item => item.id !== action.payload)
            } 
            
        }
    }
});

const {actions, reducer} = cartSlice;

export default reducer;
export const {
    addProductInCart,
    deleteProductFromCart,
    addProductToCart
} = actions;
