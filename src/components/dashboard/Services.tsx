'use client';

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ServiceCard from "../common/ServiceCard";
import BookIcon from "@mui/icons-material/Book";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import TranslateIcon from "@mui/icons-material/Translate";

const services = [
  {
    title: "Quran Learning",
    description: "Learn to recite and understand the Quran with personalized guidance tailored to all levels of learners.",
    icon: <BookIcon sx={{ color: "white", fontSize: { xs: 32, md: 36 } }} />,
  },
  {
    title: "Tafseer Learning",
    description: "Explore the deeper meanings and interpretations of the Quran to gain profound insights into its teachings.",
    icon: <MenuBookIcon sx={{ color: "white", fontSize: { xs: 32, md: 36 } }} />,
    featured: true, // Middle card featured
  },
  {
    title: "Hadith Learning",
    description: "Delve into the sayings and traditions of the Prophet (PBUH) to enrich your understanding of Islamic practices.",
    icon: <ImportContactsIcon sx={{ color: "white", fontSize: { xs: 32, md: 36 } }} />,
  },
  {
    title: "Arabic Learning",
    description: "Master the Arabic language to connect with Islamic texts and enhance your understanding of classical literature.",
    icon: <TranslateIcon sx={{ color: "white", fontSize: { xs: 32, md: 36 } }} />,
  },
];

const ServicesBanner: React.FC = () => {
  return (
    <Box
      component="section"
      aria-label="Our Services"
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        backgroundColor: "#fafafa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "text.secondary",
              fontWeight: 600,
              fontSize: { xs: "0.875rem", md: "1rem" },
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 1,
            }}
          >
            What We Offer
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              fontFamily: "var(--font-cinzel-decorative)",
              color: "primary.main",
              letterSpacing: "0.5px",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
            }}
          >
            Our Services
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              backgroundColor: "secondary.main",
              mx: "auto",
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Services Grid */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {services.map((service, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={6}
              lg={3}
              sx={{
                display: "flex",
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
                featured={service.featured}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesBanner;
