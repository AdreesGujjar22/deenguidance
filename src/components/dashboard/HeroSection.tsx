"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import MainButton from "../common/MainButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      aria-label="Hero section"
      sx={{
        background: 'linear-gradient(135deg, #004d40 0%, #00695c 100%)',
        color: "white",
        minHeight: { xs: "85vh", md: "92vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        overflow: "hidden",
        paddingY: { xs: "100px", md: "100px" },
        gap: { xs: "30px", md: "50px" },
        px: { xs: 2, sm: 4, md: 6 },
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
          maxWidth: { xs: "92%", md: "56%" },
          gap: 3,
        }}
      >
        {/* Headline */}
        <Typography
          variant="h1"
          component="h1"
          className="animate-fadeInUp"
          sx={{
            fontSize: { xs: "32px", sm: "42px", md: "58px" },
            fontWeight: 800,
            fontStyle: "italic",
            letterSpacing: "1px",
            lineHeight: 1.15,
            mb: 2,
            textShadow: '2px 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          Call upon Allah and trust in His response.
        </Typography>

        {/* Subheadline */}
        <Typography
          variant="body1"
          className="animate-fadeIn"
          sx={{
            fontFamily: "var(--font-inter)",
            fontSize: { xs: "17px", md: "19px" },
            lineHeight: 1.8,
            color: "rgba(255, 255, 255, 0.92)",
            maxWidth: "620px",
            fontWeight: 400,
          }}
        >
          Our mission is to share the teachings of Islam and its timeless wisdom
          with people from all backgrounds.
        </Typography>

        {/* Button */}
        <MainButton
          content="Listen to the Holy Quran"
          icon={<PlayCircleIcon sx={{ mr: 1, fontSize: "30px" }} />}
          videoUrl="https://www.youtube.com/embed/GeSVXVIJtQc"
        />
      </Container>

      {/* Image Section */}
      <Box
        className="animate-scaleIn"
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "80%", md: "45%", lg: "40%" },
          maxWidth: { xs: "400px", md: "500px" },
          aspectRatio: "1/1", // Maintains square aspect ratio
          borderRadius: { xs: "24px", md: "32px" },
          overflow: "hidden",
          boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.2), 0 10px 10px -10px rgba(0, 0, 0, 0.1)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "transform",
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 15px 15px -15px rgba(0, 0, 0, 0.2)",
          },
          // Subtle border effect
          '&::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "inherit",
            zIndex: 1,
            pointerEvents: "none"
          }
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            '&:hover img': {
              transform: 'scale(1.05)'
            }
          }}
        >
          <Image
            src="/images/HeroSectionImage.jpg"
            alt="Person reading Quran"
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 35vw, 25vw"
            style={{
              objectFit: "cover",
              transition: "transform 0.5s ease-out",
              willChange: "transform"
            }}
            priority
            quality={85}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
