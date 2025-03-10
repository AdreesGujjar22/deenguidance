"use client";

import React from "react";
import { Box, Typography,Grid } from "@mui/material";
import CourseCard from "../common/CourseCard";
import CourseData from "../../data/Course";

const CourseCardGrid: React.FC = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, sm: 5 }, textAlign: "center" }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontFamily: "CinzelDecorative, serif",
          mb: 4,
          textTransform: "uppercase",
        }}
      >
        Our Courses
      </Typography>

      {/* Course Grid */}
      <Grid container spacing={4} justifyContent="center">
        {CourseData.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseCardGrid;
