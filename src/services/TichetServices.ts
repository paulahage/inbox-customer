import { URL_GET_TICKETS, WS_URL } from "../utils";
import { Ticket } from "../apiModels";
import { io } from "socket.io-client";

const socket = io(WS_URL);

console.log('caal');


export const getNewTickets = (callback: (oneTicket: Ticket) => void) => {
  socket.on("ticket-new", (ticket: Ticket) => {
    console.log('socket on');
    
    callback(ticket);
  });
};

export const getTickets = (callBack: (list: Ticket[]) => void) => {
  fetch(URL_GET_TICKETS)
    .then((response) => response.json())
    .then((ticketList: Ticket[]) => {
      callBack(ticketList);
    });
};
