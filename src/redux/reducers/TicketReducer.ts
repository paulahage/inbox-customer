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
  listView?: string;
  unassignedTicketsCount: Ticket[];
  assignedTicketByAgentCount: Ticket[];
}

const initialState: TicketState = {
  tickets: [],
  ticket: undefined,
  ticketEvents: undefined,
  listView: undefined,
  unassignedTicketsCount: [],
  assignedTicketByAgentCount: [],
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    receiveTicketChat: (state: TicketState, action: PayloadAction<Ticket>) => {
      if (state.listView === "unassignedList") {
        if (Object.hasOwn(action.payload,'isNewTicket')) {
          const ticketNotificationIndex = state.tickets.findIndex((ticket) => ticket.id === action.payload.id);
          state.tickets[ticketNotificationIndex] = {...action.payload,isNewTicket: false};
          state.unassignedTicketsCount = state.unassignedTicketsCount.filter((ticket) => ticket.id !== action.payload.id);
        }
      }
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
      state.unassignedTicketsCount.push(action.payload);
      if (state.listView === "unassignedList") {
        state.tickets.unshift({ ...action.payload, isNewTicket: true });
        return state;
      }
      return state;
    },
    receiveTicketStatusUpdate: (
      state: TicketState,
      action: PayloadAction<Ticket>
    ) => {
      if (action.payload.status === TicketStatus.CUSTOMER_WAITING && action.payload.agent?.id === "0") {
        state.assignedTicketByAgentCount.push(action.payload);
      }

      if (state.listView === "unassignedList") {
        if (action.payload.status !== TicketStatus.UNASSIGNED) {
          state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload.id);
          return state;
        }
      } else if (state.listView === "assignedAgentList" && action.payload.agent?.id === "0") {
        if (action.payload.status !== TicketStatus.CUSTOMER_WAITING) {
          state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload.id);
          return state;
        }
      } else if (state.listView === "resolvedAgentList" && action.payload.agent?.id === "0") {
        if (![TicketStatus.RESOLVED, TicketStatus.WAITING_FOR_CUSTOMER].includes(action.payload.status)) {
          state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload.id);
          return state;
        }
      } else if (state.listView === "resolvedAllList") {
        if (![TicketStatus.RESOLVED ,TicketStatus.WAITING_FOR_CUSTOMER].includes(action.payload.status)) {
          state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload.id);
          return state;
        }
      } else {
        return state;
      }

      const ticketIndex = state.tickets.findIndex((ticket) => ticket.id === action.payload.id);

      if (ticketIndex !== -1) {
        state.tickets[ticketIndex] = action.payload;
        return state;
      }

      state.tickets.unshift({ ...action.payload, isNewTicket: true });
      return state;
    },
    receiveUnassignedTicketList: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload.filter((ticket) => ticket.status === TicketStatus.UNASSIGNED );
      state.unassignedTicketsCount = [];
      state.ticket = undefined;
      return state;
    },
    receiveAssignedTicketListByAgent: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.ticket = undefined;
      state.tickets = action.payload;
      state.assignedTicketByAgentCount = [];
      return state;
    },
    receiveResolvedTicketListByAgent: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload;
      state.ticket = undefined;
      return state;
    },
    receiveAllResolvedTicketList: (
      state: TicketState,
      action: PayloadAction<Ticket[]>
    ) => {
      state.tickets = action.payload;
      state.ticket = undefined;
      return state;
    },
    receiveListView: (state: TicketState, action: PayloadAction<string>) => {
      state.listView = action.payload;
      return state;
    },
  },
});

export const {
  receiveTicketChat,
  receiveTicketEvents,
  receiveNewTicketEvent,
  receiveUnassignedTicketList,
  receiveAssignedTicketListByAgent,
  receiveResolvedTicketListByAgent,
  receiveAllResolvedTicketList,
  receiveListView,
  receiveNewTicket,
  receiveTicketStatusUpdate,
} = ticketSlice.actions;

export const ticketActions = ticketSlice.actions;
export default ticketSlice.reducer;
