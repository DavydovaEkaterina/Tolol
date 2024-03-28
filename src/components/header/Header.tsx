import { useSelector } from 'react-redux';
import { IStateStore } from '../../typies/typies';

import cartIcon from '../../assets/cartIcon.svg';
import './header.css';

const Header = () => {

    const totalProducts = useSelector((state: IStateStore) => state.products.totalProducts);
    return (
        <div className="header">
            <div className="header__logo">
                WILDBERRIES
            </div>
            <div className="header__search">
                <input className="header__input" type="text" 
                    placeholder={"Найти на Wildberies"}
                />
            </div>
            <div className="header__cart">
                {totalProducts}
                <img className="header__icon" src={cartIcon} alt="" />
            </div>
        </div>
    )
}

export default Header;