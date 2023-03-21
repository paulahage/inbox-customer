import "./ChatNavbar.scss"
import Customer from "../customer/Customer";
import CustomerName from "../customer/CustomerName";
import { Stack, Button } from "@mui/material";

export default function ChatNavbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Customer />
        <CustomerName />
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button variant="contained" className="button">
          Re-Assign
        </Button>
        <Button variant="contained" className="button">
          Resolve
        </Button>
      </Stack>
    </Stack>
  );
}
