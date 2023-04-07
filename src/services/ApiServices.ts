import { URL_GET_TICKETS } from "../utils";
import { Ticket } from "../ApiModels";

export const getTickets = (callBack: (list: Ticket[]) => void) => {
  fetch(URL_GET_TICKETS)
    .then((response) => response.json())
    .then((ticketList: Ticket[]) => {
      callBack(ticketList);
    });
};
