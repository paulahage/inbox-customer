import { WS_URL } from "../utils";
import { Ticket, NotificationEvent, TicketEvent } from "../apiModels";
import { io } from "socket.io-client";
import { playNotification } from "./UxServices";

const socket = io(WS_URL);

export const getNewTickets = (callback: (oneTicket: Ticket) => void) => {
  socket.on(NotificationEvent.TICKET_NEW, (ticket: Ticket) => {
    callback(ticket);
    playNotification();
  });
};

export const getTicketUpdate = (callback: (oneTicket: Ticket) => void) => {
  socket.on(NotificationEvent.TICKET_UPDATE, (ticket: Ticket) => {
    callback(ticket);
  });
};

//const activeListeners: ((event: TicketEvent) => void)[] = [];

export const listenChatRoom = (
  ticketId: string,
  callback: (event: TicketEvent) => void
) => {
  socket.emit("join_ticket", ticketId);
  socket.on(NotificationEvent.TICKET_NEW_EVENT, callback);
  //activeListeners.push(callback);
};

export const stopListeningChatRoom = (
  ticketId: string,
  callback: (event: TicketEvent) => void
) => {
  socket.emit("leave_ticket", ticketId);
  socket.off(NotificationEvent.TICKET_NEW_EVENT, callback);

  // const index = activeListeners.indexOf(callback);
  // if (index !== -1) {
  //   activeListeners.splice(index, 1);
  // }
};
