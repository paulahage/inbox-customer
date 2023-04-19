import "./TicketList.scss";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { assignTicket } from "../../services/ApiServices";
import * as Models from "../../apiModels";
import { receiveTicketChat } from "../../redux/reducers/TicketReducer";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
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

export function TicketList() {
  const tickets = useAppSelector((state) => state.ticket.tickets);
  const dispatch = useAppDispatch();

  const handleAssignTicket = ( ticketId: string ) => {
    assignTicket(ticketId);
  };

  return (
    <List className="ticketList" disablePadding>
      {tickets.map((ticket: Models.Ticket) => (
        <ListItem
          key={ticket.id}
          className={`${ticket.isNewTicket ? "ticketList__ticket-new-ticket" :"ticketList__ticket"}`}
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
                <IconButton
                  onClick={() => handleAssignTicket(ticket.id)}
                  sx={{  padding: "0px" }}
                >
                  <div className="ticketList__assing-btn">
                    <PersonAddAltRoundedIcon fontSize="inherit" />
                  </div>
                </IconButton>
              )}
            </Stack>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
