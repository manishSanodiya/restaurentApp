import React,{useContext} from 'react'
import classes from './MealItemForm.module.css';
import Input from '../../Ui/Input';
import CartCtx from '../../../Store/Cart-context';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartCtx)
  const addItemToCart = (event) => {
    //update the cart context item
    event.preventDefault();
    const quantity = document.getElementById('amount_' + props.id).value;

    cartCtx.addItem({...props.item, quantity:quantity});
    console.log(cartCtx.items)
    console.log(quantity);
    
  }
  return (
    <form className={classes.form}>
      
      <Input label="Amount" input={{
        id:'amount_' + props.id,
        type: 'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1',
      }}/>
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  )
}

export default MealItemForm
