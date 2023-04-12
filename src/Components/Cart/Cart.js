import React,{useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../Ui/Modal";
import CartCntxt from "../../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCntxt = useContext(CartCntxt)
  const totalAmount = `$${cartCntxt.totalAmount.toFixed(2)}`
  const hasItems = cartCntxt.items.length>0;
  
  const cartItemAddHandler = (item) => {
    cartCntxt.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCntxt.removeItem(id);
  };

  // const cartItems = (
  //   <ul className={classes['cart-items']}>
  //     {cartCntxt.items.map((item) => (
        
  //       <div><li>{item.name} {item.price} Quantity:{item.quantity} <button onClick={addQuantityHandler}>+</button>
  //       <button onClick={removeQuantityHandler}>-</button></li>
        
  //       </div>
  //     ))}
      
      
  //   </ul>
  // );
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
       {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
