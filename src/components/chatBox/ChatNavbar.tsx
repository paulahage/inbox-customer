import "./ChatNavbar.scss";
import Customer from "../customer/Customer";
import CustomerName from "../customer/CustomerName";
import { Stack, Button, Typography } from "@mui/material";
import { Ticket } from "../../apiModels";
interface Props {
  ticket: Ticket;
}

export default function ChatNavbar({ ticket }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ width: "100%", height: "58px" }}
      spacing={2}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        paddingLeft={"15px"}
      >
        <Customer customer={ticket.customer} />
        <Stack direction="column" spacing={1} alignItems="flex-start">
          <CustomerName customer={ticket.customer} />
          <Stack direction="row" alignItems="flex-end" spacing={0.3}>
            <Typography
              variant="subtitle2"
              fontWeight={"light"}
              fontSize={13}
              className="chatNavbar__typing"
            >
              typing
            </Typography>
            <img src="../icons/typing.gif" alt="customer typing" className="chatNavbar__loading_typing"/>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        paddingRight={"15px"}
      >
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          sx={{ borderRadius: 5, fontSize: 12, textTransform: "none" }}
          className="chatNavbar__re-assign-btn"
        >
          Re-Assign
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          sx={{ borderRadius: 5, fontSize: 12, textTransform: "none" }}
        >
          Resolve
        </Button>
      </Stack>
    </Stack>
  );
}
