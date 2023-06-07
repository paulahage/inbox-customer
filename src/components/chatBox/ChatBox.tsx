import "./ChatBox.scss";
import { Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { receiveNewTicketEvent } from "../../redux/reducers/TicketReducer";
import ChatNavbar from "./ChatNavbar";
import Chat from "../chat/Chat";
import ChatInput from "./ChatInput";
import { useEffect } from "react";
import { listenChatRoom } from "../../services/TicketsServices";
import { TicketEvent } from "../../apiModels";
import { stopListeningChatRoom } from "../../services/TicketsServices";

export default function ChatBox() {
  const ticket = useAppSelector((state) => state.ticket.ticket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ticket) {
      const callback = (event: TicketEvent) => {
        dispatch(receiveNewTicketEvent(event));
      };
      listenChatRoom(ticket.id, callback);

      return () => {
        stopListeningChatRoom(ticket.id, callback);
      };
    }
    //eslint-disable-next-line
  }, [ticket]);

  return ticket ? (
    <Box className="chatBox">
      <ChatNavbar ticket={ticket} />
      <Chat ticket={ticket} />
      <ChatInput ticket={ticket} />
    </Box>
  ) : (
    <Box className="chatBox__loader">
      <Typography variant="subtitle1" sx={{ color: "#918f8f" }}>
        Choose a ticket from the list
      </Typography>
    </Box>
  );
}
