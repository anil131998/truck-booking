import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Your Trusted Transportation Partner
        </Typography>
        <Typography paragraph>
          Founded in 2020, TruckBooking has been at the forefront of revolutionizing the trucking
          industry. We combine modern technology with years of logistics expertise to provide
          seamless transportation solutions for businesses of all sizes.
        </Typography>
        <Typography paragraph>
          Our mission is to make truck booking simple, efficient, and reliable. We take pride
          in our extensive fleet of well-maintained vehicles and our team of professional drivers
          who ensure your cargo reaches its destination safely and on time.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Our Vision
          </Typography>
          <Typography paragraph>
            To become the leading digital platform for truck booking services, known for
            reliability, transparency, and customer satisfaction. We strive to revolutionize
            the logistics industry through innovative solutions and exceptional service.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Our Values
          </Typography>
          <Typography paragraph>
            • Customer First: Your satisfaction is our top priority<br />
            • Reliability: We deliver on our promises<br />
            • Safety: Maintaining the highest safety standards<br />
            • Innovation: Continuously improving our services<br />
            • Sustainability: Committed to eco-friendly practices
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
