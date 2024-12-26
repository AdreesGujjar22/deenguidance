import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const url = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <Fab
      color="primary"
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: '#25D366',
      }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon style={{ color: 'white' }} />
    </Fab>
  );
};

export default WhatsAppButton;
