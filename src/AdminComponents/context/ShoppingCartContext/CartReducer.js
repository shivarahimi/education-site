import { SHOW_HIDE_CART,ADD_TO_CART,REMOVE_FROM_CART,CART_COST } from "./ShoppingTypes"; 

const CartReducer = (state,action) => {
        switch (action.type) {
            case ADD_TO_CART:
                return{
                    ...state,cart : [...state.cart,action.payload]
                }
                case REMOVE_FROM_CART:
                    return{
                        ...state,cart : [...state.cart.filter(item => item["_id"] !== action.payload["_id"])]
                }
                case SHOW_HIDE_CART:
                    return{
                        ...state,showCart : !action.payload
                }
                case CART_COST:
                    return{
                        ...state,cartCost : state.cartCost + action.payload
                }
                default : return state
        }
}
 
export default CartReducer;