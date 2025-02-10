import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Tabs,
  Tab,
  Skeleton,
  Button
} from '@mui/material';
import SponsorCard from '../components/SponsorCard';

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('all');

  const sponsorTypes = [
    { value: 'all', label: 'Tüm Destekçiler' },
    { value: 'platinum', label: 'Takım Sponsorları' },
    { value: 'gold', label: 'Altın Sponsorlar' },
    { value: 'silver', label: 'Gümüş Sponsorlar' },
    { value: 'bronze', label: 'Bronz Sponsorlar' },
  ];

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        // API çağrısı simülasyonu
        const response = await new Promise(resolve =>
          setTimeout(() => resolve([
            {
              id: 1,
              name: 'Fada Mühendislik',
              logo: 'fada.png',
              sponsorshipType: 'Takım Sponsorları',
              category: 'platinum',
              description: 'FADA Mühendislik akülü, raylı ve hava yastıklı transfer arabaları, intralojistik ve transfer sistemleri çeşitli konveyör uygulamaları gibi birçok ürün tasarımı imalatı ve satışı konusunda uzmanlaşmıştır.15 yıla varan tecrübeye sahip ekibiyle, makine ve otomasyon sistemleri ile ilgili çeşitli transfer, taşıma çözümleri üretmek üzere kurulmuştur. Başta otomotiv sektörü olmak üzere lojistik, raylı sistemler, enerji, nükleer enerji, havacılık, beyaz eşya, demir çelik gibi sektörlerde müşteri taleplerini karşılamak amacıyla hizmet vermektedir. ',
              website: 'https://www.fada.com.tr/'
            },
          
          ]), 1000)
        );

        setSponsors(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Sponsorlar yüklenirken hata oluştu:', error);
        setIsLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  const filteredSponsors = sponsors.filter(
    sponsor => currentTab === 'all' || sponsor.category === currentTab
  );

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          Destekçilerimiz
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ textAlign: 'center', mb: 6, maxWidth: '800px', mx: 'auto' }}
        >
          Vizyonumuzu gerçekleştirmemizde bize destek olan değerli kurumlar
        </Typography>

        {/* Kategori Filtreleme */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
          <Tabs
            value={currentTab}
            onChange={(e, newValue) => setCurrentTab(newValue)}
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            {sponsorTypes.map((type) => (
              <Tab 
                key={type.value} 
                label={type.label} 
                value={type.value} 
              />
            ))}
          </Tabs>
        </Box>

        {/* Sponsorlar Listesi */}
        <Grid container spacing={4}>
          {isLoading ? (
            // Loading skeletons
            [...Array(6)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>
            ))
          ) : filteredSponsors.length === 0 ? (
            <Box sx={{ textAlign: 'center', width: '100%', mt: 4 }}>
              <Typography variant="h6" color="text.secondary">
                Bu kategoride sponsor bulunamadı.
              </Typography>
            </Box>
          ) : (
            filteredSponsors.map((sponsor) => (
              <Grid item key={sponsor.id} xs={12} sm={6} md={4}>
                <SponsorCard sponsor={sponsor} />
              </Grid>
            ))
          )}
        </Grid>

        {/* Sponsor Olma Çağrısı */}
        <Box 
          id="sponsor-form"
          sx={{ 
            mt: 8, 
            p: 6, 
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            scrollMarginTop: '100px'
          }}
        >
          <Typography variant="h4" gutterBottom>
            Siz de Sponsor Olun
          </Typography>
          <Typography sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
            Geleceğin teknolojilerini geliştiren genç mühendislere destek olun.
            Sponsorluk paketlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100'
                }
              }}
              href="mailto:sponsor@fecteam.com"
            >
              İletişime Geçin
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              href="https://www.linkedin.com/company/fecsolutions/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn'den Ulaşın
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Sponsors; 