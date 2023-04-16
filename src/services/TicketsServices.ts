import { WS_URL } from "../utils";
import { Ticket, NotificationEvent, TicketEvent } from "../apiModels";
import { io } from "socket.io-client";
import { playNotification } from "./UxServices";

const socket = io(WS_URL);

export const getNewTickets = (callback: (oneTicket: Ticket) => void) => {
  socket.on(NotificationEvent.TICKET_NEW, (ticket: Ticket) => {
    //console.log('get new tickets OK');
    callback(ticket);
    playNotification();
  });
};

export const getTicketUpdate = (callback: (oneTicket: Ticket) => void) => {
  socket.on(NotificationEvent.TICKET_UPDATE, (ticket: Ticket) => {
    //console.log(" new tickets update OK");
    callback(ticket);
  });
};

export const listenChatRoom = (
  ticketId: string,
  callback: (event: TicketEvent) => void
) => {
  socket.emit('join_ticket', ticketId);
  socket.on(NotificationEvent.TICKET_NEW_EVENT, callback);
};
