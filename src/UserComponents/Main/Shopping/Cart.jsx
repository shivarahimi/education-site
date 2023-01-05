import React, { Fragment, useContext } from 'react';
import './../../../style/UserStyle/Shopping/Cart.css'
import CartContext from './../../../AdminComponents/context/ShoppingCartContext/CartContext';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cost, setCost] = useState(0);
    const{showCart,cart,showHideCart} = useContext(CartContext)
    useEffect(() => {
        setCost(cart.reduce((accr, curr) => accr + Number(curr.cost), 0));
      }, [cart]);
    return ( 
        <Fragment>
            {showCart && (
                <div className='cartWrapper m-5'>
                    <div style={{textAlign:"right"}}>
                    <FontAwesomeIcon icon={faClose} onClick={showHideCart}/>
                    </div>
                    <div className='cartInnerWrapper'>
                        {cart.length === 0 ? (
                            <h4 style={{fontSize:"14px"}}> چیزی خریداری نشده است👀</h4>
                        ) : (
                            <ul>
                                {
                                    cart.map(item => (
                                        <CartItem key={item["_id"]} item={item}/>
                                    ))
                                }
                            </ul>
                        )}
                    </div>
                    <div className='' style={{fontSize:"14px"}}>
                        <div>مجموع سبد : {cost}(تومان)</div>
                        <Link to="/home/shoppingPage">
                        <div className='show-shopping'>مشاهده سبد خرید</div>
                        </Link>
                    </div>
                </div>
            )}
        </Fragment>
     );
}
 
export default Cart;