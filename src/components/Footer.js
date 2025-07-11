import React from 'react';
import { Box, Container, Typography, IconButton, Grid, Stack, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#333', color: 'white', mt: 'auto' }}>
      <Container maxWidth="lg">
        {/* About Us Section */}
        <Box sx={{ textAlign: 'center', py: 4, borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 2 }}>
            TruckBooking provides reliable and efficient logistics solutions across the country. 
            Our fleet of trucks ensures timely delivery and safe transportation of your cargo.
          </Typography>
        </Box>

        {/* Quick Links and Contact Info */}
        <Grid container spacing={6} sx={{ py: 4 }} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1} alignItems="center">
              <Typography variant="body2">Services</Typography>
              <Typography variant="body2">Fleet</Typography>
              <Typography variant="body2">Tracking</Typography>
              <Typography variant="body2">Contact</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Stack spacing={1} alignItems="center">
              <Typography variant="body2">Email: info@truckbooking.com</Typography>
              <Typography variant="body2">Phone: (555) 123-4567</Typography>
              <Typography variant="body2">Address: 123 Logistics Way</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Footer */}
        <Box sx={{ py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Company Name */}
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            TRUCKBOOKING
          </Typography>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" sx={{ color: 'white', '&:hover': { color: '#ff4d4d' } }}>
              <Facebook />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white', '&:hover': { color: '#ff4d4d' } }}>
              <Twitter />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white', '&:hover': { color: '#ff4d4d' } }}>
              <Instagram />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white', '&:hover': { color: '#ff4d4d' } }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
