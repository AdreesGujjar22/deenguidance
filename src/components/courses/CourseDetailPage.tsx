'use client';

import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Avatar, Chip, Divider, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  AccessTime,
  People,
  CheckCircle,
  School,
  Star,
  ArrowForward,
} from '@mui/icons-material';
import { CourseCardProps } from '@/types/Course';
import MainButton from '../common/MainButton';
import CourseEnrollmentForm from '../forms/CourseEnrollmentForm';

interface CourseDetailPageProps {
  course: CourseCardProps;
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course }) => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
  };

  const handleEnrollmentClose = () => {
    setIsEnrollmentOpen(false);
  };

  const features = [
    'Comprehensive curriculum designed by experts',
    'Interactive learning materials',
    'Certificate upon completion',
    'Lifetime access to course materials',
    'Community support and discussion',
    'Regular assessments and feedback',
  ];

  return (
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 300, md: 400 },
          background: 'linear-gradient(135deg, #004d40 0%, #00695c 100%)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url(${course.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontFamily: 'var(--font-cinzel-decorative)',
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
              }}
            >
              {course.courseTitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                mb: 3,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Master the fundamentals with expert guidance
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip
                icon={<AccessTime />}
                label={course.duration}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <Chip
                icon={<People />}
                label={course.enrollCount}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <Chip
                icon={<Star />}
                label="4.8 Rating"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {/* Left Column - Course Details */}
          <Grid item xs={12} md={8}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Course Image */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  mb: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: { xs: 250, md: 400 } }}>
                  <Image
                    src={course.image}
                    alt={course.courseTitle}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </Box>
              </Paper>

              {/* About Course */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  mb: 4,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    fontFamily: 'var(--font-cinzel-decorative)',
                    color: 'primary.main',
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  About This Course
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: '1rem',
                  }}
                >
                  This comprehensive {course.courseTitle} course is designed to provide you with a deep
                  understanding of Islamic teachings and principles. Led by {course.tutorName}, a
                  renowned {course.tutorRole}, you&apos;ll explore fundamental concepts through engaging
                  lectures, interactive discussions, and practical applications.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  Whether you&quot;re a beginner or looking to deepen your knowledge, this {course.duration}{' '}
                  program offers structured learning that fits your schedule. Join {course.enrollCount}{' '}
                  students who have already embarked on this transformative educational journey.
                </Typography>
              </Paper>

              {/* What You'll Learn */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    fontFamily: 'var(--font-cinzel-decorative)',
                    color: 'primary.main',
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  What You&quot;ll Learn
                </Typography>
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.5,
                        }}
                      >
                        <CheckCircle
                          sx={{
                            color: 'secondary.main',
                            fontSize: 24,
                            flexShrink: 0,
                            mt: 0.5,
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
          </Grid>

          {/* Right Column - Enrollment Card */}
          <Grid item xs={12} md={4}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              sx={{
                position: { md: 'sticky' },
                top: { md: 100 },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  border: '2px solid',
                  borderColor: 'primary.main',
                }}
              >
                {/* Instructor Info */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    Your Instructor
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src="/tutor.jpg"
                      alt={course.tutorName}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: '1.125rem',
                          mb: 0.5,
                        }}
                      >
                        {course.tutorName}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                        }}
                      >
                        {course.tutorRole}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Course Stats */}
                <Box sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTime sx={{ color: 'text.secondary', fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        Duration
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight={600}>
                      {course.duration}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <People sx={{ color: 'text.secondary', fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        Students
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight={600}>
                      {course.enrollCount}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <School sx={{ color: 'text.secondary', fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        Level
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight={600}>
                      All Levels
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Price */}
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: course.isFree ? 'success.main' : 'primary.main',
                      fontSize: '2.5rem',
                    }}
                  >
                    {course.isFree ? 'Free' : course.price}
                  </Typography>
                  {!course.isFree && (
                    <Typography variant="body2" color="text.secondary">
                      One-time payment
                    </Typography>
                  )}
                </Box>

                {/* Enroll Button */}
                <MainButton
                  content="Enroll Now"
                  endIcon={<ArrowForward />}
                  onClick={handleEnrollClick}
                  sx={{
                    width: '100%',
                    py: 1.5,
                    fontSize: '1.125rem',
                  }}
                />

                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    textAlign: 'center',
                    mt: 2,
                    color: 'text.secondary',
                  }}
                >
                  30-day money-back guarantee
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Enrollment Form Modal */}
      <CourseEnrollmentForm
        open={isEnrollmentOpen}
        onClose={handleEnrollmentClose}
        courseTitle={course.courseTitle}
        courseId={course.id}
      />
    </Box>
  );
};

export default CourseDetailPage;
