"use client"
import { Box, 
  // useTheme, 
  // useMediaQuery 
} from '@mui/material';
import type { BaseProps } from '@/types/common';

interface MainLayoutProps extends BaseProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disableContainer?: boolean;
}

export default function MainLayout({
  children,
  disableContainer = false,
}: MainLayoutProps) {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
        // py: isMobile ? 2 : 4,
        py: 0,
        px: 0,
        gap: 0,
      }}
    >
      {children}
    </Box>
  );

  if (disableContainer) {
    return content;
  }

  return <Box component="section">{content}</Box>;
}
