import {
  TicketEventStatusChange,
  TicketEventStatusChangeType,
} from "../../apiModels";
import { getCompleteDateAndTime } from "../../services/DateServices";
import "./StatusChatMessage.scss";
import { Button, Stack, Typography } from "@mui/material";

interface Props {
  message: TicketEventStatusChange;
}

export default function StatusChatMessage({ message }: Props) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{ width: "100%" }}
      marginTop={2}
      spacing={2}
      className="statusMessage"
    >
      <Typography variant="caption">
        Conversation “{message.changeType}” by {message.agent.name} in{" "}
        {getCompleteDateAndTime(message.date)}
      </Typography>
      {message.changeType === TicketEventStatusChangeType.RESOLVED && (
        <Button
          variant="contained"
          size="small"
          color="secondary"
          sx={{ borderRadius: 5, fontSize: 9, textTransform: "none" }}
        >
          Re-Open
        </Button>
      )}
    </Stack>
  );
}
