import "./ChatNavbar.scss";
import Customer from "../customer/Customer";
import CustomerName from "../customer/CustomerName";
import { Stack, Button } from "@mui/material";
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
      sx={{ width: "100%" }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        paddingLeft={"15px"}
      >
        <Customer customer={ticket.customer} />
        <CustomerName customer={ticket.customer} />
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
