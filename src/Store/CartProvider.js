
import React, { useReducer } from 'react'

import React, { useState } from 'react'
import CartContext from './Cart-context'


const defaultCartState = {
    items: [],
    totalAmount:0,
};

const cartReducer = (state, action) =>{
    //adding to cart
    if(action.type==='ADD'){
      
        const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
          );
        const existingCartItem = state.items[existingCartItemIndex];
     
        let updatedItems;
        //checking if cart has items we are going to add
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount+action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            // updatedItem = {...action.item};
            updatedItems = state.items.concat(action.item);
        }

        

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    //removing from cart
    if(action.type==='REMOVE'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount===1){
            updatedItems = state.items.filter((item) => 
                item.id !== action.id
            )
        }else{
            const updatedItem = {...existingItem, amount:existingItem.amount-1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};


const CartProvider = (props) => {

    // const [items,updateItems] = useState([]);
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


    const [items,updateItems] = useState([]);


    const addItemToCartHandler = item => {
      
       updateItems([...items,item])
       console.log(cartContext);
    };

    const addItemToCartHandler = item => {
      
    //    updateItems([...items,item])
    //    console.log(cartContext);

    dispatchCartAction({type: 'ADD', item: item});

    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type:'REMOVE',id: id})
    };

    const cartContext = {
   items: cartState.items,
        id: cartState.id,
        totalAmount: cartState.totalAmount,

        key: items.id,
        items: items,
        id: items.id,
        totalAmount: 0,

        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider


// import React, { useState } from 'react'
// import CartContext from './Cart-context'

// const CartProvider = (props) => {
//     const [items,updateItems] = useState([]);


//     const addItemToCartHandler = item => {
      
//        updateItems([...items,item])
//        console.log(cartContext);
//     };

//     const removeItemFromCartHandler = id => {};

//     const cartContext = {
//         key: items.id,
//         items: items,
//         id: items.id,
//         totalAmount: 0,
//         addItem: addItemToCartHandler,
//         removeItem: removeItemFromCartHandler
//     };

//     return<CartContext.Provider value={cartContext}>
//         {props.children}
//     </CartContext.Provider>
// }

// export default CartProvider

