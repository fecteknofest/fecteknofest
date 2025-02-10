import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import TeamMemberCard from '../components/TeamMemberCard';

function About() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Takım üyelerini yükleme simülasyonu
  useEffect(() => {
    // Gerçek uygulamada bu veriyi bir API'den çekebilirsiniz
    const fetchTeamMembers = async () => {
      try {
        // API çağrısını simüle ediyoruz
        const response = await new Promise(resolve => 
          setTimeout(() => resolve([
            {
              id: 1,
              name: 'Harun Yeşilyurt',
              role: 'Yazılım Geliştirici',
              description: 'Bilgisayar Mühendisliği 3. sınıf öğrencisi. Ayrıca tam zamanlı bir yazılım geliştirici olarak çalışıyor. Web, Mobil ,Robotik ve yapay zeka alanlarında deneyimli.',
              image: '/t1.jpeg',
              linkedin: 'https://www.linkedin.com/in/harunmyesilyurt/',
              github: 'https://github.com/harunmyesilyurt',
            //   email: 'harun.com'
            },
            {
              id: 2,
              name: 'Zeynep Kaya',
              role: 'Yazılım Lideri',
              description: 'Bilgisayar Mühendisliği öğrencisi. Full-stack geliştirici ve yapay zeka algoritmaları konusunda uzman.',
              image: '/team/member2.jpg',
              linkedin: 'https://linkedin.com/in/zeynepkaya',
              github: 'https://github.com/zeynepkaya',
              email: 'zeynep@fecteam.com'
            }, 
            {
                id: 3,
                name: 'Zeynep Kaya',
                role: 'Yazılım Lideri',
                description: 'Bilgisayar Mühendisliği öğrencisi. Full-stack geliştirici ve yapay zeka algoritmaları konusunda uzman.',
                image: '/team/member2.jpg',
                linkedin: 'https://linkedin.com/in/zeynepkaya',
                github: 'https://github.com/zeynepkaya',
                email: 'zeynep@fecteam.com'
            }, 
            {
                id: 4,
                name: 'Zeynep Kaya',
                role: 'Yazılım Lideri',
                description: 'Bilgisayar Mühendisliği öğrencisi. Full-stack geliştirici ve yapay zeka algoritmaları konusunda uzman.',
                image: '/team/member2.jpg',
                linkedin: 'https://linkedin.com/in/zeynepkaya',
                github: 'https://github.com/zeynepkaya',
                email: 'zeynep@fecteam.com'
            }, 
            {
                id: 5,
                name: 'Zeynep Kaya',
                role: 'Yazılım Lideri',
                description: 'Bilgisayar Mühendisliği öğrencisi. Full-stack geliştirici ve yapay zeka algoritmaları konusunda uzman.',
                image: '/team/member2.jpg',
                linkedin: 'https://linkedin.com/in/zeynepkaya',
                github: 'https://github.com/zeynepkaya',
                email: 'zeynep@fecteam.com'
            }, 
            {
                id: 6,
                name: 'Zeynep Kaya',
                role: 'Yazılım Lideri',
                description: 'Bilgisayar Mühendisliği öğrencisi. Full-stack geliştirici ve yapay zeka algoritmaları konusunda uzman.',
                image: '/team/member2.jpg',
                linkedin: 'https://linkedin.com/in/zeynepkaya',
                github: 'https://github.com/zeynepkaya',
                email: 'zeynep@fecteam.com'
            }, 
            {
                id: 7,
                name: 'Zeynep Kaya',
                role: 'Yazılım Lideri',
                description: 'Bilgisayar Mühendisliği öğrencisi. Full-stack geliştirici ve yapay zeka algoritmaları konusunda uzman.',
                image: '/team/member2.jpg',
                linkedin: 'https://linkedin.com/in/zeynepkaya',
                github: 'https://github.com/zeynepkaya',
                email: 'zeynep@fecteam.com'
            }, 

          ]), 1000)
        );
        
        setTeamMembers(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Takım üyeleri yüklenirken hata oluştu:', error);
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Misyon ve Vizyon bileşeni
  const MissionVision = () => (
    <Grid container spacing={4} sx={{ mb: 8 }}>
      <Grid item xs={12} md={6}>
        <Box 
          sx={{ 
            p: 4, 
            height: '100%',
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Misyonumuz
          </Typography>
          <Typography>
            Yenilikçi teknolojiler geliştirerek topluma fayda sağlamak ve 
            geleceğin mühendislerini yetiştirmek için bir platform oluşturmak.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box 
          sx={{ 
            p: 4, 
            height: '100%',
            bgcolor: 'secondary.main',
            color: 'white',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Vizyonumuz
          </Typography>
          <Typography>
            Ulusal ve uluslararası alanda tanınan, yenilikçi projeleriyle 
            öne çıkan bir teknoloji takımı olmak.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );

  // İletişim bileşeni
  const ContactSection = () => (
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

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Hakkımızda
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
          >
            Teknoloji ve inovasyonla geleceği şekillendiren, 
            yarının mühendislik çözümlerini bugünden tasarlayan öğrenci takımı.
          </Typography>
        </Box>

        {/* Misyon ve Vizyon */}
        <MissionVision />

        {/* Takım Üyeleri */}
        <Box sx={{ mb: 8, mt: 12 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 4,
                backgroundColor: 'primary.main',
                borderRadius: 2
              }
            }}
          >
            Takım Üyelerimiz
          </Typography>

          {isLoading ? (
            <Typography textAlign="center">Yükleniyor...</Typography>
          ) : (
            <Grid container spacing={4}>
              {teamMembers.map((member) => (
                <Grid item key={member.id} xs={12} sm={6} md={4}>
                  <TeamMemberCard member={member} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* İletişim Bölümü */}
        <ContactSection />
      </Container>
    </Box>
  );
}

export default About; 