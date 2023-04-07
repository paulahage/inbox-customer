import "./ChatBox.scss";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";

import ChatNavbar from "./ChatNavbar";
import Chat from "../chat/Chat";
import ChatInput from "./ChatInput";

export default function ChatBox() {
  const selectedTicket = useAppSelector((state) => state.ticket.ticket);
  const tickets = useAppSelector((state) => state.ticket.tickets);
  let ticket;

  if (selectedTicket) {
    ticket = selectedTicket;
  } else if (tickets[0]) {
    ticket = tickets[0];
  }

  return ticket ? (
    <Box className="chatBox">
      <ChatNavbar ticket={ticket} />
      <Chat ticket={ticket} />
      <ChatInput />
    </Box>
  ) : (
    <Box className="chatBox__loader">
      <Typography variant="subtitle1" sx={{ color: "#918f8f" }}>
        No messages yet
      </Typography>
    </Box>
  );
}
