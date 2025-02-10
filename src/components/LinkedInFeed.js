import { Box, Typography, Paper, Link, Avatar } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

function LinkedInFeed() {
  const posts = [
    {
      id: 1,
      content: "FEC Takımı olarak TEKNOFEST 2024 Sanayide Dijital Teknolojiler yarışmasında 11. olduk! Tüm takım arkadaşlarımıza ve destekçilerimize teşekkür ederiz.",
      date: "2024",
      image: "/agv.jpg",
      link: "https://www.linkedin.com/posts/fecsolutions_teknofest2024-fecteam-digitaltechnologies-activity-7239543228469805056-BFJD"
    },
    {
      id: 2,
      content: "2024 Teknofest Yarışması Takım sponsorumuz FADA Mühendislik'e destekleri için teşekkür ederiz.",
      date: "2024",
      image: "/fada.png",
      link: "https://www.linkedin.com/posts/fecsolutions_robotics-technology-activity-7227322827903795200-RYam?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMGiUYBTjPo_lLM4bCnb8UlKzYrkdCpBmI"
    },
    {
      id: 3,
      content: "Sakarya Gençlik Merkezi'nde düzenlenen etkinlikte FEC Takımı olarak bulunduk.",
      date: "2024",
      image: "/bilisim.jpg",
      link: "https://www.linkedin.com/posts/fecsolutions_sakarya-gen%C3%A7lik-merkezimiz-taraf%C4%B1ndan-d%C3%BCzenlenen-activity-7194094722909368322-gjQW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMGiUYBTjPo_lLM4bCnb8UlKzYrkdCpBmI"
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          px: 3,
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            mb: 4,
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
          LinkedIn'de Bizi Takip Edin
        </Typography>

        <Box sx={{ mt: 6, mb: 4 }}>
          <Link
            href="https://www.linkedin.com/company/fecsolutions/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#0A66C2',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            <LinkedIn sx={{ fontSize: 40, mr: 1 }} />
            <Typography variant="h6">
              FEC Solutions
            </Typography>
          </Link>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: 3 
        }}>
          {posts.map((post) => (
            <Paper
              key={post.id}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
              onClick={() => window.open(post.link, '_blank')}
            >
              {post.image && (
                <Box
                  component="img"
                  src={post.image}
                  alt={`Post ${post.id}`}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 2
                  }}
                />
              )}
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ 
                  textAlign: 'left',
                  flexGrow: 1
                }}
              >
                {post.content}
              </Typography>
              <Box sx={{ 
                mt: 2, 
                pt: 2, 
                borderTop: 1, 
                borderColor: 'divider',
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <Typography variant="caption" color="text.secondary">
                  {post.date}
                </Typography>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'primary.main',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <LinkedIn sx={{ color: '#0A66C2', mr: 1 }} />
                  <Typography variant="subtitle2">
                    LinkedIn'de Görüntüle
                  </Typography>
                </Link>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LinkedInFeed; 