'use client';

import { Toaster } from 'react-hot-toast';
import { useTheme } from '@mui/material';

export default function ToastProvider() {
  const theme = useTheme();

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
        },
        success: {
          iconTheme: {
            primary: theme.palette.success.main,
            secondary: theme.palette.common.white,
          },
        },
        error: {
          iconTheme: {
            primary: theme.palette.error.main,
            secondary: theme.palette.common.white,
          },
        },
      }}
    />
  );
}
