

export const initialState ={
    cart:[],
    user: null,
};

/* selector */
export const getCartTotal =(cart) =>
 cart?.reduce((amount, item) => item.price + amount, 0);

const reducer =(state, action) =>{
 console.log(action);
 try {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart:[...state.cart, action.item]
            }
            case 'EMPTY_CART':
                return{
                    ...state,
                    cart: []
                }
            case 'REMOVE_FROM_CART':
                const index = state.cart.findIndex(
                    (cartItem) => cartItem.id === action.id
                );
                let newCart = [...state.cart];
                if(index >= 0){
                    newCart.splice(index, 1);
                }else {
                    console.warn(
                        `cannot remove item (id: ${action.id}) as it is not in the cart!`
                    )
                }
                return{
                    ...state,
                    cart:newCart
                }

                case 'SET_USER':
                    return{
                        ...state,
                        user: action.user
                    }
            default:
                return state;
    }
    
    
 } catch (error) {
    console.log(error);
 }

}

export default reducer