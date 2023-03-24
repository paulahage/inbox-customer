import "./Chat.scss";
import { Box, Stack } from "@mui/material";
import SingleMessageCustomer from "./SingleMessageCustomer";
import SingleMessageAgent from "./SingleMessageAgent";
import StatusChatMessage from "../chatBox/StatusChatMessage";

import {
  Ticket,
  TicketEvent,
  TicketEventAgentMessage,
  TicketEventCustomerMessage,
  TicketEventStatusChange,
  TicketEventType,
} from "../../apiModels";
interface Props {
  ticket: Ticket;
}

export default function Chat({ ticket }: Props) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <Box className="chat">
        {ticket.events.map((message: TicketEvent) => {
          if (message.eventType === TicketEventType.CUSTOMER_MESSAGE) {
            return (
              <SingleMessageCustomer
                key={message.id}
                message={message as TicketEventCustomerMessage}
              />
            );
          }
          if (message.eventType === TicketEventType.AGENT_MESSAGE) {
            return (
              <SingleMessageAgent
                key={message.id}
                message={message as TicketEventAgentMessage}
              />
            );
          }
          if (message.eventType === TicketEventType.STATUS_CHANGE) {
            return (
              <Stack marginTop={23}>
                <StatusChatMessage
                  message={message as TicketEventStatusChange}
                />
              </Stack>
            );
          }
        })}
      </Box>
    </Stack>
  );
}
