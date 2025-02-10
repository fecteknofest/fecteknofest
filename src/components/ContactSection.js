import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function ContactSection() {
  return (
    <Box 
      sx={{ 
        mt: 8, 
        p: 6, 
        textAlign: 'center',
        bgcolor: 'primary.main', // Mavi arka plan
        color: 'white',
        borderRadius: 2
      }}
    >
      <Typography variant="h4" gutterBottom>
        Bizimle İletişime Geçin
      </Typography>
      <Typography sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
        Sorularınız veya işbirliği önerileriniz için bizimle iletişime geçebilirsiniz.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button 
          variant="contained" 
          size="large"
          href="mailto:feciletisim@gmail.com"
          sx={{ 
            bgcolor: 'white',
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'grey.100'
            }
          }}
        >
          E-posta Gönder
        </Button>
        <Button 
          variant="outlined" 
          size="large"
          href="https://www.linkedin.com/company/fecsolutions/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              borderColor: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          LinkedIn'den Ulaşın
        </Button>
      </Box>
    </Box>
  );
}

export default ContactSection; 