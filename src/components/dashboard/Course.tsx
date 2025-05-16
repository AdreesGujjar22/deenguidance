"use client";

import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import CourseCard from "../common/CourseCard";
import CourseEnrollmentForm from "../forms/CourseEnrollmentForm";
import CourseData from "@/data/Course";
import HeroBanner from "../common/HeroBanner";

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

  return (
    <Box>
      {/* Title Section */}
      <HeroBanner title="Our Courses" bgImage="/images/course/bg-course.jpg" />

      <Box  sx={{ py: 10, px: { xs: 2, sm: 5 }, textAlign: "center" }}>
        {/* Course Grid */}
      <Grid container spacing={4} justifyContent="center">
        {CourseData.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CourseCard {...course} onEnrollClick={handleEnrollClick} />
          </Grid>
        ))}
      </Grid>
      </Box>

      {/* Enrollment Form Modal */}
      <CourseEnrollmentForm
        open={isEnrollmentOpen}
        onClose={handleEnrollmentClose}
        courseTitle={selectedCourse}
      />
    </Box>
  );
}
