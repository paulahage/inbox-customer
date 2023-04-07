import { createTheme } from "@mui/material/styles";
import { TicketStatus } from "../ApiModels";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fce454",
    },
  },
});


export const playNotification = () => {
  const notificationSound = new Audio("../notification_sound/new_ticket.wav");
  notificationSound.load();
  notificationSound.play();
};

export const getStatusColor = (ticketStatus: TicketStatus) => {
  if (ticketStatus === TicketStatus.ASSIGNED) {
    return "success";
  }
  if (ticketStatus === TicketStatus.CUSTOMER_WAITING) {
    return "warning";
  }
  if (ticketStatus === TicketStatus.WAITING_FOR_CUSTOMER) {
    return "primary";
  }
  if (ticketStatus === TicketStatus.UNASSIGNED) {
    return "error";
  }
  if (ticketStatus === TicketStatus.RESOLVED) {
    return "info";
  }
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
