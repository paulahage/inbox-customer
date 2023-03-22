import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Ticket } from "../../apiModels";

// Define a type for the slice state
interface TicketState {
  tickets: Ticket[];
}

// Define the initial state using that type
const initialState: TicketState = {
  tickets: [],
};

export const ticketSlice = createSlice({
  name: "ticket",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    receiveTicketList: (state: TicketState, action: PayloadAction<Ticket[]>) => {
      state.tickets = action.payload;
      return state;
    },
  },
});

export const { receiveTicketList } = ticketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const ticketCount = (state: RootState) => state.ticket.tickets;

export default ticketSlice.reducer;
