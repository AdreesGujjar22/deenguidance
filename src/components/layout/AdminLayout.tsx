"use client";
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const drawerWidth = 240;
const topbarHeight = 64;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <CssBaseline />
      
      {/* Fixed Topbar */}
      <Box 
        sx={{ 
          position: "fixed", 
          width: "100%", 
          height: topbarHeight, 
          zIndex: 1100 
        }}
      >
        <Topbar drawerWidth={drawerWidth} onToggleDrawer={handleDrawerToggle} />
      </Box>

      {/* Sidebar */}
      <Box
        sx={{
          width: drawerWidth,
          position: "fixed",
          height: "100vh",
          top: topbarHeight,
          zIndex: 1000,
          display: { xs: "none", md: "block" }
        }}
      >
        <Sidebar drawerWidth={drawerWidth} mobileOpen={mobileOpen} onToggleDrawer={handleDrawerToggle} />
      </Box>

      {/* Scrollable Main Content */}
      <Grid
        container
        sx={{
          flexGrow: 1,
          height: "100vh",
          ml: { xs: 0, md: `${drawerWidth}px` },
          mt: `${topbarHeight}px`,
          overflow: "hidden",
        }}
      >
        <Grid item xs={12} sx={{ height: "100%", overflow: "auto", p: 3 , pb :10}}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
