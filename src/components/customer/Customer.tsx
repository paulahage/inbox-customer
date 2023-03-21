import { Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Customer() {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={<SocialBadge alt="social media" src="" />}
    >
      <Avatar
        src="https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"
        alt="customer photo"
        sx={{ width: 45, height: 45 }}
      />
    </Badge>
  );
}

const SocialBadge = styled(Avatar)(() => ({
  width: 18,
  height: 18,
}));