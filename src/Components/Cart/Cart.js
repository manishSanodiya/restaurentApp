import React,{useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../Ui/Modal";
import CartCntxt from "../../Store/Cart-context";

const Cart = (props) => {
  const cartCntxt = useContext(CartCntxt)
  // let totalAmount =props.totalAmount;
  let totalAmount = cartCntxt.totalAmount;
  const hasItems = cartCntxt.items.length>0;
  const addQuantityHandler = (item)=> {
    cartCntxt.addItem({ ...item, amount: 1 });
  }
const removeQuantityHandler = (id) =>{
  cartCntxt.removeItem(id);
}
cartCntxt.items.forEach(item =>{
  {totalAmount += Number(item.price)}
})
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntxt.items.map((item) => (
        
        
        <div>
         
          <li>{item.name} {item.price} quantity:{item.quantity} <button onClick={addQuantityHandler.bind(null, item)}>+</button>
        <button onClick={removeQuantityHandler.bind(null, item.id)}>-</button></li>
        
        </div>
      ))}
      
      
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
       {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
