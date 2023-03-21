import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { receiveTicket } from "../../redux/reducers/ticket";
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

export function TicketList() {
  // The `state` arg is correctly typed as `RootState` already
  const tickets = useAppSelector((state) => state.ticket.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      receiveTicket({
        customer: {
          id: "",
          name: "",
          socialMediaAccount: {
            id: "",
            picture: "",
            socialMedia: SocialMedia.TWITTER,
          },
        },
        date: "",
        events: [],
        id: "werewre",
        status: TicketStatus.ASSIGNED,
      })
    );
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
                color="warning"
                label={ticket.status}
                size="small"
                sx={{ width: 80, height: 20, fontSize: 12 }}
              />
              <TicketListTime/>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ width: "100%" }}
            >
              <ListItemAvatar>
                <Customer />
              </ListItemAvatar>
              <ListItemText
                className="ticketList__text"
                secondary={<Typography variant="subtitle2">message</Typography>}
              >
                <CustomerName/>
              </ListItemText>
            </Stack>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}

