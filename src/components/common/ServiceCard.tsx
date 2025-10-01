'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BookIcon from "@mui/icons-material/MenuBook";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8 }}
      style={{ height: '100%' }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          backgroundColor: "white",
          color: "text.primary",
          position: "relative",
          height: '100%',
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          border: '1px solid rgba(0,0,0,0.06)',
          overflow: 'hidden',
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
            position: "relative",
            boxShadow: "0 12px 40px rgba(0, 77, 64, 0.25)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            border: 'none',
            "& .MuiTypography-body2": {
              color: "rgba(255,255,255,0.95)"
            }
          },
          "&:hover h3": {
            color: "white",
          },
          "&:hover > .MuiBox-root": {
            boxShadow: "0 8px 24px rgba(255,255,255,0.2)",
            backgroundColor: "rgba(255,255,255,0.2)"
          },
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: "primary.main",
            transition: "height 0.3s ease",
          },
          "&:hover::before": {
            height: 6,
            backgroundColor: "secondary.main",
          },
        }}
      >
        {/* Icon Section */}
        <Box
          component={motion.div}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "50%",
            width: { xs: 70, md: 80 },
            height: { xs: 70, md: 80 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            boxShadow: "0 8px 24px rgba(0, 77, 64, 0.2)",
            "&:hover": {
              boxShadow: "0 8px 24px rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.2)"
            },
          }}
        >
          {icon || <BookIcon sx={{
            color: "white",
            fontSize: { xs: 32, md: 36 }
          }}
          />}
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mb: 2,
            fontFamily: 'var(--font-cinzel-decorative)',
            fontSize: { xs: "1.125rem", md: "1.25rem" },
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          component="h6"
          sx={{
            color: "text.secondary",
            lineHeight: 1.7,
            fontFamily: "var(--font-inter)",
            fontSize: { xs: "0.9375rem", md: "1rem" },
          }}
        >
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default ServiceCard;
