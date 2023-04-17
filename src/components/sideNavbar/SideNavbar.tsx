import { Badge, Box, IconButton, Stack } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import "./SideNavbar.scss";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getNewTickets, getTicketUpdate } from "../../services/TicketsServices";
import {
  receiveUnassignedTicketList,
  receiveAssignedTicketListByAgent,
  receiveResolvedTicketListByAgent,
  receiveAllResolvedTicketList,
  receiveListView,
  receiveNewTicket,
  receiveTicketStatusUpdate,
} from "../../redux/reducers/TicketReducer";
import {
  getUnassignedTickets,
  getAssignedTicketsByAgent,
  getResolvedTicketsByAgent,
  getAllResolvedTickets,
} from "../../services/ApiServices";
import { useEffect } from "react";

export function SideNavbar() {
  //const tickets = useAppSelector((state) => state.ticket.tickets);
  const dispatch = useAppDispatch();

  const handleUnassignedTickets = () => {
    dispatch(receiveListView("unassignedList"));
    getUnassignedTickets((ticketList) =>
      dispatch(receiveUnassignedTicketList(ticketList))
    );
  };
  const handleAssignedTicketsByAgent = () => {
    dispatch(receiveListView("assignedAgentList"));
    getAssignedTicketsByAgent((assignedTicketListByAgent) =>
      dispatch(receiveAssignedTicketListByAgent(assignedTicketListByAgent))
    );
  }
  const handleResolvedTicketsByAgent = () => {
    dispatch(receiveListView("resolvedAgentList"));
    getResolvedTicketsByAgent((resolvedTicketListByAgent) =>
      dispatch(receiveResolvedTicketListByAgent(resolvedTicketListByAgent))
    );
  }
  const handleAllResolvedTickets = () => {
    dispatch(receiveListView("resolvedAllList"));
    getAllResolvedTickets((allResolvedTicketList) =>
      dispatch(receiveAllResolvedTicketList(allResolvedTicketList))
    );
  }

  let stopRerender = false;
  useEffect(() => {
    if (stopRerender) {
      return;
    } else {
      stopRerender = true;
    }
    console.log("useEffect ticket list");

    getNewTickets((ticket) => dispatch(receiveNewTicket(ticket)));
    getTicketUpdate((ticket) => dispatch(receiveTicketStatusUpdate(ticket)));
    //eslint-disable-next-line
  }, []);

  return (
    <Box className="sideNavbar">
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <IconButton onClick={handleUnassignedTickets}>
          <Badge
            color="error"
            badgeContent={3}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <img
              src="../icons/box_icon.svg"
              alt="my box button"
              className="sideNavbar__btn"
            />
          </Badge>
        </IconButton>
        <IconButton onClick={handleAssignedTicketsByAgent}>
          <Badge
            color="error"
            badgeContent={2}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div>
            <AssignmentIndIcon/>
            </div>
            <img
              src="../icons/box_icon.svg"
              alt="my box button"
              className="sideNavbar__btn"
            />
          </Badge>
        </IconButton>
        <IconButton onClick={handleResolvedTicketsByAgent}>
          <img
            src="../icons/box_icon.svg"
            alt="my box button"
            className="sideNavbar__btn"
          />
        </IconButton>
        <IconButton onClick={handleAllResolvedTickets}>
          <img
            src="../icons/box_icon.svg"
            alt="my box button"
            className="sideNavbar__btn"
          />
        </IconButton>
      </Stack>
    </Box>
  );
}
