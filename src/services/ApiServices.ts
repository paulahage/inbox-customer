import { URL_BASE, URL_GET_TICKETS, URL_ALL_RESOLVED_TICKETS } from "../utils";
import { Ticket } from "../apiModels";

const agentId = 0;

export const getUnassignedTickets = (callBack: (list: Ticket[]) => void) => {
  fetch(URL_GET_TICKETS)
    .then((response) => response.json())
    .then((ticketList: Ticket[]) => {
      callBack(ticketList);
    });
};

export const getUnassignedTicketsByAgent = (callBack: (list: Ticket[]) => void) => {
  fetch(`${URL_BASE}/ticket/byAgent/${agentId}`)
    .then((response) => response.json())
    .then((unassignedTicketListByAgent: Ticket[]) => {
      callBack(unassignedTicketListByAgent);
    });
};

export const getDoneTicketsByAgent = (callBack: (list: Ticket[]) => void) => {
  fetch(`${URL_BASE}/ticket/done/byAgent/${agentId}`)
    .then((response) => response.json())
    .then((doneTicketListByAgent: Ticket[]) => {
      callBack(doneTicketListByAgent);
    });
};

export const getAllResolvedTickets = (callBack: (list: Ticket[]) => void) => {
  fetch(URL_ALL_RESOLVED_TICKETS)
    .then((response) => response.json())
    .then((allResolvedTicketList: Ticket[]) => {
      callBack(allResolvedTicketList);
  })
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


