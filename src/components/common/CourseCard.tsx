'use client';

import React from "react";
import Image from "next/image";
import { Box, Typography, Avatar, Card, CardContent, Divider } from "@mui/material";
import { CourseCardProps } from "@/types/Course";
import MainButton from "./MainButton";
import { ArrowForward } from '@mui/icons-material';

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  tutorName,
  tutorRole,
  courseTitle,
  price,
  isFree,
  duration,
  enrollCount,
  onEnrollClick,
}) => {
  const handleEnrollClick = () => {
    if (onEnrollClick) {
      onEnrollClick(courseTitle);
    }
  };

  return (
    <Card
      className="animate-fadeIn"
      sx={{
        borderRadius: "24px",
        boxShadow: 5,
        maxWidth: { xs: "100%", sm: 350 }, 
        textAlign: "center",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8,
        },
        height : "500px"
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
            gap: 1,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            borderRadius: "50px",
            position: "relative",
            top: -40,
            boxShadow: 3,
          }}
        >
          <Avatar alt={tutorName} src="/tutor.jpg" sx={{ width: 50, height: 50 }} />
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {tutorName}
            </Typography>
            <Typography sx={{ opacity: 0.8 , fontSize : "13px" }}>
              {tutorRole}
            </Typography>
          </Box>
        </Box>

        {/* Course Title */}
        <Typography
          variant="h6"
          sx={{
            mt: -2,
            mb: 1,
          }}
        >
          {courseTitle}
        </Typography>

        {/* Price */}
        <Typography
          variant="subtitle1"
          sx={{ 
            fontWeight: "bold",
            color: isFree ? "success.main" : "text.primary",
          }}
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
            backgroundColor: "secondary.main",
            color : "white",
            borderRadius: "12px",
            boxShadow: 2,
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            {duration}
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ borderColor: "secondary.dark" }} />
          <Typography variant="body2" fontWeight="bold">
            {enrollCount}
          </Typography>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <MainButton 
            content="Enroll Now" 
            endIcon={<ArrowForward />} 
            onClick={handleEnrollClick}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;