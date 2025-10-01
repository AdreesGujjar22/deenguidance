"use client";

import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CourseCard from "../common/CourseCard";
import CourseData from "@/data/Course";
import HeroBanner from "../common/HeroBanner";

export default function CourseSection() {

  return (
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Title Section */}
      <HeroBanner title="Our Courses" bgImage="/images/course/bg-course.jpg" />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              fontFamily: 'var(--font-cinzel-decorative)',
              color: 'primary.main',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Explore Our Courses
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Deepen your understanding of Islam with our comprehensive courses taught by renowned scholars.
          </Typography>
        </Box>

        {/* Course Grid */}
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
        >
          {CourseData.map((course, index) => (
            <Grid 
              item 
              key={course.id} 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <CourseCard {...course} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
