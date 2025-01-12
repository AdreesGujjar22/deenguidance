"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
} from "@mui/material";
import MainButton from "../../components/MainButton";
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
  return (
    <Box sx={{
      backgroundColor: "white"
    }}>
      <Box sx={{
        padding: "24px",
        paddingTop : {xs : "100px",md :"135px"},
        maxWidth: "900px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Raleway",
      }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: "1.25rem", fontWeight: "bold", fontFamily: "CinzelDecorative" }}
        >
          We’re here to answer your enquiries.
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ fontSize: "0.875rem", color: "#555" }}>
          Please fill in your details into our form below, and we will be in touch ASAP.
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ fontSize: "0.875rem", color: "#555" }}>
          We look forward to hearing from you!
        </Typography>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="firstName" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>First Name :</label>
            <TextField
              id="firstName"
              variant="outlined"
              fullWidth
              required
              size="small"
              sx={{ marginTop: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="lastName" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Last Name :</label>
            <TextField
              id="lastName"
              variant="outlined"
              fullWidth
              required
              size="small"
              sx={{ marginTop: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="email" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Email :</label>
            <TextField
              id="email"
              variant="outlined"
              fullWidth
              required
              type="email"
              size="small"
              sx={{ marginTop: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="phone" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Phone :</label>
            <TextField
              id="phone"
              variant="outlined"
              fullWidth
              required
              type="tel"
              size="small"
              sx={{ marginTop: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="message" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Message :</label>
            <TextField
              id="message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              size="small"
              sx={{ marginTop: "8px" }}
            />
          </div>
          <MainButton content="Submit" endIcon={<SendIcon sx={{ ml: "15px" }} />} />
        </Box>
      </Box>
    </Box>
  );
}
