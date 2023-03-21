import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';

const Checkout = () => {
    const {cartItems} = useContext(CartContext);
    return(
        <div>
            {cartItems.map(({id, name, quantity}) => {
                return (<div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                </div>)
            })}
        </div>
    );
}

export default Checkout;