import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from './productsSlice.js';


import { useEffect } from "react";
import Spinner from "../spinner/Spinner.js";
import ProductItem from "../productItem/ProductItem.js";
import { IStateStore, TProducts } from "../../typies/productType";

import './productList.css';
import { useAppDispatch } from "../../hooks/hooks.js";

const ProductList = () => {

    const productsLoadingStatus = useSelector((state: IStateStore) => state.products.productsLoadingStatus);
    const productsFetched = useSelector((state: IStateStore) => state.products.products);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if(productsFetched.length === 0) {
            dispatch(fetchProducts());
        }
    }, []);

    if(productsLoadingStatus === 'loading') {
        return <Spinner/>
    } else if (productsLoadingStatus === 'error') {
        return <h5>Error</h5>
    }

    const renderProducts = (arr: TProducts) => {
        if(arr.length === 0) {
            return <h5>Products is absent</h5>
        }

        return arr.map(({id, ...props}) => {
            return <ProductItem key={id} id={id} {...props}/>
        })
    }

    const element = renderProducts(productsFetched);


    return (
        <div className="producstList"> 
            {element}
        </div>
    )

}

export default ProductList;