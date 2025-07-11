import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: '#fff' }}>
      {/* Drawer Header */}
      <Box sx={{ 
        p: 3, 
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          onClick={() => setMobileOpen(false)}
          sx={{
            color: '#333',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          TruckBooking
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            onClick={() => handleMenuClick(item.path)}
            sx={{ 
              py: 1.5,
              '&:hover': {
                bgcolor: 'rgba(255, 77, 77, 0.08)'
              }
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{ 
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontSize: '1.1rem',
                  fontWeight: 500
                }
              }}
            />
          </ListItem>
        ))}

        {/* Book Now Button */}
        <Box sx={{ px: 3, mt: 2 }}>
          <Button
            fullWidth
            onClick={() => handleMenuClick('/book')}
            sx={{ 
              py: 1.5,
              bgcolor: '#ff4d4d',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 500,
              '&:hover': { 
                bgcolor: '#ff3333'
              }
            }}
          >
            Book Now
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: '#fff', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
      }}
    >
      <Toolbar sx={{ 
        py: { xs: 1.5, md: 2 }, 
        minHeight: { xs: '64px', md: '80px' },
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: '#333',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', md: '1.8rem' },
            '&:hover': {
              color: '#ff4d4d'
            }
          }}
        >
          TruckBooking
        </Typography>

        {/* Desktop Menu Items */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {menuItems.map((item) => (
              <Button 
                key={item.text}
                component={Link} 
                to={item.path} 
                sx={{ 
                  color: '#333',
                  fontSize: '1rem',
                  fontWeight: 500,
                  '&:hover': {
                    color: '#ff4d4d'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
            <Button
              component={Link}
              to="/book"
              variant="contained"
              sx={{
                bgcolor: '#ff4d4d',
                padding: '10px 24px',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'white',
                boxShadow: '0 2px 4px rgba(255,77,77,0.2)',
                '&:hover': {
                  bgcolor: '#ff3333',
                  boxShadow: '0 4px 8px rgba(255,77,77,0.3)',
                },
              }}
            >
              Book Now
            </Button>
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              color: '#333',
              '&:hover': {
                color: '#ff4d4d'
              }
            }}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          PaperProps={{
            sx: {
              width: 280,
              boxShadow: '-4px 0 8px rgba(0,0,0,0.1)'
            }
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
