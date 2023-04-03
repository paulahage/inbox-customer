import { WS_URL } from "../utils";
import { Ticket, TicketStatus, NotificationEvent } from "../ApiModels";
import { io } from "socket.io-client";

const socket = io(WS_URL);

export const getNewTickets = (callback: (oneTicket: Ticket) => void) => {
  socket.on(NotificationEvent.TICKET_NEW, (ticket: Ticket) => {
    callback(ticket);
  });
};

export const getTicketUpdate = (callback: (oneTicket: Ticket) => void) => {
  socket.on(NotificationEvent.TICKET_UPDATE, (ticket: Ticket) => {
    callback(ticket);
  });
};

export const getStatusColor = (ticketStatus: TicketStatus) => {
  if (ticketStatus === TicketStatus.WAITING_FOR_CUSTOMER) {
    return "warning";
  }
  return "error";
};

export const getStatusText = (ticketStatus: TicketStatus) => {
  if (ticketStatus === TicketStatus.WAITING_FOR_CUSTOMER) {
    return "waiting";
  }
  if (ticketStatus === TicketStatus.ASSIGNED) {
    return "assigned";
  }
  if (ticketStatus === TicketStatus.CUSTOMER_WAITING) {
    return "to answer";
  }
  if (ticketStatus === TicketStatus.RESOLVED) {
    return "resolved";
  }
  if (ticketStatus === TicketStatus.UNASSIGNED) {
    return "unassigned";
  }
};
