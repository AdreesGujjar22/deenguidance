// Common types used across the application
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MetaData {
  title: string;
  description: string;
}

export interface ResponsiveBreakpoints {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}
