import { CartItemType } from './types/CartItem.d';
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [] as CartItemType[],
  },
  reducers: {

    addToCart: (state, action:PayloadAction<CartItemType>) => {
      const cartItemFound = state.cartItems.find((item) => item.id === action.payload.id);

      cartItemFound ? cartItemFound.quantity++ : state.cartItems.push({...action.payload, quantity:1});
    },

    incrementQuantity: (state, action:PayloadAction<CartItemType>) => {
      const cartItemFound = state.cartItems.find((item) => item.id === action.payload.id);
      if(cartItemFound){cartItemFound.quantity++}
    },

    decrementQuantity: (state, action:PayloadAction<number>) => {
      console.log(state);
      

      const cartItemFound = state.cartItems.find((item) => item.id === action.payload);
      console.log(cartItemFound);
      
      cartItemFound ? 
        cartItemFound.quantity > 1 ? 
          cartItemFound.quantity-- : state.cartItems.splice(state.cartItems.indexOf(cartItemFound), 1 ) 
        : null;  
    },

    removeFromCart: (state, action) => {
      state.cartItems.splice(action.payload, 1)
    },

    updateQuantity: (state, action:PayloadAction<CartItemType>) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

  }
})

const store = configureStore({
  reducer: cartSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, updateQuantity } = cartSlice.actions;
export default store;