import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ButtonProps extends MuiButtonProps {
  fullWidth?: boolean;
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  '&.MuiButton-contained': {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: theme.shadows[2],
    },
  },
}));

export default function Button(props: ButtonProps) {
  return <StyledButton {...props} />;
}
