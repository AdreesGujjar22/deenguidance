
import React from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#004B39",
        color: "white",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 10 },
        textAlign: "center",
      }}
    >
      {/* Top Section */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "18px", md: "24px" },
          mb: 3,
        }}
      >
        Become a Part of Our Community
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "24px", md: "36px" },
          mb: 4,
        }}
      >
        INSPIRED? JOIN US RIGHT NOW!
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#DB9E30",
          color: "black",
          px: 4,
          py: 1.5,
          fontSize: "16px",
          fontWeight: 700,
          borderRadius: "30px",
          "&:hover": {
            backgroundColor: "#b88627",
          },
        }}
      >
        Join Community
      </Button>

      {/* Middle Section */}
      <Grid
        container
        spacing={4}
        sx={{
          mt: { xs: 6, md: 10 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Logo and Tagline */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#DB9E30",
              display: "inline-block",
              p: 2,
              borderRadius: "50%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                color: "white",
                fontSize: "24px",
              }}
            >
              DeenGuidance
            </Typography>
          </Box>
        </Grid>

        {/* Information */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: "20px", mb: 2 }}
          >
            INFORMATION
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            WE invite people of the whole world to accept Islam . So, any atheists , humanists m and those who believe.
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: "20px", mb: 2 }}
          >
            CONTACT INFO
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              PK: +92 334 1436311
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              deenguidanceinstitue@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Lahore , Pakistan
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box
        sx={{
          mt: 6,
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          pt: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: "14px", mb: 2 }}>
          DeenGuodance © Copyright 2024. All Rights Reserved.
        </Typography>
        <Box>
          <IconButton sx={{ color: "white" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;