import React, {useRef} from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Product1 from '../assets/images/image-product-1.jpg';
import DeleteIcon from '../assets/images/icon-delete.svg';

const Cart = ({setOpenCart, cartProductQuantity, setCartProductQuantity}) => {
    const ref =useRef();

    useOnClickOutside(ref, () => setOpenCart(false));

    return (
        <div>

                <div ref={ref} className="carts">
                    <h5 className="cart-header">Cart</h5>
                    <hr/>
                    <div className="cart-item-grid">
                        {cartProductQuantity === 0 ? (
                            <p className="empty-cart">Your cart is empty.</p>
                        ): (
                            <div>
                                <div className="cart-item d-flex">
                                    <div className="item-image">
                                        <img className="cart-image" src={Product1} alt=""/>
                                    </div>
                                    <div className="item-name">
                                        <p>Fall Limited Edition Sneakers</p>
                                        <div className="prices d-flex">
                                            <h5>$125.00 x {cartProductQuantity}</h5>
                                            <h6>${125 * cartProductQuantity}.00</h6>
                                        </div>
                                    </div>
                                    <img onClick={() => setCartProductQuantity(0)} src={DeleteIcon} alt="" className="bin"/>
                                </div>
                                <button className="check-out">Checkout</button>
                            </div>

                        )}
                    </div>

                </div>
        </div>

    );
}

export default Cart;
