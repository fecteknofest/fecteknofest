import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import StatCard from '../components/StatCard';
import LinkedInFeed from '../components/LinkedInFeed';
import Timeline from '../components/Timeline';

function Home() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    uyeSayisi: 0,
    projeSayisi: 0,
    yarisma: 0,
    destekci: 0
  });

  // İstatistikleri animasyonlu şekilde artıralım
  useEffect(() => {
    const finalStats = {
      uyeSayisi: 8,
      projeSayisi: 1,
      yarisma: 1,
      destekci: 2
    };

    const interval = setInterval(() => {
      setStats(prevStats => ({
        uyeSayisi: prevStats.uyeSayisi < finalStats.uyeSayisi ? prevStats.uyeSayisi + 1 : prevStats.uyeSayisi,
        projeSayisi: prevStats.projeSayisi < finalStats.projeSayisi ? prevStats.projeSayisi + 1 : prevStats.projeSayisi,
        yarisma: prevStats.yarisma < finalStats.yarisma ? prevStats.yarisma + 1 : prevStats.yarisma,
        destekci: prevStats.destekci < finalStats.destekci ? prevStats.destekci + 1 : prevStats.destekci,
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2
        }}
      >
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 'bold',
            mb: 2
          }}
        >
          FEC Takımı
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Teknoloji ve inovasyonla geleceği şekillendiriyoruz. 
          Yarının mühendislik çözümlerini bugünden tasarlıyoruz.
        </Typography>
        <Box>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              mr: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
            onClick={() => navigate('/hakkimizda')}
          >
            Hakkımızda
          </Button>
          <Button 
            variant="outlined"
            size="large"
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
            onClick={() => navigate('/galeri')}
          >
            Galeri
          </Button>
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* İstatistikler */}
        <Box sx={{ my: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            Rakamlarla FEC
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard 
                title="Üye Sayısı" 
                value={stats.uyeSayisi} 
                icon="people"
                color="#2196f3"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard 
                title="Proje Sayısı" 
                value={stats.projeSayisi} 
                icon="engineering"
                color="#4caf50"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard 
                title="Yarışma Katılımı" 
                value={stats.yarisma} 
                icon="emoji_events"
                color="#ff9800"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard 
                title="Destekçi Kurumlar" 
                value={stats.destekci} 
                icon="business"
                color="#9c27b0"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Timeline
        <Box sx={{ my: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            Yolculuğumuz
          </Typography>
          <Timeline />
        </Box> */}

        {/* LinkedIn Feed */}
        <LinkedInFeed />

        {/* Katılım Çağrısı */}
        <Box 
          sx={{ 
            my: 8, 
            textAlign: 'center',
            py: 8,
            backgroundColor: 'primary.main',
            borderRadius: 2,
            color: 'white'
          }}
        >
          <Typography variant="h3" gutterBottom>
            Takımımıza Katılmak İster misin?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Geleceğin teknolojilerini bizimle birlikte geliştir!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/katil')}
              sx={{ 
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
            >
              Hemen Başvur
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              LinkedIn'den Başvur
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home; 