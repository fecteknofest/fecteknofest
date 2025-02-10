import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Skeleton
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Tüm Projeler' },
    { value: 'robotics', label: 'Robotik' },
    { value: 'software', label: 'Yazılım' },
    { value: 'ai', label: 'Yapay Zeka' },
    { value: 'hardware', label: 'Donanım' },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // API çağrısı simülasyonu
        const response = await new Promise(resolve => 
          setTimeout(() => resolve([
            {
              id: 1,
              title: 'Otonom İnsansız Kara Aracı AGV',
              shortDescription: 'TEKNOFEST yarışması için geliştirilen AGV projesi',
              description: 'Yapay zeka destekli, tamamen otonom  sürüş yapabilen, görüntü işleme teknolojileri ile nesne tanıma ve verilen görevleri yerine getirebilen insansız kara aracı.',
              technologies: ['Python', 'OpenCV', 'ROS', 'TensorFlow'],
              image: 'agv.jpg',
              category: 'robotics',
              github: 'https://github.com/fecteknofest',
              demoLink: 'https://www.youtube.com/watch?v=aG-Tpy_nhrM',
              achievements: [
                'TEKNOFEST 2024 Dijital Teknolojiler Yarışması 11. Sırada',
              ]
            },
          
          ]), 1000)
        );
        
        setProjects(response);
        setFilteredProjects(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Projeler yüklenirken hata oluştu:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProjects(filtered);
  }, [searchTerm, filterCategory, projects]);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          Projelerimiz
        </Typography>

        {/* Filtreleme Araçları */}
        <Grid container spacing={2} sx={{ mb: 6 }}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Proje Ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              variant="outlined"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        {/* Projeler Listesi */}
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
          ) : filteredProjects.length === 0 ? (
            <Box sx={{ textAlign: 'center', width: '100%', mt: 4 }}>
              <Typography variant="h6" color="text.secondary">
                Aradığınız kriterlere uygun proje bulunamadı.
              </Typography>
            </Box>
          ) : (
            filteredProjects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={4}>
                <ProjectCard project={project} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects; 