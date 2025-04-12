"use client"
import { Box, useTheme, useMediaQuery } from '@mui/material';
import type { BaseProps } from '@/types/common';

interface MainLayoutProps extends BaseProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disableContainer?: boolean;
}

export default function MainLayout({
  children,
  disableContainer = false,
}: MainLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        py: isMobile ? 2 : 4,
        px: isMobile ? 0 : 0,
      }}
    >
      {children}
    </Box>
  );

  if (disableContainer) {
    return content;
  }

  return <Box>{content}</Box>;
}
