'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fafafa',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: 150, md: 200 },
          height: { xs: 150, md: 200 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 80, md: 100 },
            height: { xs: 80, md: 100 },
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: 2,
            bg : "green"
          }}
        >
          <Image
            src="/images/web-logo.png"
            alt="Deen Guidance Logo"
            width={100}
            height={100}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              
            }}
            priority
          />
        </Box>

        {/* Rotating Circle 1 - Primary Color (Teal) */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '4px solid transparent',
            borderTopColor: '#004d40',
            borderRightColor: '#004d40',
            zIndex: 1,
          }}
        />

        {/* Rotating Circle 2 - Secondary Color (Gold) */}
        <Box
          component={motion.div}
          animate={{ rotate: -360 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            width: '85%',
            height: '85%',
            borderRadius: '50%',
            border: '4px solid transparent',
            borderBottomColor: '#DB9E30',
            borderLeftColor: '#DB9E30',
            zIndex: 1,
          }}
        />

        {/* Rotating Circle 3 - Light Teal */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: '#00695c',
            borderLeftColor: '#00695c',
            zIndex: 1,
          }}
        />

        {/* Rotating Circle 4 - Light Gold */}
        <Box
          component={motion.div}
          animate={{ rotate: -360 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            width: '115%',
            height: '115%',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderBottomColor: '#FFB84D',
            borderRightColor: '#FFB84D',
            opacity: 0.6,
            zIndex: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Loading;
