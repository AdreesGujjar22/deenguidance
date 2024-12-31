"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import MainButton from "../components/MainButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MainLink from "../components/MainLink";

const pages = ["Home", "Charity", "Events", "Scholars", "Pages", "Contact"];

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
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        backgroundColor: "primary.main",  // Dark background for better contrast
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "90%",
          margin: "auto",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
              style={{
                borderRadius: "50%",
              }}
            />
          </Box>

          {/* Menu items for desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Box sx={{
                display:{ xs: "none", md: "flex" }
              }} alignSelf="self-start" gap={3}>
                <MainLink
                  icon={<PhoneIcon sx={{ mr: 1 }} />}
                  linkContent="PK: +92 334 1436311"
                  linkHref="tel:+923341436311"
                />
                <MainLink
                  icon={<EmailIcon sx={{ mr: 1 }} />}
                  linkContent="deenguidanceinstitute@gmail.com"
                  linkHref="mailto:deenguidanceinstitute@gmail.com"
                />
              </Box>
              <Box display="flex" alignSelf="self-end">
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      mx: 1,
                      fontSize: "14px",
                      textTransform: "none",
                      height: "fit-content",
                      p: 0,
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>
            <MainButton
              content="Nimaz Timings"
              fs="12px"
              icon={<ScheduleIcon sx={{ mr: "5px" }} />}
              endIcon={<ArrowDropDownIcon />}
            />
          </Box>

          {/* Contact Info for Mobile */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: 2,
              mb: 2,
            }}
          >
            <Box
              sx={{
                display:{ xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <MainLink
                icon={<PhoneIcon sx={{ mr: 1 }} />}
                linkContent="PK: +92 334 1436311"
                linkHref="tel:+923341436311"
              />
              <MainLink
                icon={<EmailIcon sx={{ mr: 1 }} />}
                linkContent="deenguidanceinstitute@gmail.com"
                linkHref="mailto:deenguidanceinstitute@gmail.com"
              />
            </Box>
          </Box>

          {/* Menu icon for mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="toggle navigation menu"
              onClick={isMenuOpen ? handleCloseNavMenu : handleOpenNavMenu}
              color="inherit"
              sx={{
                zIndex: 1301,
                position: "relative",
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
                  width: "100vw",
                  maxWidth: "100vw",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "primary.main", // Dark background for menu
                  color: "white", // White text for readability
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu} sx={{
                display:{ xs: "none", md: "flex" }
              }}>
                <MainLink
                  icon={<PhoneIcon sx={{ mr: 1 }} />}
                  linkContent="PK: +92 334 1436311"
                  linkHref="tel:+923341436311"
                />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <MainLink
                  icon={<EmailIcon sx={{ mr: 1 }} />}
                  linkContent="deenguidanceinstitute@gmail.com"
                  linkHref="mailto:deenguidanceinstitute@gmail.com"
                />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
