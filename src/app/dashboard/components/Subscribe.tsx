import React, { useState } from "react";
import { Box, Typography, TextField, Snackbar, useTheme, useMediaQuery } from "@mui/material";
import MainButton from "../../../components/MainButton";
import SendIcon from '@mui/icons-material/Send';

const SubscribeComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubscribe = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: "16px",
        margin: "10px 0px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#00473E",
          color: "white",
          borderRadius: "16px",
          padding: "32px",
          width: isMobile ? "100%" : "55%",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 25px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        {/* Background Design */}
        <Box
          sx={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 80%)",
            zIndex: 1,
          }}
        />

        {/* Title Section */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "20px" : "28px",
            zIndex: 2,
          }}
        >
          Subscribe to Our Newsletter
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "14px" : "16px",
            marginBottom: "16px",
            zIndex: 2,
            opacity: 0.9,
          }}
        >
          Stay updated with our latest news, offers, and insights!
        </Typography>

        {/* Input and Button Section */}
        <Box
          sx={{
            zIndex: 2,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: {
                fontSize: "14px", // Smaller font size
                padding: "0px 0px", // Reduced padding
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "12px", // Smaller placeholder text
              },
            }}
            sx={{
              margin: "8px 0px",
              backgroundColor: "white",
              borderRadius: "8px",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          />
          <Box onClick={handleSubscribe}>
            <MainButton content="Subscribe" endIcon={<SendIcon sx={{ ml: 1 }} />} />
          </Box>
        </Box>

        {/* Snackbar for Success Message */}
        <Snackbar
          open={showMessage}
          message="Thank you! You have subscribed."
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          sx={{
            zIndex: 3,
          }}
        />
      </Box>
    </Box>
  );
};

export default SubscribeComponent;
