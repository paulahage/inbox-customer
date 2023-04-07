import { Typography } from "@mui/material";
import { parseDateToDisplayDate } from "../../services/DateServices";
interface Props {
  dateAndTime: string;
}

export default function TicketListTime({ dateAndTime }: Props) {
  return (
    <Typography variant="caption" sx={{ color: "#918f8f" }}>
      {parseDateToDisplayDate(dateAndTime)}
    </Typography>
  );
}
