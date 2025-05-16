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
}

const CourseEnrollmentForm: React.FC<CourseEnrollmentFormProps> = ({
  open,
  onClose,
  courseTitle,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Admin',
      course_title: courseTitle,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success('Enrollment request sent successfully!');
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send enrollment request. Please try again.');
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
        fontFamily: 'var(--font-cinzel)',
        fontWeight: 700,
        color: 'primary.main',
      }}>
        Course Enrollment
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: 'grey.500',
            '&:hover': {
              color: 'grey.700',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            mb: 3,
            color: 'text.secondary',
            fontFamily: 'var(--font-inter)',
          }}
        >
          Enrolling in: {courseTitle}
        </Typography>

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
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
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
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
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
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            variant="outlined"
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
            InputLabelProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
            InputProps={{
              sx: { fontFamily: 'var(--font-inter)' }
            }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <MainButton
          content="Cancel"
          onClick={onClose}
          variant="outlined"
          textColor="black"
          bgColor="white"
        />
        <MainButton
          content="Submit"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        />
      </DialogActions>
    </Dialog>
  );
};

export default CourseEnrollmentForm;
