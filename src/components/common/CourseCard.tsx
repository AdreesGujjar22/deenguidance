
import React from "react";
import Image from "next/image";
import { Box, Typography, Avatar, Card, CardContent, Divider } from "@mui/material";
import { CourseCardProps } from "../../types/Course";
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
  }) => {
    return (
      <Card
        sx={{
          borderRadius: "24px",
          boxShadow: 5,
          maxWidth: { xs: "100%", sm: 350 }, 
          textAlign: "center",
          transition: "transform 0.3s ease-in-out",
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
            fontWeight="bold"
            sx={{ fontFamily: "CinzelDecorative, sans-serif", mt: -2, mb: 1 }}
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
          <Box sx={{marginTop:2}}>
          <MainButton content="Enroll Now" endIcon={<ArrowForward />} />
          </Box>
        </CardContent>
      </Card>
    );
  };

export default CourseCard;