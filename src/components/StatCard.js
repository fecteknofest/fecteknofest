import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  People as PeopleIcon,
  Engineering as EngineeringIcon,
  EmojiEvents as EmojiEventsIcon,
  Business as BusinessIcon
} from '@mui/icons-material';

function StatCard({ title, value, icon, color = '#1976d2' }) {
  const getIcon = () => {
    switch (icon) {
      case 'people':
        return <PeopleIcon sx={{ fontSize: 48 }} />;
      case 'engineering':
        return <EngineeringIcon sx={{ fontSize: 48 }} />;
      case 'emoji_events':
        return <EmojiEventsIcon sx={{ fontSize: 48 }} />;
      case 'business':
        return <BusinessIcon sx={{ fontSize: 48 }} />;
      default:
        return null;
    }
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        textAlign: 'center',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6
        }
      }}
    >
      <CardContent>
        <Box 
          sx={{ 
            mb: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {getIcon()}
        </Box>
        <Typography 
          variant="h3" 
          component="div"
          sx={{ 
            fontWeight: 'bold',
            color: color
          }}
        >
          {value}
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard; 