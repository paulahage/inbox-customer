import "./ChatInput.scss";
import { useState } from "react";
import { agentId } from "../../services/ApiServices";
import { Button, Stack, TextField } from "@mui/material";
import { Ticket, TicketStatus } from "../../apiModels";
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
  };

  const enterComment = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendAgentMessage();
    }
  };

  if (
    ticket.status === TicketStatus.RESOLVED ||
    ticket.status === TicketStatus.UNASSIGNED ||
    ticket.agent?.id !== agentId
  ) {
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
          disabled
          id="outlined-controlled"
          value={agentMessage}
          color="secondary"
          multiline
          rows={3}
          placeholder="Start typing here..."
          InputLabelProps={{ shrink: true }}
        />
        <Button
          disabled
          variant="contained"
          size="small"
          color="secondary"
          sx={{ borderRadius: 5, fontSize: 9, textTransform: "none" }}
        >
          Send
        </Button>
      </Stack>
    );
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
        multiline
        id="outlined-controlled"
        value={agentMessage}
        color="secondary"
        rows={3}
        placeholder="Start typing here..."
        InputLabelProps={{ shrink: true }}
        onChange={(e) => getAgentMessage(e.target.value)}
        onKeyDown={enterComment}
      />
      <Button
        variant="contained"
        size="small"
        color="secondary"
        sx={{ borderRadius: 5, fontSize: 9, textTransform: "none" }}
        onClick={handleSendAgentMessage}
      >
        Send
      </Button>
    </Stack>
  );
}
