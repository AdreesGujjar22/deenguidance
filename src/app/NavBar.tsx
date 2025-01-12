"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import MainButton from "../components/MainButton";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MainLink from "../components/MainLink";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
const pages = [
  {
    name : "Home",
    link : "/"
  }, 
  {
    name : "Contact",
    link : "/contactus"
  }
];

function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: scrolling ? "#004B39" : "transparent",
        fontFamily: "Raleway",
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
              <Box display="flex" alignSelf="self-end">
                {pages.map((page,index) => (
                  <Link key={index} href={page.link} passHref style={{
                    textDecoration : "none"
                  }} >
                  <Button
                    sx={{
                      color: "white",
                      display: "block",
                      mx: 2,
                      fontSize: "11px",
                      textTransform: "none",
                      fontFamily: "Raleway",
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
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

          {/* Drawer for mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="toggle navigation drawer"
              onClick={() => setDrawerOpen(true)}
              color="inherit"
              sx={{
                zIndex: 1301,
                position: "relative",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              sx={{
                zIndex: 1300,
                "& .MuiDrawer-paper": {
                  width: "100vw",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{ position: "absolute", top: 16, right: 16 }}
              >
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
              {pages.map((page,index) => (
                <Link key={index} href={page.link} passHref 
                style={{
                  textDecoration : "none"
                }} 
                >
                <Button
                  sx={{
                    color: "white",
                    display: "block",
                    mx: 2,
                    fontSize: "11px",
                    textTransform: "none",
                    fontFamily: "Raleway",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
              ))}
              <MenuItem>
                <MainLink
                  icon={<PhoneIcon sx={{ mr: 1 }} />}
                  linkContent="PK: +92 334 1436311"
                  linkHref="tel:+923341436311"
                />
              </MenuItem>
              <MenuItem>
                <MainLink
                  icon={<EmailIcon sx={{ mr: 1 }} />}
                  linkContent="deenguidanceinstitute@gmail.com"
                  linkHref="mailto:deenguidanceinstitute@gmail.com"
                />
              </MenuItem>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
