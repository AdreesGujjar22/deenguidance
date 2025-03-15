import { useTheme, useMediaQuery } from '@mui/material';
import type { ResponsiveBreakpoints } from '@/types/common';

export function useResponsive(): ResponsiveBreakpoints {
  const theme = useTheme();
  
  return {
    xs: useMediaQuery(theme.breakpoints.only('xs')),
    sm: useMediaQuery(theme.breakpoints.only('sm')),
    md: useMediaQuery(theme.breakpoints.only('md')),
    lg: useMediaQuery(theme.breakpoints.only('lg')),
    xl: useMediaQuery(theme.breakpoints.only('xl')),
  };
}
