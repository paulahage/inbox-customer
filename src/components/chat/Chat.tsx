import "./Chat.scss";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { URL_GET_TICKETS } from "../../utils";
import { Box, Stack } from "@mui/material";
import SingleMessageCustomer from "./SingleMessageCustomer";
import SingleMessageAgent from "./SingleMessageAgent";
import StatusChatMessage from "../chat/StatusChatMessage";

import {
  Ticket,
  TicketEvents,
  TicketEvent,
  TicketEventAgentMessage,
  TicketEventCustomerMessage,
  TicketEventStatusChange,
  TicketEventType,
} from "../../apiModels";
import { useEffect } from "react";
import { receiveTicketEvents } from "../../redux/reducers/TicketReducer";
interface Props {
  ticket: Ticket;
}

export default function Chat({ ticket }: Props) {
  const ticketEvents = useAppSelector((state) => state.ticket.ticketEvents);
  const dispatch = useAppDispatch();
  const url = `${URL_GET_TICKETS}/${ticket.id}/events`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((events: TicketEvents) => dispatch(receiveTicketEvents(events)));
    //eslint-disable-next-line
  }, [ticket.id]);

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <Box className="chat">
        {ticketEvents?.events.map((message: TicketEvent) => {
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
              <Stack marginTop={10} marginBottom={5}>
                <StatusChatMessage
                  message={message as TicketEventStatusChange}
                />
              </Stack>
            );
          }
          return undefined;
        })}
      </Box>
    </Stack>
  );
}
