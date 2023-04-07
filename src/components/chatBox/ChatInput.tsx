import "./ChatInput.scss";
import { Button, Stack, TextField } from "@mui/material";

export default function ChatInput() {

  return (
    <Stack
      direction="row"
      alignItems="center"
      component="form"
      noValidate
      sx={{ width: "100%" }}
      spacing={2}
      marginTop={5}
    >
      <TextField
        fullWidth
        id="outlined-controlled"
        color="secondary"
        label="label"
        multiline
        rows={3}
        placeholder="Start typing here..."
        InputLabelProps={{ shrink: true }}
      />
      <Button
        variant="contained"
        size="small"
        color="secondary"
        sx={{ borderRadius: 5, fontSize: 9, textTransform: "none" }}
      >
        Enabled
      </Button>
    </Stack>
  );
}
