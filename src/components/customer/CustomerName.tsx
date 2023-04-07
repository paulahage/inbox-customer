import { Typography, Stack } from "@mui/material";
import * as Models from "../../ApiModels";
interface Props {
  customer: Models.Customer;
}

export default function CustomerName({ customer }: Props) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="subtitle2" noWrap fontWeight={"bold"} fontSize={13}>
        {customer.name}
      </Typography>
      <Typography variant="subtitle2" noWrap fontWeight={"light"} fontSize={12}>
        {customer.socialMediaAccount.id}
      </Typography>
    </Stack>
  );
}
