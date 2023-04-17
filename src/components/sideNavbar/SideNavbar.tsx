import { Badge, Box, IconButton, Stack } from "@mui/material";
import "./SideNavbar.scss";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  receiveUnassignedTicketList,
  receiveUnassignedTicketListByAgent,
  receiveDoneTicketListByAgent,
  receiveAllResolvedTicketList,
} from "../../redux/reducers/TicketReducer";
import {
  getUnassignedTickets,
  getUnassignedTicketsByAgent,
  getDoneTicketsByAgent,
  getAllResolvedTickets,
} from "../../services/ApiServices";

export function SideNavbar() {
  //const tickets = useAppSelector((state) => state.ticket.tickets);
  const dispatch = useAppDispatch();

  const handleUnassignedTickets = () => getUnassignedTickets((ticketList) => dispatch(receiveUnassignedTicketList(ticketList)));
  const handleUnassignedTicketsByAgent = () => getUnassignedTicketsByAgent((unassignedTicketListByAgent) => dispatch(receiveUnassignedTicketListByAgent(unassignedTicketListByAgent)));
  const handleDoneTicketsByAgent = () => getDoneTicketsByAgent((doneTicketListByAgent) => dispatch(receiveDoneTicketListByAgent(doneTicketListByAgent)));
  const handleAllResolvedTickets = () => getAllResolvedTickets((allResolvedTicketList) => dispatch(receiveAllResolvedTicketList(allResolvedTicketList)));

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
        <IconButton onClick={handleUnassignedTicketsByAgent}>
          <Badge
            color="error"
            badgeContent={2}
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
        <IconButton onClick={handleDoneTicketsByAgent}>
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
