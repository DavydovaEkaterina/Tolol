import { useDispatch } from 'react-redux';
import {addProduct} from '../productsList/productsSlice';

import img from '../../assets/cloth.jpeg';
import star from '../../assets/star.png'
import { IProduct } from '../../typies/typies';
import './productItem.css';


const ProductItem = ({name, description, grade, price}: IProduct) => {
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

            <button className="productItem__btn" onClick={() => dispatch(addProduct())}>Купить</button>
        </div>
    )
}

export default ProductItem;