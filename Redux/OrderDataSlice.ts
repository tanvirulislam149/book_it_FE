import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  slot: string;
  price: number;
  person: number;
}

const initialState: OrderState = {
  slot: "",
  price: 0,
  person: 0,
};

const OrderDataSlice = createSlice({
  name: "orderData",
  initialState,
  reducers: {
    setOrderData: (state, action: PayloadAction<OrderState>) => {
      state.slot = action.payload.slot;
      state.price = action.payload.price;
      state.person = action.payload.person;
    },
    clearOrderData: (state) => {
      state.slot = "";
      state.price = 0;
      state.person = 0;
    },
  },
});

export const { setOrderData, clearOrderData } = OrderDataSlice.actions;
export default OrderDataSlice.reducer;
