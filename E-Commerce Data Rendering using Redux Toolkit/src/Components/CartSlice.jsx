import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    cartItems : [],
}

const CartSlice = createSlice({

   name : 'cart',
   initialState,
   //Each key-value pair represents a single reducer
   //,where the key is the name of the action and the value is the reducer function.
   reducers:{

    /*
    state: This represents the current state of the Redux store.
     It typically includes the data relevant to the application.
    
     action: This is an object that describes the action that occurred.
      Redux actions are plain JavaScript objects that must have a type 
      property indicating the type of action being performed.
      Additionally, they may contain additional data necessary to carry out
      the action. In this case, action.payload likely contains the identifier 
      (id) of the item whose quantity needs to be increased.
    */
    addItemToCart(state,action){ //state (current state of the slice) and action (the dispatched action containing the payload
        const existingItem = state.cartItems.find(
            item => item.id === action.payload.id
        );
        if (existingItem){
            existingItem.quantity +=1;
        } else {
            state.cartItems.push({...action.payload, quantity: 1 });
        }
    },

    increaseItemQuantity(state,action){
        const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
        if (itemToIncrease){
            itemToIncrease.quantity +=1;
        }
    },
    
    decreaseItemQuantity(state,action){
        const itemToDeccrease = state.cartItems.find(item => item.id === action.payload);
        if (itemToDeccrease && itemToDeccrease.quantity > 1){
            itemToDeccrease.quantity -=1;
        }
    },

    removeItemFromCart(state,action){
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    clearCart(state){
        state.cartItems= [];
    },


   }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;

export default CartSlice.reducer;