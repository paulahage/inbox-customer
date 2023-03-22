import "./Chat.scss"

import { Box } from "@mui/material";
import SingleMessageCustomer from "./SingleMessageCustomer";
import SingleMessageAgent from "./SingleMessageAgent";

export default function Chat() {
  return (
    <Box className="chat">
      <SingleMessageCustomer />
      <SingleMessageAgent />
      <SingleMessageCustomer />
      <SingleMessageAgent />
      <SingleMessageCustomer />
      <SingleMessageAgent />
    </Box>
  );
}
