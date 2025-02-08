import React, { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

const quotes = [
  {
    ayat: "Ayat 58 (Quran)",
    text: "So whenever guidance comes to you from Me, then whoever follows my guidance, then there will neither be any fear on them nor will they grieve."
  },
  {
    ayat: "Ayat 286 (Quran)",
    text: "Allah does not burden a soul beyond that it can bear."
  },
  {
    ayat: "Ayat 13:28 (Quran)",
    text: "Verily, in the remembrance of Allah do hearts find rest."
  }
];

const IslamicQuoteCard: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
    sx={{
      width : "w-screen",
      py : 4,
      backgroundColor : "white"
    }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          maxWidth: 600,
          mx: "auto",
          position: "relative",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        {/* Header */}
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "0.9rem",
            color: "gray",
            textTransform: "uppercase",
            letterSpacing: 2,
            mb: 1,
          }}
        >
          Islamic Quotes From Quran
        </Typography>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "CinzelDecorative",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Islamic Quotes
        </Typography>

        {/* Icon */}
        <Box
          sx={{
            display: "inline-block",
            p: 2,
            backgroundColor: "#f9c74f",
            borderRadius: "50%",
            mb: 2,
          }}
        >
          <BookRoundedIcon sx={{ color: "#fff", fontSize: 40 }} />
        </Box>

        {/* Quote Display */}
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.2rem",
              fontWeight: 600,
              mb: 1,
              fontFamily: "CinzelDecorative",
            }}
          >
            {quotes[index].ayat}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "gray",
              fontStyle: "italic",
              mx: "auto",
              maxWidth: 500,
            }}
          >
            {quotes[index].text}
          </Typography>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            mt: 4,
            mx: "auto",
            width: "40%",
            borderBottomWidth: 2,
            borderColor: "#f9c74f",
          }}
        />
      </Box>
    </Box>
  );
};

export default IslamicQuoteCard;
