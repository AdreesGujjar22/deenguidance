"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Button, Avatar, Grid, Card, CardContent, Divider } from "@mui/material";
import HeroImage from "../../../public/images/HeroSectionImage.png";
import { StaticImageData } from 'next/image';

interface CourseCardProps {
  image: StaticImageData;
  tutorName: string;
  tutorRole: string;
  courseTitle: string;
  price: string;
  isFree: boolean;
  duration: string;
  enrollCount: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  tutorName,
  tutorRole,
  courseTitle,
  price,
  isFree,
  duration,
  enrollCount,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "24px",
        boxShadow: 5,
        maxWidth: { xs: "100%", sm: 350 }, 
        textAlign: "center",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)", boxShadow: 10 },
        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
      }}
    >
      {/* Image Section */}
      <Box sx={{ position: "relative", width: "100%", height: 200 }}>
        <Image src={image} alt={courseTitle} layout="fill" objectFit="cover" />
      </Box>

      <CardContent sx={{ p: 3 }}>
        {/* Tutor Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            backgroundColor: "#004d40",
            color: "#fff",
            borderRadius: "50px",
            px: 3,
            py: 1,
            justifyContent: "center",
            position: "relative",
            top: -40,
            boxShadow: 3,
          }}
        >
          <Avatar alt={tutorName} src="/tutor.jpg" sx={{ width: 50, height: 50 }} />
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body2" fontWeight="bold">
              {tutorName}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              {tutorRole}
            </Typography>
          </Box>
        </Box>

        {/* Course Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontFamily: "Raleway, sans-serif", mt: -2, mb: 1 }}
        >
          {courseTitle}
        </Typography>

        {/* Price */}
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ fontSize: "1.2rem", color: isFree ? "green" : "black" }}
        >
          {isFree ? "Free Course" : price}
        </Typography>

        {/* Details */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
            px: 2,
            py: 1,
            backgroundColor: "#ffeb3b",
            borderRadius: "12px",
            boxShadow: 2,
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            {duration}
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ borderColor: "#000" }} />
          <Typography variant="body2" fontWeight="bold">
            {enrollCount}
          </Typography>
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.2,
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#1b5e20",
            borderRadius: "50px",
            "&:hover": { backgroundColor: "#004d40" },
          }}
        >
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};

const CourseCardGrid: React.FC = () => {
  const courseData: CourseCardProps[] = [
    {
      image: HeroImage,
      tutorName: "Habib Al Noor",
      tutorRole: "Arabic Scholar",
      courseTitle: "Quran Intermediate Course",
      price: "$16.00",
      isFree: true,
      duration: "10 Weeks",
      enrollCount: "50 Enrolled",
    },
    {
      image: HeroImage,
      tutorName: "Habib Al Noor",
      tutorRole: "Arabic Scholar",
      courseTitle: "Advanced Tajweed Course",
      price: "$20.00",
      isFree: false,
      duration: "12 Weeks",
      enrollCount: "75 Enrolled",
    },
  ];

  return (
    <Box sx={{ py: 10, px: { xs: 2, sm: 5 }, textAlign: "center" }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontFamily: "CinzelDecorative, serif",
          color: "#1b5e20",
          mb: 4,
          textTransform: "uppercase",
        }}
      >
        Our Courses
      </Typography>

      {/* Course Grid */}
      <Grid container spacing={4} justifyContent="center">
        {courseData.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseCardGrid;
