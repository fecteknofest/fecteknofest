import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box,
  Container,
  useScrollTrigger,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

// Scroll olduğunda navbar'ı gizleyen bileşen
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar({ toggleColorMode, mode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Ana Sayfa', path: '/' },
    { text: 'Hakkımızda', path: '/hakkimizda' },
    { text: 'Projeler', path: '/projeler' },
    { text: 'Galeri', path: '/galeri' },
    { text: 'Sponsorlar', path: '/sponsorlar' },
    // { text: 'Başarılar', path: '/basarilar' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Yönlendirme fonksiyonu
  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  // Sponsor ol butonu için özel yönlendirme
  const handleSponsorClick = () => {
    window.scrollTo(0, 0);
    navigate('/sponsorlar');
    setTimeout(() => {
      const sponsorForm = document.getElementById('sponsor-form');
      if (sponsorForm) {
        sponsorForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.text}
          onClick={() => {
            handleNavigate(item.path);
            handleDrawerToggle();
          }}
          sx={{
            backgroundColor: isActive(item.path) ? 'primary.main' : 'transparent',
            color: isActive(item.path) ? 'white' : 'inherit',
            '&:hover': {
              backgroundColor: isActive(item.path) ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
      <ListItem button onClick={handleSponsorClick}>
        <ListItemText 
          primary="Sponsor Ol" 
          sx={{ 
            color: 'primary.main',
            fontWeight: 'bold'
          }} 
        />
      </ListItem>
      <ListItem button onClick={() => {
        handleNavigate('/katil');
        handleDrawerToggle();
      }}>
        <ListItemText 
          primary="Takıma Katıl" 
          sx={{ 
            color: 'primary.main',
            fontWeight: 'bold'
          }} 
        />
      </ListItem>
    </List>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar 
              sx={{ 
                justifyContent: 'space-between',
                height: 100,
                position: 'relative',
              }}
            >
              {/* Sol taraf - Logo */}
              <Box
                component="img"
                src="/logo.png"
                alt="FEC Logo"
                sx={{ 
                  height: 80,
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.8
                  }
                }}
                onClick={() => handleNavigate('/')}
              />

              {/* Orta - Navigasyon Menüsü */}
              <Box 
                sx={{ 
                  display: { xs: 'none', md: 'flex' }, 
                  alignItems: 'center',
                  gap: 2,
                  ml: 4
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => handleNavigate(item.path)}
                    sx={{
                      color: isActive(item.path) ? 'primary.main' : 'text.primary',
                      fontWeight: isActive(item.path) ? 'bold' : 'normal',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              {/* Sağ taraf - Tema Değiştirme ve Butonlar */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton 
                  onClick={toggleColorMode} 
                  sx={{ color: mode === 'dark' ? 'primary.main' : 'text.secondary' }}
                >
                  {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={handleSponsorClick}
                    sx={{ 
                      borderColor: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)'
                      }
                    }}
                  >
                    Sponsor Ol
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleNavigate('/katil')}
                  >
                    Takıma Katıl
                  </Button>
                </Box>
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{ display: { xs: 'block', md: 'none' }, color: 'text.primary' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'background.paper'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar; 