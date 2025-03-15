"use client";

import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import CourseCard from "../common/CourseCard";
import CourseEnrollmentForm from "../forms/CourseEnrollmentForm";
import CourseData from "@/data/Course";

export default function CourseSection() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsEnrollmentOpen(true);
  };

  const handleEnrollmentClose = () => {
    setIsEnrollmentOpen(false);
    setSelectedCourse("");
  };

  // const courseOptions = CourseData.map((course) => ({
  //   id: course.courseTitle.toLowerCase().replace(/\s+/g, "-"),
  //   name: course.courseTitle,
  // }));

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
            <CourseCard {...course} onEnrollClick={handleEnrollClick} />
          </Grid>
        ))}
      </Grid>

      {/* Enrollment Form Modal */}
      <CourseEnrollmentForm
        open={isEnrollmentOpen}
        onClose={handleEnrollmentClose}
        courseTitle={selectedCourse}
      />
    </Box>
  );
}
