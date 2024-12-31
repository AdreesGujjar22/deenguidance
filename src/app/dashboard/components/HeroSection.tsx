"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import PersonImage from "../../../../public/images/HeroSectionImage.png";
import MainButton from "../../../components/MainButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        overflow: "hidden",
        padding: { xs: "20px", sm: "40px" },
        gap: { xs: "20px", md: "40px" },
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/bgImg.png')", // Adjust the path as needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      {/* Text Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          maxWidth: { xs: "90%", md: "50%" },
          gap: 3,
        }}
      >
        {/* Headline */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "54px" },
            fontWeight: 800,
            fontStyle: "italic",
            letterSpacing: "2px",
            lineHeight: 1.2,
            animation: "slideIn 1.5s ease-out",
            "@keyframes slideIn": {
              from: { transform: "translateY(-50px)", opacity: 0 },
              to: { transform: "translateY(0)", opacity: 1 },
            },
          }}
        >
          Call upon Allah and trust in His response.
        </Typography>

        {/* Subheadline */}
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: 1.8,
            color: "lightgrey",
            maxWidth: "600px",
          }}
        >
          Our mission is to share the teachings of Islam and its timeless wisdom
          with people from all backgrounds.
        </Typography>

        {/* Button */}
        <MainButton
          content="Listen to the Holy Quran"
          icon={<PlayCircleIcon sx={{ mr: 1, fontSize: "30px" }} />}
        />
      </Container>

      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "90%", sm: "60%", md: "40%" },
          maxWidth: "400px",
          border: "6px solid",
          borderColor: "secondary.main",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          animation: "zoomIn 1.5s ease",
          "@keyframes zoomIn": {
            from: { transform: "scale(0.8)", opacity: 0 },
            to: { transform: "scale(1)", opacity: 1 },
          },
        }}
      >
        <Image
          src={PersonImage}
          alt="Person reading Quran"
          layout="responsive"
          width={300}
          height={300}
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
