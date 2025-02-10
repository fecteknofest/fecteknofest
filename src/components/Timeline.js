import { Box, Typography, Paper } from '@mui/material';

function Timeline() {
  const events = [
    {
      year: '2024',
      title: 'TEKNOFEST 2024',
      description: 'Sanayide Dijital Teknolojiler yarışmasında 11. olduk'
    },
    {
      year: '2024',
      title: 'FADA Mühendislik Sponsorluğu',
      description: 'FADA Mühendislik ile sponsorluk anlaşması imzaladık'
    },
    {
      year: '2024',
      title: 'Sakarya Gençlik Merkezi Etkinliği',
      description: 'Sakarya Gençlik Merkezi\'nde düzenlenen etkinlikte projelerimizi tanıttık'
    },
    {
      year: '2023',
      title: 'Takımın Kuruluşu',
      description: 'FEC Takımı, Sakarya Üniversitesi öğrencileri tarafından kuruldu'
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Başarılarımız
      </Typography>
      <Box sx={{ position: 'relative', my: 4 }}>
        {/* Orta çizgi */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 2,
            height: '100%',
            bgcolor: 'primary.main'
          }}
        />
        
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              mb: 4
            }}
          >
            <Paper
              sx={{
                p: 3,
                width: '45%',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  [index % 2 === 0 ? 'right' : 'left']: -20,
                  width: 20,
                  height: 2,
                  bgcolor: 'primary.main'
                }
              }}
            >
              <Typography variant="h6" color="primary">
                {event.year}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {event.title}
              </Typography>
              <Typography color="text.secondary">
                {event.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Timeline; 