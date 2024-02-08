import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status:"Unauthenticated"   
  },

  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
      state.status="Authenticated"
    },
    SetExpired: (state, action) => { 
      state.status=action.payload
    }, 
    AddToCart: (state, action) => { 
      state.user.cartItems=[...state.user.cartItems,action.payload]
    }, 
    RemoveFromCart: (state, action) => { 
      state.user.cartItems=state.user.cartItems.filter(val=>val.product._id.toString()!==action.payload)
    },
    AddToWish: (state, action) => { 
      state.user.wishItems=[...state.user.wishItems,action.payload]
    }, 
    RemoveFromWish: (state, action) => { 
      state.user.wishItems=state.user.wishItems.filter(val=>val.product._id.toString()!==action.payload)
    },
  },
});

export const { SetUser , SetExpired,AddToCart,RemoveFromCart,AddToWish,RemoveFromWish } = userSlice.actions;

export default userSlice.reducer;