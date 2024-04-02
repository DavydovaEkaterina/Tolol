import { useSelector } from 'react-redux';
import { IStateStore } from '../../typies/productType';
import { Link } from 'react-router-dom';


import cartIcon from '../../assets/cartIcon.svg';
import './header.css';

const Header = () => {

    const totalProducts = useSelector((state: IStateStore) => state.products.totalProducts);
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/" className="header__href">WILDBERRIES</Link>
            </div>
            <div className="header__search">
                <input className="header__input" type="text" 
                    placeholder={"Найти на Wildberies"}
                />
            </div>
            <div className="header__cart">
                {totalProducts}
                <Link to="cart">
                    <img className="header__icon" src={cartIcon} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Header;