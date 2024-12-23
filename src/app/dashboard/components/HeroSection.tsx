"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import PersonImage from "../../../../public/images/HeroSectionImage.png";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#004B39",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        padding: { xs: "20px", md: "40px" },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundImage: "url('/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 0,
          animation: "fadeIn 2s ease-in-out",
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 0.3 },
          },
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          maxWidth: "600px",
        }}
      >
        {/* Headline */}
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            fontSize: { xs: "28px", md: "48px" },
            fontWeight: "bold",
            lineHeight: { xs: "1.2", md: "1.5" },
            animation: "slideIn 1.5s ease-out",
            "@keyframes slideIn": {
              from: { transform: "translateY(-50px)", opacity: 0 },
              to: { transform: "translateY(0)", opacity: 1 },
            },
          }}
        >
          Call upon Allah with faith and trust in His response.
        </Typography>

        {/* Subheadline */}
        <Typography
          sx={{
            mb: 4,
            maxWidth: "600px",
            fontSize: { xs: "16px", md: "20px" },
            lineHeight: { xs: "1.5", md: "2" },
            animation: "fadeIn 2s ease-in-out 0.5s",
            animationFillMode: "forwards",
          }}
        >
          This is Deen Guidance Institute to invite people to Islam.
        </Typography>

        {/* Call to Action */}
        <Button
          sx={{
            px: { xs: 4, md: 6 },
            py: { xs: 1.5, md: 2 },
            borderRadius: "30px",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
            backgroundColor: "gold",
            color: "black",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s, background-color 0.3s",
            "&:hover": {
              backgroundColor: "#e5c100",
              transform: "scale(1.05)",
            },
          }}
        >
          Listen to the Holy Quran
        </Button>
      </Container>

      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "80%", sm: "60%", md: "40%" },
          maxWidth: "400px",
          marginTop: { xs: "20px", md: "0" },
          alignSelf: { xs: "center", md: "flex-end" },
          border: "6px solid gold",
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
