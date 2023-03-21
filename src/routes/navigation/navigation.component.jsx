import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/083 crown.svg" ;
import {UserContext} from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import './navigation.style.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/' >
                    <CrownLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                    ) : (
                        <Link className="nav-link" to='/auth'>Sign In</Link>
                    )}
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropDown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;