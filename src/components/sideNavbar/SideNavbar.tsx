import { Badge, Box, IconButton, Stack } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
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
  const assignedTickets = useAppSelector((state) => state.ticket.assignedTicketByAgentCount);
  const unassignedTickets = useAppSelector((state) => state.ticket.unassignedTicketsCount);
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
            badgeContent={unassignedTickets.length}
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
            badgeContent={assignedTickets.length}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div className="sideNavbar__agent-btn">
              <AssignmentIndIcon fontSize="inherit" />
            </div>
          </Badge>
        </IconButton>
        <IconButton onClick={handleResolvedTicketsByAgent}>
          <div className="sideNavbar__agent-btn">
            <HowToRegRoundedIcon fontSize="inherit" />
          </div>
        </IconButton>
        <IconButton onClick={handleAllResolvedTickets}>
          <div className="sideNavbar__agent-btn">
            <PlaylistAddCheckRoundedIcon fontSize="inherit" />
          </div>
        </IconButton>
      </Stack>
    </Box>
  );
}
