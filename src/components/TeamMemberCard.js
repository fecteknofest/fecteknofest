import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Grid,
  Link
} from '@mui/material';
import { 
  LinkedIn,
  Close as CloseIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';

function TeamMemberCard({ member }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card 
        sx={{ 
          height: '100%',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 6
          }
        }}
        onClick={handleOpen}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Avatar
            src={member.image}
            alt={member.name}
            sx={{ 
              width: 120, 
              height: 120, 
              mx: 'auto', 
              mb: 2,
              border: 2,
              borderColor: 'primary.main'
            }}
          />
          <Typography variant="h6" gutterBottom>
            {member.name}
          </Typography>
          <Typography color="text.secondary">
            {member.role}
          </Typography>
        </CardContent>
      </Card>

      {/* Popup Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent sx={{ position: 'relative', p: 3 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'text.secondary'
            }}
          >
            <CloseIcon />
          </IconButton>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  aspectRatio: '1',
                  mb: 2
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                {member.role}
              </Typography>
              <Typography color="text.secondary" paragraph>
                {member.department}
              </Typography>
              <Typography variant="body1" paragraph>
                {member.description || 'Takım üyemiz hakkında detaylı bilgi yakında eklenecektir.'}
              </Typography>

              {/* Sosyal Medya Linkleri */}
              <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                {member.linkedin && (
                  <Link href={member.linkedin} target="_blank" color="inherit">
                    <LinkedIn sx={{ fontSize: 28, color: '#0A66C2' }} />
                  </Link>
                )}
                {member.github && (
                  <Link href={member.github} target="_blank" color="inherit">
                    <GitHubIcon sx={{ fontSize: 28 }} />
                  </Link>
                )}
                {member.email && (
                  <Link href={`mailto:${member.email}`} color="inherit">
                    <EmailIcon sx={{ fontSize: 28, color: 'primary.main' }} />
                  </Link>
                )}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TeamMemberCard; 