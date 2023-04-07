import "./TicketList.scss";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  receiveTicketList,
  receiveTicketChat,
  ticketActions,
} from "../../redux/reducers/ticket";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";

import Customer from "../customer/Customer";
import CustomerName from "../customer/CustomerName";
import TicketStatus from "./TicketStatus";
import { getNewTickets, getTickets } from "../../services/TichetServices";
import { Ticket } from "../../apiModels";
import * as Models from "../../apiModels";

export function TicketList() {
  // The `state` arg is correctly typed as `RootState` already
  const tickets = useAppSelector((state) => state.ticket.tickets);
  const dispatch = useAppDispatch();

  let stopRerender = false;
  useEffect(() => {
    if (stopRerender) {
      return;
    } else {
      stopRerender = true;
    }

    getTickets((ticketList) => dispatch(receiveTicketList(ticketList)));
    getNewTickets((ticket) => dispatch(ticketActions.receiveNewTicket(ticket)));
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
          onClick={() => dispatch(receiveTicketChat(ticket))}
        >
          <Stack sx={{ width: "100%" }}>
            <TicketStatus ticket={ticket} />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <ListItemAvatar>
                <Customer customer={ticket.customer} />
              </ListItemAvatar>
              <ListItemText
                className="ticketList__text"
                secondary={
                  <Typography
                    variant="subtitle2"
                    noWrap
                    fontSize={13}
                    marginTop={1}
                  >
                    {ticket.lastMessage}
                  </Typography>
                }
              >
                <CustomerName customer={ticket.customer} />
              </ListItemText>
              {ticket.status === Models.TicketStatus.UNASSIGNED && (
                <IconButton>
                  <img
                    src="../icons/Assing_Button.svg"
                    alt="assign new ticket"
                    className="ticketList__assing-btn"
                  />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
