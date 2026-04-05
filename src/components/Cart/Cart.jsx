import NavBar from '../Navbar';
import { useState } from 'react';
import LogginButton from '../LoginButton';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function Cart() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const  { cartItems } = useContext(CartContext);

  const cartItemsGrouped = cartItems.reduce((group, item) => {
    const { id } = item;
    if (!group[id]) {
      group[id] = { ...item, quantity: 1 };
    } else {
      group[id].quantity += 1;
    }
    return group;
  }
  , {});

  if (!isLoggedIn) {
    return (
      <>
        <NavBar />
        <h1>Please log in to view your cart.</h1>
        <LogginButton onLogin={() => setIsLoggedIn(true)} />
      </>
    );
  }
  return (
    
       <>
        <NavBar />
        <h1>¡This is your cart! 🛍️</h1>
        <div className="cart-items">
          <ul>
            {Object.values(cartItemsGrouped).map(product => (
              <li className="cart-item" key={product.id}>{product.title} <span className="cart-item-quantity">x {product.quantity}</span> <span className="cart-item-price">${product.price * product.quantity}</span></li>
            ))}
          </ul>
          <span className="cart-total">Total: ${Object.values(cartItemsGrouped).reduce((total, item) => total + item.price * item.quantity, 0)}</span>
        </div>
        <div className="cart-images">
          <img className="cart-image" src="https://about.puma.com/sites/default/files/styles/dd_image_slider/public/media/image-slider/m-18-neymar-4.jpg?itok=fhW7Vibf" alt="Cart Image" />
          <img className="cart-image" src="https://www.themarkethink.com/wp-content/uploads/2020/12/puma-neymar-tenis.jpg" alt="Cart Image" />
        </div> 
       </>
  )
}

export default Cart;