import { WS_URL } from "../utils";
import { Ticket, NotificationEvent } from "../apiModels";
import { io } from "socket.io-client";
import { playNotification } from "./UxServices";
import { log } from "console";

const socket = io(WS_URL);

export const getNewTickets = (callback: (oneTicket: Ticket) => void) => {
  socket.on(NotificationEvent.TICKET_NEW, (ticket: Ticket) => {
    callback(ticket);
    playNotification();
    console.log("socket io");
  });
};

export const getTicketUpdate = (callback: (oneTicket: Ticket) => void) => {
  socket.on(NotificationEvent.TICKET_UPDATE, (ticket: Ticket) => {
    callback(ticket);
    console.log('change status');
    
  });
};


