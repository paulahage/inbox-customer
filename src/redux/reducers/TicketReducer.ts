import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Ticket,
  TicketEvents,
  TicketEvent,
  TicketStatus,
} from "../../apiModels";

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
    receiveNewTicketEvent: (
      state: TicketState,
      action: PayloadAction<TicketEvent>
    ) => {
      state.ticketEvents?.events.push(action.payload);
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
    receiveUnassignedTicketList: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload.filter(
        (ticket) => ticket.status === TicketStatus.UNASSIGNED
      );
      console.log("receive click unassigned list");
      return state;
    },
    receiveUnassignedTicketListByAgent: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload;
      console.log("receive click unassigned list by agent");
      return state;
    },
    receiveDoneTicketListByAgent: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload;
      console.log("receive click done list by agent");
      return state;
    },
    receiveAllResolvedTicketList: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload;
      console.log("receive click all done list");
      return state;
    },
  },
});

export const {
  //receiveTicketList,
  receiveTicketChat,
  receiveTicketEvents,
  receiveNewTicketEvent,
  receiveUnassignedTicketList,
  receiveUnassignedTicketListByAgent,
  receiveDoneTicketListByAgent,
  receiveAllResolvedTicketList,
} = ticketSlice.actions;

export const ticketActions = ticketSlice.actions;
export default ticketSlice.reducer;
