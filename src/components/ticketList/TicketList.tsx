import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { receiveTicketList } from "../../redux/reducers/ticket";
import { SocialMedia, Ticket, TicketStatus } from "../../apiModels";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

import Customer from "../customer/Customer";
import "./TicketList.scss";
import CustomerName from "../customer/CustomerName";
import TicketListTime from "../timeTracking/TicketListTime";
import { URL_GET_TICKETS } from "../../utils";

export function TicketList() {
  // The `state` arg is correctly typed as `RootState` already
  const tickets = useAppSelector((state) => state.ticket.tickets);
  const dispatch = useAppDispatch();

  const getStatusColor = (ticketStatus: TicketStatus) => {
    if (ticketStatus === TicketStatus.WAITING_FOR_CUSTOMER) {
      return "warning"
    }
    return "error"
  }

  const getStatusText = (ticketStatus: TicketStatus) => {
    if (ticketStatus === TicketStatus.WAITING_FOR_CUSTOMER) {
      return "waiting";
    }
    if (ticketStatus === TicketStatus.ASSIGNED) {
      return "assigned"
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
        >
          <Stack sx={{ width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ width: "100%" }}
            >
              <Chip
                color={getStatusColor(ticket.status)}
                label={getStatusText(ticket.status)}
                size="small"
                sx={{ width: 80, height: 20, fontSize: 12 }}
              />
              <TicketListTime />
            </Stack>
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
                secondary={<Typography variant="subtitle2">message</Typography>}
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
