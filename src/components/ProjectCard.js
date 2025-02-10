import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  Chip,
  IconButton,
  Collapse,
  CardActions,
  Button
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  GitHub as GitHubIcon,
  Link as LinkIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {project.title}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{ mr: 1, mb: 1 }}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {project.shortDescription}
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {project.github && (
          <IconButton 
            href={project.github}
            target="_blank"
            aria-label="github"
          >
            <GitHubIcon />
          </IconButton>
        )}
        {project.demoLink && (
          <IconButton 
            href={project.demoLink}
            target="_blank"
            aria-label="demo"
          >
            <LinkIcon />
          </IconButton>
        )}
        <Button 
          size="small" 
          onClick={() => navigate(`/projeler/${project.id}`)}
          sx={{ ml: 'auto', mr: 1 }}
        >
          Detayları Gör
        </Button>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s'
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {project.description}
          </Typography>
          {project.achievements && (
            <>
              <Typography variant="subtitle2" color="primary" gutterBottom>
                Başarılar:
              </Typography>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                {project.achievements.map((achievement, index) => (
                  <li key={index}>
                    <Typography variant="body2">
                      {achievement}
                    </Typography>
                  </li>
                ))}
              </ul>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProjectCard; 