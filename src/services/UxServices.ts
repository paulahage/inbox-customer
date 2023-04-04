import { TicketStatus } from "../ApiModels";

export const playNotification = () => {
  const notificationSound = new Audio("../notification_sound/new_ticket.wav");
  notificationSound.load();
  notificationSound.play();
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
