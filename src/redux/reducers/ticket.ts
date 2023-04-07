import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Ticket, TicketEvents } from "../../apiModels";

// Define a type for the slice state
interface TicketState {
  tickets: Ticket[];
  ticket?: Ticket;
  ticketEvents?: TicketEvents;
}

// Define the initial state using that type
const initialState: TicketState = {
  tickets: [],
  ticket: undefined,
  ticketEvents: undefined,
};

export const ticketSlice = createSlice({
  name: "ticket",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    receiveTicketList: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload;
      return state;
    },
    receiveTicketChat: (
      state: TicketState,
      action: PayloadAction<Ticket>
    ) => {
      state.ticket = action.payload;
      return state;
    },
    receiveTicketEvents: (
      state: TicketState,
      action:PayloadAction<TicketEvents>
    ) => {
      state.ticketEvents = action.payload;
      return state;
    },
    receiveNewTicket: (
      state: TicketState,
      action:PayloadAction<Ticket>
    ) => {
      state.tickets.unshift(action.payload)
      return state;
    }
  },
});

export const { receiveTicketList, receiveTicketChat, receiveTicketEvents } = ticketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const ticketCount = (state: RootState) => state.ticket.tickets;

export const ticketActions = ticketSlice.actions;
export default ticketSlice.reducer;
