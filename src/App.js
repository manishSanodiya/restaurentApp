import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {

  //cart shhow on click only 
 const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
      setCartIsShown(true);
  };
  const hideCartHandler = () => {
      setCartIsShown(false);
  };


  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>

    </Fragment>
  );
}

export default App;
