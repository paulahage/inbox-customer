export enum SocialMedia {
  EMAIL = "e-mail",
  TWITTER = "twitter",
  INSTAGRAM = "instagram",
  FACEBOOK = "facebook",
}

export interface SocialMediaAccount {
  id: string;
  socialMedia: SocialMedia;
  picture: string;
}

export interface Customer {
  id: string;
  name: string;
  socialMediaAccount: SocialMediaAccount;
}

export enum TicketStatus {
  UNASSIGNED = "unassigned",
  ASSIGNED = "assigned",
  WAITING_FOR_CUSTOMER = "waiting-customer",
  CUSTOMER_WAITING = "customer-waiting",
  RESOLVED = "resolved",
}

export interface Agent {
  id: string;
  name: string;
  picture: string;
}

export enum TicketEventType {
  CUSTOMER_MESSAGE = "customer-message",
  AGENT_MESSAGE = "agent-message",
  STATUS_CHANGE = "status-change",
}

export interface TicketEvent {
  id: string;
  eventType: TicketEventType;
  date: string;
}

export interface TicketEventCustomerMessage extends TicketEvent {
  customer: Customer;
  text: string;
}

export interface TicketEventAgentMessage extends TicketEvent {
  agent: Agent;
  text: string;
}

export enum TicketEventStatusChangeType {
  ASSIGNED = "assigned",
  REASSIGNED = "reassigned",
  RESOLVED = "resolved",
}

export interface TicketEventStatusChange extends TicketEvent {
  agent: Agent;
  changeType: TicketEventStatusChangeType;
}
export interface Ticket {
  id: string;
  customer: Customer;
  agent?: Agent;
  status: TicketStatus;
  date: string;
  lastMessage?: string;
  isNewTicket: boolean;
}

export interface TicketEvents {
  id: string;
  customer: Customer;
  agent?: Agent;
  status: TicketStatus;
  date: string;
  events: TicketEvent[];
}

export enum NotificationEvent {
  TICKET_NEW = "ticket-new",
  TICKET_UPDATE = "ticket-update",
  TICKET_NEW_EVENT= "ticket-event-new"
}

