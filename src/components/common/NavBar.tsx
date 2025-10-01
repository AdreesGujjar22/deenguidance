"use client";
import * as React from "react";
import {
  School as SchoolIcon,
  Menu as MenuIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Article as ArticleIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Schedule as ScheduleIcon,
  Instagram as InstagramIcon,
  ArrowBack as ArrowBackIcon,
  LocationOn as LocationOnIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  Container,
  Button,
  Menu,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/images/web-logo.png";
import MainButton from "./MainButton";
import MainLink from "./MainLink";
import Link from "next/link";
import ReactFlagsSelect from "react-flags-select";
import { PrayerTimes } from "../../types/NavBar"

const pages = [
  { name: "Courses", link: "/courses", icon: <SchoolIcon /> },
  { name: "Blogs", link: "/blogs", icon: <ArticleIcon /> },
  { name: "Contact Us", link: "/contactus", icon: <PhoneIcon /> },
];

function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState("PK"); // Default Pakistan
  const [prayerTimes, setPrayerTimes] = React.useState<PrayerTimes | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [loading, setLoading] = React.useState(false);

  const handleNamazClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    fetchPrayerTimes("pakistan");
  };

  // Close Dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Fetch Namaz Timings
  const fetchPrayerTimes = async (country: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://muslimsalat.com/${country}.json`);
      const data = await response.json();
      if (data.status_code === 1) {
        setPrayerTimes(data.items[0]);
      }
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
    setLoading(false);
  };

  // Handle Country Change
  const handleCountryChange = (code: string) => {
    setSelectedCountry(code);
    fetchPrayerTimes(code.toLowerCase());
  };

  return (
    <AppBar
      position="sticky"
      color="primary"
      enableColorOnDark
      component="nav"
      role="navigation"
      aria-label="Main navigation"
      sx={{
        boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
        backgroundColor: 'primary.main',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "90%",
          margin: "auto",
        }}
      >
        <Toolbar
          disableGutters
          sx={{ 
            justifyContent: { xs: "start", md: "space-between" }, 
            minHeight: { xs: 64, sm: 72 },
            py: 1,
          }}
        >
          {/* Items for desktop */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                width: "30px",
                height: "auto",
              },
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Image
                src={Logo}
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  scale: 2,
                }}
              />
            </Link>
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
              <Box
                display="flex"
                alignSelf="self-end"
                sx={{ justifyContent: "space-between" }}
              >
                {pages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.link}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      sx={{
                        color: "primary.contrastText",
                        display: "block",
                        mx: 2,
                        fontSize: "15px",
                        textTransform: "none",
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: '2px',
                          backgroundColor: 'secondary.main',
                          transition: 'width 0.3s ease-in-out',
                        },
                        '&:hover::after': {
                          width: '80%',
                        },
                        '&:focus-visible': { 
                          outline: '3px solid #DB9E30', 
                          outlineOffset: 2,
                        },
                      }}
                      aria-label={`Navigate to ${page.name}`}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MainButton
              content="Namaz Timings"
              fs="12px"
              icon={<ScheduleIcon sx={{ mr: "5px" }} />}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleNamazClick}
            />
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ mt: 1 }}>
              <MenuItem>
                <ReactFlagsSelect selected={selectedCountry} onSelect={handleCountryChange} searchable aria-label="Choose country for prayer times" />
              </MenuItem>
              <MenuItem disabled>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>
                  Prayer Times
                </Typography>
              </MenuItem>
              {loading ? (
                <MenuItem>
                  <CircularProgress size={24} sx={{ margin: "auto" }} />
                </MenuItem>
              ) : prayerTimes ? (
                <>
                  <MenuItem>Fajr: {prayerTimes.fajr}</MenuItem>
                  <MenuItem>Dhuhr: {prayerTimes.dhuhr}</MenuItem>
                  <MenuItem>Asr: {prayerTimes.asr}</MenuItem>
                  <MenuItem>Maghrib: {prayerTimes.maghrib}</MenuItem>
                  <MenuItem>Isha: {prayerTimes.isha}</MenuItem>
                </>
              ) : (
                <MenuItem>No Data Available</MenuItem>
              )}
            </Menu>

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
              role="dialog"
              aria-label="Mobile navigation menu"
              sx={{
                zIndex: 1300,
                "& .MuiDrawer-paper": {
                  width: { xs: "80vw", sm: "70vw" },
                  maxWidth: "400px",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 3,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
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
                />
              </Box>

              {/* Navigation Items */}
              <Box sx={{ flexGrow: 1, mt: 2 }}>
                {pages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.link}
                    passHref
                    style={{ textDecoration: "none" }}
                  >
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
              <Box
                sx={{
                  mt: 2,
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  pt: 2,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "15px",
                    mb: 2,
                    letterSpacing: "3px",
                  }}
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
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Link
                    href="mailto:deenguidanceinstitute@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      transition: "transform 0.3s, color 0.3s",
                    }}
                  >
                    <EmailIcon />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1E3ja5EfXS/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      transition: "transform 0.3s, color 0.3s",
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
                      color: "white",
                      transition: "transform 0.3s, color 0.3s",
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
                      color: "white",
                      transition: "transform 0.3s, color 0.3s",
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
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              style={{
                marginTop: 2,
                scale: 0.8,
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
