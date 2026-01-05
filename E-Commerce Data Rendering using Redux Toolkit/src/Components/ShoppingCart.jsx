import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity



const ShoppingCart = () => {
/*
Function Component: The ShoppingCart component is a functional component declared using the arrow function syntax.

Redux Hooks: The component uses useDispatch and useSelector hooks from react-redux to interact with the Redux store.
 useDispatch is used to dispatch actions, and useSelector is used to extract data from the Redux store.

State Retrieval: cartItems variable retrieves the array of items from the Redux store's state by selecting state.cart.cartItems.
 totalAmount calculates the total amount by iterating through cartItems and multiplying each item's price by its quantity,
 then summing them up.*/
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//Event Handlers: 
// handleRemoveItem dispatches the removeItemFromCart action with the ID of the item to be removed. 
  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };

  // handleClearCart dispatches the clearCart action to clear all items from the cart. 
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // handleIncreaseQuantity dispatches the increaseItemQuantity action to increase the quantity of a specific item. 
  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };

  // handleDecreaseQuantity dispatches the decreaseItemQuantity action to decrease the quantity of a specific item.
  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };

  // Button Controls: Quantity controls (- and + buttons) are provided to decrease or increase the quantity of each item. 
  // Clicking the - button invokes handleDecreaseQuantity with the item's ID. 
  // Clicking the + button invokes handleIncreaseQuantity with the item's ID.
    return (
    <>
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>
    </>
  );
};
export default ShoppingCart;