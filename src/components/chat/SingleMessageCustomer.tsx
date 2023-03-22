import "./SingleMessageCustomer.scss"
import { Box, Avatar, Stack, Typography } from "@mui/material";

export default function SingleMessageCustomer() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      marginTop={"15px"}
    >
      <Avatar
        src="https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"
        alt="customer photo"
        sx={{ width: 35, height: 35 }}
      />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <Box className="singleMessage-customer">test</Box>
        <Typography variant="caption" sx={{ color: "#918f8f" }}>
          15 m
        </Typography>
      </Stack>
    </Stack>
  );
}
