import React, { useState } from 'react'
import CartContext from './Cart-context'

const CartProvider = (props) => {
    const [items,updateItems] = useState([]);


    const addItemToCartHandler = item => {
      
       updateItems([...items,item])
       console.log(cartContext);
    };

    const removeItemFromCartHandler = id => {};

    const cartContext = {
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
