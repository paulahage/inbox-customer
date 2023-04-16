import { URL_BASE, URL_GET_TICKETS } from "../utils";
import { Ticket } from "../apiModels";

const agentId = 0;

export const getTickets = (callBack: (list: Ticket[]) => void) => {
  fetch(URL_GET_TICKETS)
    .then((response) => response.json())
    .then((ticketList: Ticket[]) => {
      callBack(ticketList);
    });
};

export const assignTicket = (ticketId: string) => {
  fetch(`${URL_BASE}/ticket/${ticketId}/assign/${agentId}`, {
    method: "POST",
  }).then((response) => {
    return response;
  });
};

export const sendAgentMessage = (ticketId: string, message: string) => {
  fetch(`${URL_BASE}/ticket/${ticketId}/sendMessage/${agentId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: message,
    }),
  }).then((response) => response);
};