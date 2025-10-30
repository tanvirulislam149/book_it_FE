import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  slot: string;
  title: string;
  date: Date;
  time: string;
  price: number;
  tax: number;
  person: number;
}

const initialState: OrderState = {
  slot: "",
  title: "",
  date: new Date(),
  time: "",
  price: 0,
  tax: 0,
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
      state.title = action.payload.title;
      state.date = action.payload.date;
      state.time = action.payload.time;
      state.price = action.payload.price;
      state.tax = action.payload.tax;
    },
  },
});

export const { setOrderData } = OrderDataSlice.actions;
export default OrderDataSlice.reducer;
