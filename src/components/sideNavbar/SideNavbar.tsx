import { Box, IconButton } from "@mui/material";
import React from "react";

import "./SideNavbar.scss";

export function SideNavbar() {
  return <Box className="sideNavbar">
    <IconButton>
      <img src="../icons/box_icon.svg" alt="my box button" className="sideNavbar__btn" />
    </IconButton>
  </Box>;
}
