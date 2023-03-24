import * as Models from "../../apiModels";
import { Chip, Stack } from "@mui/material";
import TicketListTime from "../timeTracking/TicketListTime";

interface Props {
  status: Models.TicketStatus
}

export default function TicketStatus({status}: Props) {
  const getStatusColor = (ticketStatus: Models.TicketStatus) => {
    if (ticketStatus === Models.TicketStatus.WAITING_FOR_CUSTOMER) {
      return "warning";
    }
    return "error";
  };

  const getStatusText = (ticketStatus: Models.TicketStatus) => {
    if (ticketStatus === Models.TicketStatus.WAITING_FOR_CUSTOMER) {
      return "waiting";
    }
    if (ticketStatus === Models.TicketStatus.ASSIGNED) {
      return "assigned";
    }
    if (ticketStatus === Models.TicketStatus.CUSTOMER_WAITING) {
      return "to answer";
    }
    if (ticketStatus === Models.TicketStatus.RESOLVED) {
      return "resolved";
    }
    if (ticketStatus === Models.TicketStatus.UNASSIGNED) {
      return "unassigned";
    }
  };


  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <Chip
        color={getStatusColor(status)}
        label={getStatusText(status)}
        size="small"
        sx={{ width: 70, height: 20, fontSize: 12 }}
      />
      <TicketListTime />
    </Stack>
  );
}
