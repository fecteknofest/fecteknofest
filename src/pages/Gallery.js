import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Tabs,
  Tab,
  Skeleton,
  useMediaQuery,
  useTheme,
  Modal
} from '@mui/material';

function Gallery() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const getCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // API çağrısı simülasyonu
        const response = await new Promise(resolve =>
          setTimeout(() => resolve([
            {
              id: 1,
              url: '/hero-background.jpg',
              title: 'TEKNOFEST 2024 Takım Fotoğrafı',
              category: 'team',
              date: '2024-10-2'
            },
          ]), 1000)
        );

        setImages(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Görseller yüklenirken hata oluştu:', error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = images.filter(
    img => currentTab === 'all' || img.category === currentTab
  );

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setOpenModal(true);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}
        >
          Galeri
        </Typography>

        {/* Kategori Filtreleme */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={currentTab}
            onChange={(e, newValue) => setCurrentTab(newValue)}
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tümü" value="all" />
            <Tab label="Takım" value="team" />
            <Tab label="Projeler" value="projects" />
            <Tab label="Ödüller" value="awards" />
          </Tabs>
        </Box>

        {isLoading ? (
          <ImageList cols={getCols()} gap={16}>
            {[...Array(6)].map((_, index) => (
              <ImageListItem key={index}>
                <Skeleton variant="rectangular" height={300} />
              </ImageListItem>
            ))}
          </ImageList>
        ) : filteredImages.length === 0 ? (
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ textAlign: 'center', mt: 4 }}
          >
            Bu kategoride görsel bulunamadı.
          </Typography>
        ) : (
          <ImageList cols={getCols()} gap={16}>
            {filteredImages.map((img) => (
              <ImageListItem 
                key={img.id}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
                onClick={() => handleImageClick(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  style={{ 
                    borderRadius: 8,
                    height: '300px',
                    objectFit: 'cover'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    p: 2,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8
                  }}
                >
                  <Typography variant="subtitle1">
                    {img.title}
                  </Typography>
                  <Typography variant="caption">
                    {new Date(img.date).toLocaleDateString('tr-TR')}
                  </Typography>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        )}

        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 2 }}>
            <img
              src={selectedImage}
              alt="Büyütülmüş Görsel"
              style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: 8 }}
            />
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}

export default Gallery; 