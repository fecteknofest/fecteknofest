import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton, 
  Link,
  Divider 
} from '@mui/material';
import {
  LinkedIn,
  Email,
  // Phone,
  LocationOn
} from '@mui/icons-material';

function Footer() {
  const socialLinks = [
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/company/fecsolutions/?viewAsMember=true' },
  ];

  const menuItems = [
    { title: 'Ana Sayfa', path: '/' },
    { title: 'Hakkımızda', path: '/hakkimizda' },
    { title: 'Projeler', path: '/projeler' },
    { title: 'Galeri', path: '/galeri' },
    { title: 'Sponsorlar', path: '/sponsorlar' },
    // { title: 'Başarılar', path: '/basarilar' },
    { title: 'Takıma Katıl', path: '/katil' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Hakkımızda Bölümü */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
            Fast, Efficient, Carrying Solutions
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Teknoloji ve inovasyonla geleceği şekillendiren, yarının mühendislik çözümlerini 
              bugünden tasarlayan öğrenci takımı.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ mr: 1 }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Hızlı Erişim Menüsü */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Hızlı Erişim
            </Typography>
            <Grid container>
              {menuItems.map((item) => (
                <Grid item xs={6} key={item.title}>
                  <Link
                    href={item.path}
                    color="text.secondary"
                    sx={{
                      display: 'block',
                      mb: 1,
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main',
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* İletişim Bilgileri */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              İletişim
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <LocationOn color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Sakarya Üniversitesi, 54000 Sakarya
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Email color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  feciletisim@gmail.com
                </Typography>
              </Box>
              {/* <Box sx={{ display: 'flex' }}>
                <Phone color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  +90 (212) 123 45 67
                </Typography>
              </Box> */}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Telif Hakkı */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
        >
          © {new Date().getFullYear()} FEC Takım. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 