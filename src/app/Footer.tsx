'use client'
import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from 'next/image';
import Logo from "../../public/images/logo.png";
import MainButton from "../components/MainButton";
import MainLink from "../components/MainLink";
import NextLink from 'next/link';
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
        variant="h2"
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
      <Link component={NextLink} href='/contactus' passHref style={{textDecoration: "none"}} >
        <MainButton content="Join Community" />
      </Link>
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
              backgroundColor: "white",
              display: "inline-block",
              borderRadius: "50%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Information */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, fontSize: "20px", mb: 2, letterSpacing: "3px" }}
          >
            INFORMATION
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "14px", fontFamily: "Raleway", }}>
            Our mission is to share the teachings of Islam and its timeless wisdom with people from all backgrounds.
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, fontSize: "20px", mb: 2, letterSpacing: "3px" }}
          >
            CONTACT INFO
          </Typography>
          <MainLink icon={<PhoneIcon sx={{ mr: 1 }} />} linkContent="PK: +92 334 1436311" linkHref="tel:+923341436311" />
          <MainLink icon={<EmailIcon sx={{ mr: 1 }} />} linkContent="deenguidanceinstitute@gmail.com" linkHref="mailto:deenguidanceinstitute@gmail.com" />
          <MainLink icon={<LocationOnIcon sx={{ mr: 1 }} />} linkContent="Lahore, Pakistan" linkHref="https://maps.app.goo.gl/thCtQKjCkAmTUjZM9" />
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
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
          <Link
            href="https://www.facebook.com/share/1E3ja5EfXS/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white", transition: "transform 0.3s, color 0.3s",
              "&:hover": {
                color: "rgba(200,200,200,1)",
              },
            }}
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com/deenguidance.institute/profilecard/?igsh=bG9sM2wya2h5ajM1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white", transition: "transform 0.3s, color 0.3s",
              "&:hover": {
                color: "rgba(200,200,200,1)",
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/deen-guidance-institute-06ba35343"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white", transition: "transform 0.3s, color 0.3s",
              "&:hover": {
                color: "rgba(200,200,200,1)",
              },
            }}
          >
            <LinkedInIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;