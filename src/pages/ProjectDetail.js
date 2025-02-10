import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Skeleton
} from '@mui/material';
import {
  ArrowBack,
  GitHub as GitHubIcon,
  YouTube as YouTubeIcon,
  Link as LinkIcon
} from '@mui/icons-material';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        // API çağrısı simülasyonu
        const response = await new Promise(resolve =>
          setTimeout(() => resolve({
            id: 1,
            title: 'Otonom İnsansız Kara Aracı AGV',
            description: 'Yapay zeka destekli, tamamen otonom  sürüş yapabilen, görüntü işleme teknolojileri ile nesne tanıma ve verilen görevleri yerine getirebilen insansız kara aracı.',
            longDescription: `

              Bu proje, TEKNOFEST 2024 Sanayide Dijital Teknolojiler yarışması için geliştirilmiştir. 
              Projemizin temel amacı, acil durum senaryolarında kullanılabilecek, tamamen otonom 
              bir insansız kara aracı geliştirmekti.


              AGV'imiz şu özelliklere sahiptir:
              - Yapay zeka destekli nesne tanıma ve görevleri yerine getirme
              - GPS destekli otonom sürüş
              - Gerçek zamanlı görüntü aktarımı
              - Uzaktan kontrol ve müdahale sistemi
              - Acil durum protokolleri

            `,
            technologies: ['Python', 'OpenCV', 'ROS', 'TensorFlow', 'Pixhawk', 'MAVLink'],
            mainImage: '/agv.jpg',

            images: [
              '/agv.jpg',
              '/agv.jpg',
              '/agv.jpg',
              '/agv.jpg'
            ],

            category: 'robotics',
            github: 'https://github.com/fecteknofest',
            youtubeLink: 'https://www.youtube.com/watch?v=aG-Tpy_nhrM',

            teamMembers: [
              { name: 'Hacı Hikmet Bozok', role: 'Mekanik ve Elektronik Geliştirici' },
              { name: 'Harun Yeşilyurt', role: 'Yazılım Geliştirici' },
              { name: 'Mustafa Biçer', role: 'Takım Lideri' },
              { name: 'Haktan Serdar Genç', role: 'Elektronik Geliştirici' },
            ],
            achievements: [
              'TEKNOFEST 2024 Sanayide Dijital Teknolojiler Yarışması 11. Sırada',
            ],  

            technicalSpecs: {
              weight: '45 kg', // AGV'in ağırlığı
              MovementTime: '10 saat',
              maxSpeed: '15 km/s',
              range: '1 km'
            }
          }), 1000)
        );

        setProject(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Proje detayları yüklenirken hata oluştu:', error);
        setIsLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Skeleton variant="rectangular" height={400} />
        <Skeleton height={60} sx={{ mt: 2 }} />
        <Skeleton height={30} width="60%" />
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <Skeleton height={200} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Skeleton height={200} />
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (!project) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h5" color="error">
          Proje bulunamadı
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/projeler')}
          sx={{ mt: 2 }}
        >
          Projelere Dön
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Geri Dön Butonu */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/projeler')}
          sx={{ mb: 4 }}
        >
          Projelere Dön
        </Button>

        {/* Ana Görsel */}
        <Box
          component="img"
          src={project.mainImage}
          alt={project.title}
          sx={{
            width: '100%',
            height: 400,
            objectFit: 'cover',
            borderRadius: 2,
            mb: 4
          }}
        />

        {/* Başlık ve Teknolojiler */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {project.title}
          </Typography>
          <Box sx={{ mb: 2 }}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{ mr: 1, mb: 1 }}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* Sol Kolon - Ana İçerik */}
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              {project.longDescription}
            </Typography>

            {/* Proje Görselleri */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Proje Görselleri
            </Typography>
            <ImageList cols={2} gap={16}>
              {project.images.map((img, index) => (
                <ImageListItem key={index}>
                  <img
                    src={img}
                    alt={`Proje Görsel ${index + 1}`}
                    loading="lazy"
                    style={{ borderRadius: 8 }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>

          {/* Sağ Kolon - Detaylar */}
          <Grid item xs={12} md={4}>
            {/* Bağlantılar */}
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Proje Bağlantıları
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {project.github && (
                  <IconButton
                    color="primary"
                    href={project.github}
                    target="_blank"
                  >
                    <GitHubIcon />
                  </IconButton>
                )}
                {project.youtubeLink && (
                  <IconButton
                    color="error"
                    href={project.youtubeLink}
                    target="_blank"
                  >
                    <YouTubeIcon />
                  </IconButton>
                )}
                {project.demoLink && (
                  <IconButton
                    color="primary"
                    href={project.demoLink}
                    target="_blank"
                  >
                    <LinkIcon />
                  </IconButton>
                )}
              </Box>
            </Paper>

            {/* Teknik Özellikler */}
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Teknik Özellikler
              </Typography>
              <Box>
                {Object.entries(project.technicalSpecs).map(([key, value]) => (
                  <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography color="text.secondary">
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </Typography>
                    <Typography fontWeight="medium">{value}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>

            {/* Takım Üyeleri */}
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Proje Ekibi
              </Typography>
              {project.teamMembers.map((member, index) => (
                <Box key={index} sx={{ mb: 1 }}>
                  <Typography variant="subtitle2">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Box>
              ))}
            </Paper>

            {/* Başarılar */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Başarılar
              </Typography>
              {project.achievements.map((achievement, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                >
                  • {achievement}
                </Typography>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectDetail; 