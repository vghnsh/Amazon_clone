export const initialState = {
    isSign:false,
    user:null,
    cart :[],
};
export const getTotal =(cart) =>
    cart?.reduce((price,item)=>item.price + price, 0);

function reducer(state,action){
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart:[...state.cart,action.item]
            };
            
        case "REMOVE_FROM_CART":
            let newCart = state.cart;
            const index = state.cart.findIndex((cart)=> cart.id === action.id);

            if(index >= 0){
                newCart.splice(index,1);
            }else{
                console.warn(`cant remove:${action.id}`);
            }
            return {
                ...state
            };
        
        case "SET_CURRENT_USER":
                return{
                    ...state,
                    user:action.user,
                    isSign:action.isSign
                };
        default:
            return state;
    }
}

export default reducer;