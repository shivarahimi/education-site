import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer"
import {ADD_TO_CART,REMOVE_FROM_CART,SHOW_HIDE_CART} from "./ShoppingTypes"
import { confirmAlert } from 'react-confirm-alert';

const CartState = ({children}) => {
    const initalState = {
        showCart : false,
        cart : localStorage.getItem('cart') == null ? [] : JSON.parse(localStorage.getItem('cart')),
        cartCost : 0
    }
    const[state,dispatch] = useReducer(CartReducer,initalState)
    const addToCart = product => {
        let cartItem = state.cart.some(item => item["_id"] === product["_id"])
        if (!cartItem) {
            dispatch({
                type : ADD_TO_CART,payload : product
            })
        }
        else{
            return null
        }
    }
    const removeFromCart = product => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div dir='rtl' className='p-4' style={{backgroundColor:"cadetblue",borderRadius:"1em"}}>
                  <p className='p-2' style={{color:"white"}}>آیا میخواهی دوره را پاک کنی؟</p>
                  <button className="btn mx-2" style={{backgroundColor:"green",color:"white"}}
                    onClick={() => {
                        dispatch({
                            type : REMOVE_FROM_CART,payload : product
                        })
                        onClose();
                    }}
                  >
                    بله مطمئن هستم!
                  </button>
                  <button onClick={onClose} className="btn" style={{backgroundColor:"red",color:"white"}}>انصراف</button>
                </div>
              );
            }
          })
    }
    const showHideCart = () => {
        dispatch({
            type : SHOW_HIDE_CART,payload : state.showCart
        })
    }
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },[state.cart])
    useEffect(() => {
        const shopCart = localStorage.getItem('cart')
        const cartItem = JSON.parse(shopCart)
        if (cartItem.lenght > 0) {
            addToCart(cartItem)
        }
    },[])
    return ( 
        <CartContext.Provider value={{
            cart: state.cart,
            cartCost: state.cartCost, showCart: state.showCart,
            addToCart, removeFromCart, showHideCart
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartState;