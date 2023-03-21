import React from 'react'
import "./ChatBox.scss";
import { Typography, Box, Stack } from "@mui/material";
import ChatNavbar from './ChatNavbar';



export default function ChatBox() {
  return (
    <Box className="chatBox">
      <ChatNavbar/>
    </Box>
  );
}
