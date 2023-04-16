import { URL_BASE, URL_GET_TICKETS } from "../utils";
import { Ticket } from "../apiModels";

export const getTickets = (callBack: (list: Ticket[]) => void) => {
  fetch(URL_GET_TICKETS)
    .then((response) => response.json())
    .then((ticketList: Ticket[]) => {
      callBack(ticketList);
    });
};

export const assignTicket = (ticketId: string) => {
  fetch(`${URL_BASE}/ticket/${ticketId}/assign/0`, { method: "POST" }).then(
    (response) => {
      return response;
    }
  );
};
