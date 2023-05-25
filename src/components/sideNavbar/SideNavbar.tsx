import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getNewTickets, getTicketUpdate } from "../../services/TicketsServices";
import "./SideNavbar.scss";
import { Badge, Box, IconButton, Stack } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import AllInboxRoundedIcon from "@mui/icons-material/AllInboxRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
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

export function SideNavbar() {
  const assignedTickets = useAppSelector(
    (state) => state.ticket.assignedTicketByAgentCount
  );
  const unassignedTickets = useAppSelector(
    (state) => state.ticket.unassignedTicketsCount
  );
  const dispatch = useAppDispatch();

  const [isBtnActive, setIsBtnActive] = useState("");

  const handleUnassignedTickets = (typeBtn: string) => {
    setIsBtnActive(typeBtn);
    dispatch(receiveListView("unassignedList"));
    getUnassignedTickets((ticketList) =>
      dispatch(receiveUnassignedTicketList(ticketList))
    );
  };

  const handleAssignedTicketsByAgent = (typeBtn: string) => {
    setIsBtnActive(typeBtn);
    dispatch(receiveListView("assignedAgentList"));
    getAssignedTicketsByAgent((assignedTicketListByAgent) =>
      dispatch(receiveAssignedTicketListByAgent(assignedTicketListByAgent))
    );
  };

  const handleResolvedTicketsByAgent = (typeBtn: string) => {
    setIsBtnActive(typeBtn);
    dispatch(receiveListView("resolvedAgentList"));
    getResolvedTicketsByAgent((resolvedTicketListByAgent) =>
      dispatch(receiveResolvedTicketListByAgent(resolvedTicketListByAgent))
    );
  };

  const handleAllResolvedTickets = (typeBtn: string) => {
    setIsBtnActive(typeBtn);
    dispatch(receiveListView("resolvedAllList"));
    getAllResolvedTickets((allResolvedTicketList) =>
      dispatch(receiveAllResolvedTicketList(allResolvedTicketList))
    );
  };

  let stopRerender = false;

  useEffect(() => {
    if (stopRerender) {
      return;
    } else {
      stopRerender = true;
    }

    getNewTickets((ticket) => dispatch(receiveNewTicket(ticket)));
    getTicketUpdate((ticket) => dispatch(receiveTicketStatusUpdate(ticket)));
    handleUnassignedTickets("unassignedBtn");
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
        <IconButton onClick={() => handleUnassignedTickets("unassignedBtn")}>
          <Badge
            color="error"
            badgeContent={unassignedTickets.length}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div
              className={
                isBtnActive === "unassignedBtn"
                  ? "sideNavbar__btn-active"
                  : "sideNavbar__btn"
              }
            >
              <AllInboxRoundedIcon fontSize="inherit" />
            </div>
          </Badge>
        </IconButton>
        <IconButton onClick={() => handleAssignedTicketsByAgent("assignedBtn")}>
          <Badge
            color="error"
            badgeContent={assignedTickets.length}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div
              className={
                isBtnActive === "assignedBtn"
                  ? "sideNavbar__btn-active"
                  : "sideNavbar__btn"
              }
            >
              <AssignmentIndIcon fontSize="inherit" />
            </div>
          </Badge>
        </IconButton>
        <IconButton onClick={() => handleResolvedTicketsByAgent("waitingBtn")}>
          <div
            className={
              isBtnActive === "waitingBtn"
                ? "sideNavbar__btn-active"
                : "sideNavbar__btn"
            }
          >
            <HowToRegRoundedIcon fontSize="inherit" />
          </div>
        </IconButton>
        <IconButton onClick={() => handleAllResolvedTickets("resolvedBtn")}>
          <div
            className={
              isBtnActive === "resolvedBtn"
                ? "sideNavbar__btn-active"
                : "sideNavbar__btn"
            }
          >
            <PlaylistAddCheckRoundedIcon fontSize="inherit" />
          </div>
        </IconButton>
      </Stack>
    </Box>
  );
}
