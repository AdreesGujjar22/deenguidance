import React from "react";
import { Box, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/MenuBook";
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 3,
        borderRadius: 2,
        backgroundColor: "#fdfdfd",
        position: "relative",
      }}
    >
      {/* Custom Decorative Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      {/* Icon Section */}
      <Box
        sx={{
          backgroundColor: "#d4af37",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          zIndex: 1,
        }}
      >
        {icon || <BookIcon sx={{ color: "#fff", fontSize: 32 }} />}
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#000",
          mb: 1,
          zIndex: 1,
          fontFamily: 'CinzelDecorative',
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: "#6c6c6c",
          zIndex: 1,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
