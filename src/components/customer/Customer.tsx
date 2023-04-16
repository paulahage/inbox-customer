import { Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as Models from "../../apiModels";
import { URL_BASE } from "../../utils";

interface Props {
  customer: Models.Customer;
}

export default function Customer({ customer }: Props) {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <SocialBadge
          alt="social media"
          src={`../social_media_logos/${customer.socialMediaAccount.socialMedia}.png`}
        />
      }
    >
      <Avatar
        src={URL_BASE + customer.socialMediaAccount.picture}
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
