import {Typography,  Stack,} from "@mui/material";

export default function CustomerName() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="subtitle2" fontWeight={"bold"} fontSize={13}>
        name
      </Typography>
      <Typography variant="subtitle2" fontWeight={"light"} fontSize={13}>
        @username
      </Typography>
    </Stack>
  );
}
