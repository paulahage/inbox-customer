import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Ticket } from "../../apiModels";

// Define a type for the slice state
interface TicketState {
  value: Ticket[];
}

// Define the initial state using that type
const initialState: TicketState = {
  value: [],
};

export const ticketSlice = createSlice({
  name: "ticket",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    receiveTicket: (state: any, action: PayloadAction<Ticket>) => {
      state.value.push(action.payload);
      return state;
    },
  },
});

export const { receiveTicket } = ticketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const ticketCount = (state: RootState) => state.ticket.value;

export default ticketSlice.reducer;
