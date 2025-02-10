import { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Gallery from './pages/Gallery';
import Sponsors from './pages/Sponsors';
import JoinForm from './pages/JoinForm';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1976d2', // Ana renk
            light: '#42a5f5',
            dark: '#1565c0',
          },
          secondary: {
            main: '#9c27b0', // İkincil renk
          },
          background: {
            default: mode === 'light' ? '#ffffff' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          button: {
            textTransform: 'none', // Butonlarda büyük harf kullanımını kaldırır
          },
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode); // Tema tercihini kaydet
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Scroll için gerekli stil */}
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
      }}>
        <Router>
          <div className="App">
            <Navbar toggleColorMode={toggleColorMode} mode={mode} />
            <Box component="main" sx={{ flexGrow: 1, pt: '100px' }}> {/* Navbar yüksekliği kadar padding */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hakkimizda" element={<About />} />
                <Route path="/projeler" element={<Projects />} />
                <Route path="/projeler/:id" element={<ProjectDetail />} />
                <Route path="/galeri" element={<Gallery />} />
                <Route path="/sponsorlar" element={<Sponsors />} />
                <Route path="/katil" element={<JoinForm />} />
              </Routes>
            </Box>
            <Footer />
          </div>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App; 