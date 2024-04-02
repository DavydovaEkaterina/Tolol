import { useDispatch } from 'react-redux';
import {addProduct, deleteProduct} from '../productsList/productsSlice';
import { addProductToCart, addProductInCart, deleteProductFromCart } from '../cart/cartSlice';

import img from '../../assets/cloth.jpeg';
import star from '../../assets/star.png'
import { IProduct } from '../../typies/productType';
import './productItem.css';



const ProductItem = ({id, name, description, grade, price, selected, addCount}: IProduct) => {
    const dispatch = useDispatch();

    return (
        <div className="productItem">
            <img src={img} alt="" className="productItem__img"/>
            <h3 className="productItem__name">{name}</h3>
            <div className="productItem__price">{`${price} руб`}</div>
            <div className="productItpm__desc">{description}</div>
            <div className="productItem__grade">
                <img className="productItem__star" src={star} alt="" />
                {grade}
                </div>
            
            {selected === "true" ?
            <div className="productItem__btnCount"> 
                <button className="productItem__btn productItem__btn-delete" onClick={() => {
                    dispatch(deleteProduct(id));
                    dispatch(deleteProductFromCart(id));
                }}>-</button>
                <span className="productItem__count">{addCount}</span>
                <button className="productItem__btn productItem__btn-add" onClick={() => {
                    dispatch(addProduct(id));
                    dispatch(addProductInCart(id));

                }}>+</button>
            </div> :
            <button className="productItem__btn" onClick={() => {
                dispatch(addProduct(id));
                dispatch(addProductToCart({id, name, price, addCount: "1"}));
            }}>Купить</button>}
        </div>
    )
}

export default ProductItem;