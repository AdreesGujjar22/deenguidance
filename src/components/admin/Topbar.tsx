"use client"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Topbar({
  drawerWidth,
  onToggleDrawer,
}: {
  drawerWidth: number;
  onToggleDrawer: () => void;
}) {
  return (
    <AppBar
      position="fixed"
      sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onToggleDrawer}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Admin Panel</Typography>
      </Toolbar>
    </AppBar>
  );
}
