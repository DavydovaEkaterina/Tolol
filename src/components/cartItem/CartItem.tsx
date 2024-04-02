import {addProductInCart, deleteProductFromCart } from "../cart/cartSlice"; 
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../productsList/productsSlice";
import { ICart } from "../../typies/cartType";

import './cartItem.css';


const CartItem = ({id, name, price, addCount}: ICart) => {

    const dispatch = useDispatch();
    return (
        <div className="cartItem">
            <div className="cartItem__name">{name}</div>
            <div className="cartItem__price">{price}</div>
            <div className="cartItem__countItem">
                <button className="cartItem__deleteItem" onClick={() => {
                    dispatch(deleteProductFromCart(id));
                    dispatch(deleteProduct(id));
                }}>-</button>
                <span className="cartItem__countItem">{addCount}</span>
                <button className="cartItem__addItem" onClick={() => {
                    dispatch(addProductInCart(id));
                    dispatch(addProduct(id));
                }}>+</button>
            </div>
        </div>
    )
}

export default CartItem;