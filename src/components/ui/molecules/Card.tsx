import { Card as MuiCard, CardProps as MuiCardProps, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { BaseProps } from '@/types/common';

interface CardProps extends MuiCardProps, BaseProps {
  title?: string;
  subtitle?: string;
  noPadding?: boolean;
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Card({ 
  title,
  subtitle,
  children,
  noPadding = false,
  ...props 
}: CardProps) {
  return (
    <StyledCard {...props}>
      {(title || subtitle) && (
        <Box sx={{ p: 2, pb: subtitle ? 1 : 0 }}>
          {title && (
            <Typography variant="h6" component="h2" gutterBottom={!!subtitle}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1, p: noPadding ? '0 !important' : undefined }}>
        {children}
      </CardContent>
    </StyledCard>
  );
}
