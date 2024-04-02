import { useSelector } from "react-redux";

import CartItem from "../cartItem/CartItem";
import { TCart, IStateStore, ICart } from "../../typies/cartType";

import './cart.css';

const Cart = () => {

    const cartProduct: TCart = useSelector((state: IStateStore) => state.cart.cart);

    const renderCart = (arr: TCart) => {
        if(arr.length === 0) {
            <h3>no products in cart</h3>
        }

        return arr.map(({id, ...props}) => {
            return <CartItem key={id} id={id} {...props}/>
        })
    };

    const element = renderCart(cartProduct);
    const total = cartProduct.map((item: ICart) => +item.price * +item.addCount).reduce((a,b) => a + b, 0);

    return (
        <div className="cart">
            {element}
            <div className="cart__total">Total: {total}</div>
        </div>
    )
}

export default Cart;