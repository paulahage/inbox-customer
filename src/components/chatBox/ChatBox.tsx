import React from "react";
import "./ChatBox.scss";
import { Box, Stack } from "@mui/material";

import ChatNavbar from "./ChatNavbar";
import Chat from "../chat/Chat";
import ChatInput from "./ChatInput";
import ReOpenChat from "./ReOpenChat";

export default function ChatBox() {
  return (
    <Box className="chatBox">
      <ChatNavbar />
      <Chat />
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ width: "100%", height: "32%" }}
      >
        <ReOpenChat />
        <ChatInput />
      </Stack>
    </Box>
  );
}
