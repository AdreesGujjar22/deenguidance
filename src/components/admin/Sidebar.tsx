"use client"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";

export default function Sidebar({
  drawerWidth,
  mobileOpen,
  onToggleDrawer,
}: {
  drawerWidth: number;
  mobileOpen: boolean;
  onToggleDrawer: () => void;
}) {
  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6">Admin Panel</Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/admin">
            <ListItemText primary="Posts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onToggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
