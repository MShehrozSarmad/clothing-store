import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer, EmptyMessage, CartItmes } from './cart-dropdown.styles';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const gotoCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CartDropDownContainer>
            <CartItmes>
                { cartItems.length ?  (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) 
                : (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItmes>
            <Button onClick={gotoCheckoutHandler} >Go To CheckOut</Button>
        </CartDropDownContainer>
    );
}

export default CartDropDown;