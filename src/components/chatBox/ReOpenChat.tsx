import { Button, Stack, Typography} from "@mui/material";

export default function ReOpenChat() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{ width: "100%" }}
      marginTop={"6px"}
      spacing={1}
    >
      <Typography variant="caption">
        Conversation closed as “Resolved” by Mirella in 18-02-2001 15:51
      </Typography>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        sx={{ borderRadius: 5, fontSize: 9, textTransform: "none" }}
      >
        Re-Open
      </Button>
    </Stack>
  );
}
