import "./SingleMessageAgent.scss";
import { Box, Avatar, Stack, Typography } from "@mui/material";

export default function SingleMessageAgent() {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-end"
      spacing={1}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        marginTop={"15px"}
        spacing={2}
      >
        <Box className="singleMessage-agent">Response</Box>
        <Avatar
          src="https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"
          alt="customer photo"
          sx={{ width: 35, height: 35 }}
        />
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <Typography variant="caption" sx={{ color: "#918f8f", marginRight:"5px" }}>
          15 m
        </Typography>
        <Typography variant="caption" sx={{ color: "#918f8f" }}>
          - Agent: Mirella
        </Typography>
      </Stack>
    </Stack>
  );
}
