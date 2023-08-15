import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (data) => data.service_id === action.payload.service_id
      );

      if (existingItem) {
        existingItem.qty++;
      } else {
        state.items.push(action.payload);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state) => {
      state.items.pop();
    },
    AddQ: (state, action) => {
      state.items.map((data) => {
        if (data.service_id === action.payload.service_id) {
          return { ...data, qty: data["qty"]++ };
        }
      });
    },
    RemoveQ: (state, action) => {
      if (action.payload.qty === 1) {
        state.items.map((data, i) => {
          if (data.service_id === action.payload.service_id) {
            state.items.splice(i, 1);
          }
        });
      }
      state.items.map((data) => {
        if (data.service_id === action.payload.service_id) {
          return { ...data, qty: data["qty"]-- };
        }
      });
    },
  },
});

export const { addItem, removeItem, clearCart, AddQ, RemoveQ } =
  cartSlice.actions;

export default cartSlice.reducer;
