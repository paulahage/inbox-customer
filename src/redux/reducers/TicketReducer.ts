import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket, TicketEvents } from "../../apiModels";

interface TicketState {
  tickets: Ticket[];
  ticket?: Ticket;
  ticketEvents?: TicketEvents;
}

const initialState: TicketState = {
  tickets: [],
  ticket: undefined,
  ticketEvents: undefined,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    receiveTicketList: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload;
      return state;
    },
    receiveTicketChat: (state: TicketState, action: PayloadAction<Ticket>) => {
      state.ticket = action.payload;
      return state;
    },
    receiveTicketEvents: (
      state: TicketState,
      action: PayloadAction<TicketEvents>
    ) => {
      state.ticketEvents = action.payload;
      return state;
    },
    receiveNewTicket: (state: TicketState, action: PayloadAction<Ticket>) => {
      state.tickets.unshift(action.payload);
      return state;
    },
    receiveTicketStatusUpdate: (
      state: TicketState,
      action: PayloadAction<Ticket>
    ) => {
      const ticketIndex = state.tickets.findIndex(
        (ticket) => ticket.id === action.payload.id
      );
      state.tickets[ticketIndex] = action.payload;
      return state;
    },
  },
});

export const { receiveTicketList, receiveTicketChat, receiveTicketEvents } =
  ticketSlice.actions;

export const ticketActions = ticketSlice.actions;
export default ticketSlice.reducer;
