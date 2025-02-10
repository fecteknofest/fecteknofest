import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  IconButton,
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  Language as WebsiteIcon
} from '@mui/icons-material';
import { useState } from 'react';

function SponsorCard({ sponsor }) {
  const [expanded, setExpanded] = useState(false);

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
        height="160"
        image={sponsor.logo}
        alt={sponsor.name}
        sx={{ 
          objectFit: 'contain',
          p: 2,
          bgcolor: 'background.paper'
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {sponsor.name}
          </Typography>
          {sponsor.website && (
            <IconButton 
              size="small"
              href={sponsor.website}
              target="_blank"
              color="primary"
            >
              <WebsiteIcon />
            </IconButton>
          )}
        </Box>
        <Typography 
          variant="subtitle2" 
          color="primary"
          gutterBottom
        >
          {sponsor.sponsorshipType}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onClick={() => setExpanded(!expanded)}
        >
          {sponsor.description}
        </Typography>
      </CardContent>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          pb: 1
        }}
      >
        <IconButton
          onClick={() => setExpanded(!expanded)}
          sx={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s'
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default SponsorCard; 