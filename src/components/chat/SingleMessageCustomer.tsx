import "./SingleMessageCustomer.scss";
import { Box, Avatar, Stack, Typography } from "@mui/material";
import { TicketEventCustomerMessage } from "../../ApiModels";
import { URL_BASE } from "../../utils";
import { parseDateToDisplayDate } from "../../services/DateService";
interface Props {
  message: TicketEventCustomerMessage;
}

export default function SingleMessageCustomer({ message }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      marginTop={"15px"}
    >
      <Avatar
        src={URL_BASE + message.customer.socialMediaAccount.picture}
        alt="customer photo"
        sx={{ width: 35, height: 35 }}
      />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <Box className="singleMessage-customer">{message.text}</Box>
        <Typography variant="caption" sx={{ color: "#918f8f" }}>
          {parseDateToDisplayDate(message.date)}
        </Typography>
      </Stack>
    </Stack>
  );
}
