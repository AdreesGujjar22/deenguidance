'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import MainButton from '../common/MainButton';

interface CourseEnrollmentFormProps {
  open: boolean;
  onClose: () => void;
  courseTitle: string;
  courseId?: string;
}

const CourseEnrollmentForm: React.FC<CourseEnrollmentFormProps> = ({
  open,
  onClose,
  courseTitle,
  courseId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_name: 'Admin',
      course_title: courseTitle,
      course_id: courseId || 'N/A',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message || 'No additional message provided.',
      reply_to: formData.email,
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString(),
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not properly configured');
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        toast.success(`Successfully enrolled in ${courseTitle}!`);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending enrollment email:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send enrollment request';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: '16px',
          background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontFamily: 'var(--font-cinzel-decorative)',
        fontWeight: 700,
        color: 'primary.main',
        fontSize: '1.5rem',
        pb: 2,
      }}>
        📚 Course Enrollment
        <IconButton
          aria-label="Close enrollment form"
          onClick={onClose}
          sx={{
            color: 'grey.500',
            transition: 'all 0.2s ease',
            '&:hover': {
              color: 'error.main',
              transform: 'rotate(90deg)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 2 }}>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            p: 2,
            borderRadius: 2,
            mb: 3,
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body2"
            sx={{ 
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
              opacity: 0.9,
              mb: 0.5,
            }}
          >
            Enrolling in:
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              fontFamily: 'var(--font-cinzel-decorative)',
              fontWeight: 700,
            }}
          >
            {courseTitle}
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
          }}
        >
          <TextField
            required
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
            disabled={loading}
            placeholder="Enter your full name"
            InputLabelProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
            InputProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
          />

          <TextField
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            disabled={loading}
            placeholder="your.email@example.com"
            InputLabelProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
            InputProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
          />

          <TextField
            required
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            variant="outlined"
            disabled={loading}
            placeholder="+1 (555) 000-0000"
            InputLabelProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
            InputProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
          />

          <TextField
            fullWidth
            label="Message (Optional)"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            variant="outlined"
            disabled={loading}
            placeholder="Tell us about your learning goals..."
            InputLabelProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
            InputProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, gap: 2, justifyContent: 'flex-end' }}>
        <MainButton
          content="Cancel"
          onClick={onClose}
          variant="outlined"
          textColor="black"
          bgColor="white"
          disabled={loading}
          aria-label="Cancel enrollment"
          sx={{
            borderColor: 'grey.400',
            '&:hover': {
              borderColor: 'grey.600',
              backgroundColor: 'grey.50',
            },
          }}
        />
        <MainButton
          content={loading ? 'Submitting...' : 'Submit Enrollment'}
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={loading}
          aria-label="Submit enrollment request"
          sx={{
            minWidth: '160px',
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default CourseEnrollmentForm;
