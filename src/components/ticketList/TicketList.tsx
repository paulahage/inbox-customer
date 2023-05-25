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
  const listView = useAppSelector((state) => state.ticket.listView);
  const dispatch = useAppDispatch();

  const handleAssignTicket = ( ticketId: string ) => {
    assignTicket(ticketId);
  };

  if (!tickets.length && listView === "unassignedList") {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        gap={1}
        sx={{ width: "345px" }}
      >
        <img src="../../loader/loader.svg" alt="loader" />
        <Typography variant="subtitle1" sx={{ color: "#918f8f" }}>
          waiting for new tickets
        </Typography>
      </Stack>
    );
  }

  if (!tickets.length && listView === "assignedAgentList") {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "345px" }}
      >
        <Typography variant="subtitle1" align="center" sx={{ color: "#918f8f", padding: "10px" }}>
          You don't have any assigned tickets
        </Typography>
      </Stack>
    );
  }

  if (!tickets.length && listView === "resolvedAgentList") {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "345px" }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "#918f8f", padding: "20px" }}
        >
          You don't have any resolved tickets
        </Typography>
      </Stack>
    );
  }

  if (!tickets.length && listView === "resolvedAllList") {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "345px" }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "#918f8f", padding: "20px" }}
        >
          Doesn't have any resolved tickets yet
        </Typography>
      </Stack>
    );
  }
    return (
      <List className="ticketList" disablePadding>
        {tickets.map((ticket: Models.Ticket) => (
          <ListItem
            key={ticket.id}
            className={`${
              ticket.isNewTicket
                ? "ticketList__ticket-new-ticket"
                : "ticketList__ticket"
            }`}
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
                    sx={{ margin: "5px" }}
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
