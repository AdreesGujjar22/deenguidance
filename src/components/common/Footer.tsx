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
import Logo from "../../../public/images/web-logo.png";
import MainButton from "./MainButton";
import MainLink from "./MainLink";
import NextLink from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      role="contentinfo"
      aria-label="Site footer"
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 10 },
        textAlign: "center",
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #DB9E30 0%, #FFB84D 100%)',
        },
      }}
    >
      {/* Top Section */}
      <Typography
        variant="h2"
        className="animate-fadeInUp"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "20px", md: "26px" },
          mb: 2,
        }}
      >
        Become a Part of Our Community
      </Typography>
      <Typography
        variant="h3"
        className="animate-fadeInUp"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "26px", md: "38px" },
          mb: 5,
          letterSpacing: '1px',
        }}
      >
        INSPIRED? JOIN US RIGHT NOW!
      </Typography>
      <Box className="animate-scaleIn">
        <Link component={NextLink} href='/contactus' passHref style={{textDecoration: "none"}} aria-label="Join our community">
          <MainButton content="Join Community" />
        </Link>
      </Box>
      
      {/* Middle Section */}
      <Grid
        container
        spacing={4}
        sx={{
          mt: { xs: 8, md: 12 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Logo and Tagline */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 2,
            }}
          >
            <Image
              src={Logo}
              alt="Deen Guidance Logo"
              width={100}
              height={100}
            />
          </Box>
        </Grid>

        {/* Information */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ 
              fontWeight: 700, 
              fontSize: "18px", 
              mb: 2, 
              letterSpacing: "2px",
              fontFamily: 'var(--font-cinzel-decorative)',
            }}
          >
            INFORMATION
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: "15px",
              lineHeight: 1.8,
              opacity: 0.95,
            }}
          >
            Our mission is to share the teachings of Islam and its timeless wisdom with people from all backgrounds.
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ 
              fontWeight: 700, 
              fontSize: "18px", 
              mb: 2, 
              letterSpacing: "2px",
              fontFamily: 'var(--font-cinzel-decorative)',
            }}
          >
            CONTACT INFO
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <MainLink icon={<PhoneIcon sx={{ mr: 1 }} />} linkContent="PK: +92 334 1436311" linkHref="tel:+923341436311" />
            <MainLink icon={<EmailIcon sx={{ mr: 1 }} />} linkContent="deenguidanceinstitute@gmail.com" linkHref="mailto:deenguidanceinstitute@gmail.com" />
            <MainLink icon={<LocationOnIcon sx={{ mr: 1 }} />} linkContent="Lahore, Pakistan" linkHref="https://maps.app.goo.gl/thCtQKjCkAmTUjZM9" />
          </Box>
        </Grid>
      </Grid>
      
      {/* Bottom Section */}
      <Box
        sx={{
          mt: 8,
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          pt: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: "14px", mb: 3, opacity: 0.9 }}>
          DeenGuidance © Copyright {new Date().getFullYear()}. All Rights Reserved.
        </Typography>
        <Box 
          sx={{ 
            display: "flex", 
            gap: 3, 
            justifyContent: "center", 
            alignItems: "center",
          }}
          role="list"
          aria-label="Social media links"
        >
          <Link
            href="https://www.facebook.com/share/1E3ja5EfXS/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            sx={{
              color: "white", 
              transition: "all 0.3s ease",
              "&:hover": {
                color: "secondary.main",
                transform: 'translateY(-3px)',
              },
            }}
          >
            <FacebookIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.instagram.com/deenguidance.institute/profilecard/?igsh=bG9sM2wya2h5ajM1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
            sx={{
              color: "white", 
              transition: "all 0.3s ease",
              "&:hover": {
                color: "secondary.main",
                transform: 'translateY(-3px)',
              },
            }}
          >
            <InstagramIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/deen-guidance-institute-06ba35343"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn page"
            sx={{
              color: "white", 
              transition: "all 0.3s ease",
              "&:hover": {
                color: "secondary.main",
                transform: 'translateY(-3px)',
              },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;