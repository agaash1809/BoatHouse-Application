import React, { useContext } from 'react';
import { useTheme } from './UseContext';

const WhatsAppButton = () => {
  const { theme } = useTheme();

  const openWhatsApp = () => {
    const phoneNumber = '7010312518';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink);
  };

  return (
    <button
      style={{
        backgroundColor: theme === 'light' ? '#25D366' : '#128C7E',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={openWhatsApp}
    >
      Open WhatsApp
    </button>
  );
};

export default WhatsAppButton;