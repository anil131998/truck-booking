import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { LocalShipping, Speed, Security, Support } from '@mui/icons-material';
import coverImage from '../images/cover.jpg';
import truckImage1 from '../images/truckimg1.jpg';
import truckImage2 from '../images/truckimg2.jpg';
import truckImage3 from '../images/truckimg3.jpg';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#f5f5f5',
          py: 8,
          textAlign: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Professional Truck Booking Services
          </Typography>
          <Typography variant="h5" gutterBottom>
            Reliable, Fast, and Secure Transportation Solutions
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              bgcolor: '#ff4d4d',
              '&:hover': {
                bgcolor: '#ff3333',
              },
            }}
          >
            Book Your Truck Now
          </Button>
        </Container>
      </Box>

      {/* What We Offer Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }} justifyContent="center">
          {/* Service Cards */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: 240, display: 'flex', flexDirection: 'column', maxWidth: 300, mx: 'auto' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                <Box sx={{ flex: '0 0 auto', mb: 2 }}>
                  <LocalShipping sx={{ fontSize: 50, color: '#ff4d4d' }} />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                  <Typography variant="h6" component="h3" align="center" gutterBottom>
                    Wide Fleet Selection
                  </Typography>
                  <Typography variant="body1" align="center">
                    Choose from our diverse range of trucks for any transportation need
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: 240, display: 'flex', flexDirection: 'column', maxWidth: 300, mx: 'auto' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                <Box sx={{ flex: '0 0 auto', mb: 2 }}>
                  <Speed sx={{ fontSize: 50, color: '#ff4d4d' }} />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                  <Typography variant="h6" component="h3" align="center" gutterBottom>
                    Fast Delivery
                  </Typography>
                  <Typography variant="body1" align="center">
                    Efficient and timely delivery to meet your schedule
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: 240, display: 'flex', flexDirection: 'column', maxWidth: 300, mx: 'auto' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                <Box sx={{ flex: '0 0 auto', mb: 2 }}>
                  <Security sx={{ fontSize: 50, color: '#ff4d4d' }} />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                  <Typography variant="h6" component="h3" align="center" gutterBottom>
                    Secure Transport
                  </Typography>
                  <Typography variant="body1" align="center">
                    Your cargo's safety is our top priority
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: 240, display: 'flex', flexDirection: 'column', maxWidth: 300, mx: 'auto' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                <Box sx={{ flex: '0 0 auto', mb: 2 }}>
                  <Support sx={{ fontSize: 50, color: '#ff4d4d' }} />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                  <Typography variant="h6" component="h3" align="center" gutterBottom>
                    24/7 Support
                  </Typography>
                  <Typography variant="body1" align="center">
                    Round-the-clock customer service support
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: 240, display: 'flex', flexDirection: 'column', maxWidth: 300, mx: 'auto' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                <Box sx={{ flex: '0 0 auto', mb: 2 }}>
                  <LocalShipping sx={{ fontSize: 50, color: '#ff4d4d' }} />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                  <Typography variant="h6" component="h3" align="center" gutterBottom>
                    Nationwide Coverage
                  </Typography>
                  <Typography variant="body1" align="center">
                    Serving all major cities and routes across the country
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Our Fleet Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Our Fleet
          </Typography>
          <Grid container spacing={3} sx={{ mt: 4 }} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 350, mx: 'auto', height: '100%' }}>
                <Box
                  component="img"
                  src={truckImage1}
                  alt="Light Duty Truck"
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ height: 100, py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h6" gutterBottom>Light Duty Trucks</Typography>
                  <Typography>Perfect for local deliveries</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 350, mx: 'auto', height: '100%' }}>
                <Box
                  component="img"
                  src={truckImage2}
                  alt="Medium Duty Truck"
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ height: 100, py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h6" gutterBottom>Medium Duty Trucks</Typography>
                  <Typography>Ideal for regional transportation needs</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 350, mx: 'auto', height: '100%' }}>
                <Box
                  component="img"
                  src={truckImage3}
                  alt="Heavy Duty Truck"
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ height: 100, py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h6" gutterBottom>Heavy Duty Trucks</Typography>
                  <Typography>For large-scale logistics operations</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
