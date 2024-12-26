import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Logo from "../../../../public/images/logo.png";

const pages = ['Home', 'Charity', 'Events', 'Scholars', 'Pages', 'Contact'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isMenuOpen = Boolean(anchorElNav);

  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Menu items for desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  mx: 1,
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Menu icon for mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="toggle navigation menu"
              onClick={isMenuOpen ? handleCloseNavMenu : handleOpenNavMenu}
              color="inherit"
              sx={{
                zIndex: 1301,
                position: 'relative',
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={isMenuOpen}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  width: '100vw',
                  maxWidth: '100vw',
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  zIndex: 1300,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
