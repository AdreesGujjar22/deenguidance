"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import PersonImage from "../../../../public/images/HeroSectionImage.png";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#004B39',
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          backgroundImage: "url('/background.svg')", // Replace with your background SVG
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        {/* Headline */}
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            fontSize: { xs: "24px", md: "48px" },
            fontWeight: "bold",
            lineHeight: { xs: "1.2", md: "1.5" },
          }}
        >
          PRAY TO ALLAH AND BE CONFIDENT OF A RESPONSE.
        </Typography>

        {/* Subheadline */}
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: "600px",
            fontSize: { xs: "14px", md: "20px" },
            lineHeight: { xs: "1.5", md: "2" },
          }}
        >
          It is a community center for all. The Center is committed to preserving an Islamic.
        </Typography>

        {/* Call to Action */}
        <Button
          sx={{
            px: { xs: 3, md: 5 },
            py: { xs: 1, md: 2 },
            borderRadius: "30px",
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: "bold",
            backgroundColor: "gold",
            color: "black",
            "&:hover": {
              backgroundColor: "#e5c100",
            },
          }}
        >
          Listen Holy Quran
        </Button>
      </Container>

      {/* Image Section */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "10%", md: "5%" },
          right: { xs: "10%", md: "15%" },
          width: { xs: "40%", md: "25%" },
          border: "6px solid gold",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
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
