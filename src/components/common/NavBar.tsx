"use client";
import * as React from "react";
import { 
  Home as HomeIcon,
  Menu as MenuIcon, 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  // Article as ArticleIcon,
  Facebook as FacebookIcon, 
  LinkedIn as LinkedInIcon,
  Schedule as ScheduleIcon, 
  Instagram as InstagramIcon,
  ArrowBack as ArrowBackIcon, 
  LocationOn as LocationOnIcon , 
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import {Typography,AppBar,Box,Toolbar,IconButton , Drawer , Container , Button} from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import MainButton from "./MainButton";
import Construction from "./Construction";
import MainLink from "./MainLink";
import Link from "next/link";

const pages = [
  { name: "Home", link: "/", icon: <HomeIcon /> },
  // { name: "Blogs", link: "/blogs", icon: <ArticleIcon /> },
  { name: "Contact Us", link: "/contactus", icon: <PhoneIcon /> },
];

function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        // backgroundColor: scrolling ? "#004B39" : "transparent",
        fontFamily: "Raleway",
      }}
    >
      <Construction />
      <Container
        maxWidth="xl"
        sx={{
          width: "90%",
          margin: "auto",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: { xs: "start", md: "space-between" } }}>
          {/* Items for desktop */}
          <Box sx={{
            display: {
              xs: "none", md: "flex",
              width: "30px",
              height: "auto",
            },
            alignItems: "center"
          }}>
            <Image
              src={Logo}
              alt="Logo"
              style={{
                borderRadius: "50%",
                width : "100%",
                height : "100%",
                scale :3.5
              }}
            />
          </Box>
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
              <Box display="flex" alignSelf="self-end" sx={{justifyContent : "space-between"}}>
                {pages.map((page, index) => (
                  <Link key={index} href={page.link} passHref
                    style={{
                      textDecoration: "none"
                    }}

                  >
                    <Button
                      sx={{
                        color: "white",
                        display: "block",
                        mx: 2,
                        fontSize: "15px",
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
          </Box>
          <Box sx={{display: { xs: "none", md: "flex" } }}>
          <MainButton
              content="Nimaz Timings"
              fs="12px"
              icon={<ScheduleIcon sx={{ mr: "5px" }} />}
              endIcon={<ArrowDropDownIcon />}
            />
            {/* <div id="google_translate_element"></div> */}
          </Box>

          {/*For mobile */}
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
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              sx={{
                zIndex: 1300,
                "& .MuiDrawer-paper": {
                  width: "70vw",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 2,
                },
              }}
            >
              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{ position: "absolute", top: 10, left: 10 }}
              >
                <ArrowBackIcon sx={{ color: "white" }} />
              </IconButton>
              {/* Logo Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 2,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  width={60}
                  height={60}
                  style={{
                    scale: 2,
                    borderRadius: "50%",
                  }}
                />
              </Box>

              {/* Navigation Items */}
              <Box sx={{ flexGrow: 1, mt: 2 }}>
                {pages.map((page, index) => (
                  <Link key={index} href={page.link} passHref style={{ textDecoration: "none" }}>
                    <Button
                      startIcon={page.icon}
                      sx={{
                        color: "white",
                        justifyContent: "flex-start",
                        width: "100%",
                        textTransform: "none",
                        fontSize: "14px",
                        padding: "10px 16px",
                        fontFamily: "Raleway",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>

              {/* Contact Section */}
              <Box sx={{ mt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.1)", pt: 2 }}>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: 400, fontSize: "15px", mb: 2, letterSpacing: "3px" }}
                >
                  CONTACT INFO
                </Typography>

                <Box>
                  <MainLink
                    icon={<PhoneIcon sx={{ mr: 1 }} />}
                    linkContent="PK: +92 334 1436311"
                    linkHref="tel:+923341436311"
                  />
                  <MainLink
                    icon={<LocationOnIcon sx={{ mr: 1 }} />}
                    linkContent="Lahore, Pakistan"
                    linkHref="https://maps.app.goo.gl/thCtQKjCkAmTUjZM9"
                  />
                </Box>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center", mt: 2 }}>
                  <Link
                    href="mailto:deenguidanceinstitute@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white", transition: "transform 0.3s, color 0.3s"
                    }}
                  >
                    <EmailIcon />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1E3ja5EfXS/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white", transition: "transform 0.3s, color 0.3s",
                      // "&:hover": {
                      //   color: "rgba(200,200,200,1)",
                      // },
                    }}
                  >
                    <FacebookIcon />
                  </Link>
                  <Link
                    href="https://www.instagram.com/deenguidance.institute/profilecard/?igsh=bG9sM2wya2h5ajM1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white", transition: "transform 0.3s, color 0.3s",
                      // "&:hover": {
                      //   color: "rgba(200,200,200,1)",
                      // },
                    }}
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/deen-guidance-institute-06ba35343"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white", transition: "transform 0.3s, color 0.3s",
                      // "&:hover": {
                      //   color: "rgba(200,200,200,1)",
                      // },
                    }}
                  >
                    <LinkedInIcon />
                  </Link>
                </Box>
              </Box>
            </Drawer>
          </Box>
          <Box sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center", justifyContent: "center",
            width: "100%"
          }}>
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              style={{
                marginTop: 2,
                scale: 1.4,
                borderRadius: "50%",
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
