import React, { useContext } from 'react';
import './../../../style/UserStyle/Shopping/CartItem.css'
import CartContext from './../../../AdminComponents/context/ShoppingCartContext/CartContext';

const CartItem = ({item}) => {
    const{removeFromCart} = useContext(CartContext)
    return ( 
        <li className='cartItem-item'>
            {
                <div className='cartItem-i'>
                    <img src={item.lesson && item.lesson.image} style={{width:"100px",marginLeft:"10px"}} alt=""/>
                    <div style={{fontSize:"14px",marginLeft:"10px"}}>{item.lesson && item.lesson.lessonName}</div>
                    <div style={{color:"red",marginLeft:"10px",fontSize:"10px"}}>{item.cost}(تومان)</div>
                    <button className='cartItemBtn' onClick={() => removeFromCart(item)}>پاک کردن</button>
                </div>
            }
        </li>
     );
}
 
export default CartItem;