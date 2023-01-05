import React, { Fragment, useContext } from 'react';
import CartContext from '../../../AdminComponents/context/ShoppingCartContext/CartContext';
import Header from '../Header/Header';
import './../../../style/UserStyle/Shopping/ShoppingPage.css'
import CartItem from './CartItem';
import { useState } from 'react';
import { useEffect } from 'react';

const ShoppingPage = () => {
    const{cart} = useContext(CartContext)
    const [cost, setCost] = useState(0);
    useEffect(() => {
        setCost(cart.reduce((accr, curr) => accr + Number(curr.cost), 0));
      }, [cart]);
    return ( 
        <Fragment>
            <Header />
            <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h2 style={{textAlign:"right",marginTop:"120px"}}>سبد خرید</h2>
                    <div className='storyShop' style={{marginTop:"20px"}}>
                        <div className='storyShop-cart'>
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
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='storyShop' style={{backgroundColor:"#f7f7f7"}}>
                        <h2 style={{borderBottom:"1px solid #bfbbbb",padding:"12px"}}>خلاصه سفارش</h2>
                        <div className='storyShop-i'>
                            <p>قیمت کل مرسولات</p>
                            <p>{cost}تومان</p>
                        </div>
                        <div className='storyShop-i'>
                            <p>هزینه ارسال</p>
                            <p>وابسته به آدرس</p>
                        </div>
                        <div className='storyShop-i'style={{color:"#000"}}>
                            <p>قابل پرداخت</p>
                            <p>{cost}تومان</p>
                        </div>
                        <button className='finallshop-btn' type='submit'>پرداخت نهایی</button>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
        
     );
}
 
export default ShoppingPage;