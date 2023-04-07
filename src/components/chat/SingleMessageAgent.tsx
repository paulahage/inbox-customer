import "./SingleMessageAgent.scss";
import { Box, Avatar, Stack, Typography } from "@mui/material";
import { TicketEventAgentMessage } from "../../ApiModels";
import { URL_BASE } from "../../utils";
import { parseDateToDisplayDate } from "../../services/DateServices";
interface Props {
  message: TicketEventAgentMessage;
}

export default function SingleMessageAgent({ message }: Props) {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-end"
      spacing={1}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        marginTop={"15px"}
        spacing={2}
      >
        <Box className="singleMessage-agent">{message.text}</Box>
        <Avatar
          src={URL_BASE + message.agent.picture}
          alt="customer photo"
          sx={{ width: 35, height: 35 }}
        />
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <Typography
          variant="caption"
          sx={{ color: "#918f8f", marginRight: "5px" }}
        >
          {parseDateToDisplayDate(message.date)}
        </Typography>
        <Typography variant="caption" sx={{ color: "#918f8f" }}>
          - Agent: {message.agent.name}
        </Typography>
      </Stack>
    </Stack>
  );
}
