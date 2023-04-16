import "./ChatInput.scss";
import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { Ticket } from "../../apiModels";
import { sendAgentMessage } from "../../services/ApiServices";

interface Props {
  ticket: Ticket;
}

export default function ChatInput({ ticket }: Props) {
  const [agentMessage, setAgentMessage] = useState("");

  const getAgentMessage = (message: string) => {
    setAgentMessage(message);
  };

  const handleSendAgentMessage = () => {
    sendAgentMessage(ticket.id, agentMessage);
    setAgentMessage("");
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      component="form"
      noValidate
      sx={{ width: "100%" }}
      spacing={2}
      marginTop={5}
    >
      <TextField
        fullWidth
        id="outlined-controlled"
        value={agentMessage}
        color="secondary"
        label="label"
        multiline
        rows={3}
        placeholder="Start typing here..."
        InputLabelProps={{ shrink: true }}
        onChange={(e)=>getAgentMessage(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        color="secondary"
        sx={{ borderRadius: 5, fontSize: 9, textTransform: "none" }}
        onClick={handleSendAgentMessage}
      >
        Enabled
      </Button>
    </Stack>
  );
}
