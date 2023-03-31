import "./TicketList.scss";
import { URL_GET_TICKETS } from "../../utils";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  receiveTicketList,
  receiveTicketChat,
} from "../../redux/reducers/ticket";
import { Ticket } from "../../apiModels";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";

import Customer from "../customer/Customer";
import CustomerName from "../customer/CustomerName";
import TicketStatus from "./TicketStatus";

export function TicketList() {
  // The `state` arg is correctly typed as `RootState` already
  const tickets = useAppSelector((state) => state.ticket.tickets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(URL_GET_TICKETS)
      .then((response) => response.json())
      .then((ticketList: Ticket[]) => dispatch(receiveTicketList(ticketList)));
    //eslint-disable-next-line
  }, []);

  return (
    <List className="ticketList" disablePadding>
      {tickets.map((ticket: Ticket) => (
        <ListItem
          key={ticket.id}
          className="ticketList__ticket"
          divider
          alignItems="flex-start"
          onClick={()=> dispatch(receiveTicketChat(ticket))}
        >
          <Stack sx={{ width: "100%" }}>
            <TicketStatus ticket={ticket} />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ width: "100%" }}
            >
              <ListItemAvatar>
                <Customer customer={ticket.customer} />
              </ListItemAvatar>
              <ListItemText
                className="ticketList__text"
                secondary={
                  <Typography variant="subtitle2" noWrap fontSize={13}>
                    {ticket.lastMessage}
                  </Typography>
                }
              >
                <CustomerName customer={ticket.customer} />
              </ListItemText>
            </Stack>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
