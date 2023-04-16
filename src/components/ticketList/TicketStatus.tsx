import * as Models from "../../apiModels";
import { Chip, Stack, ThemeProvider } from "@mui/material";
import TicketListTime from "../timeTracking/TicketListTime";
import { getStatusText, getStatusColor, theme } from "../../services/UxServices";
interface Props {
  ticket: Models.Ticket;
}

export default function TicketStatus({ ticket }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <ThemeProvider theme={theme}>
        <Chip
          color={getStatusColor(ticket.status)}
          label={getStatusText(ticket.status)}
          size="small"
          sx={{ width: 70, height: 20, fontSize: 12 }}
        />
      </ThemeProvider>
      <TicketListTime dateAndTime={ticket.date} />
    </Stack>
  );
}
