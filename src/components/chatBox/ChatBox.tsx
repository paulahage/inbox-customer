import "./ChatBox.scss";
import { Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { receiveNewTicketEvent} from "../../redux/reducers/TicketReducer";
import ChatNavbar from "./ChatNavbar";
import Chat from "../chat/Chat";
import ChatInput from "./ChatInput";
import { useEffect } from "react";
import { listenChatRoom } from "../../services/TicketsServices";
import { TicketEvent } from "../../apiModels";

export default function ChatBox() {
  const ticket = useAppSelector((state) => state.ticket.ticket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ticket) {
      listenChatRoom(ticket.id, (event: TicketEvent) => {
        dispatch(receiveNewTicketEvent(event));
      });
    }
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
        No messages yet
      </Typography>
    </Box>
  );
}
