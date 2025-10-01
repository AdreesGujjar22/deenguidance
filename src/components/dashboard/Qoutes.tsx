'use client';

import React, { useState, useRef, useCallback } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight, FormatQuote } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

interface Quote {
  ayat: string;
  text: string;
}

const quotes: Quote[] = [
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay functionality
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isAutoplayPaused) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
      }
    }, 5000);
  }, [isAutoplayPaused]);

  React.useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startAutoplay]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    startAutoplay();
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
    startAutoplay();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <Box 
      component="section"
      aria-label="Islamic Quotes Carousel"
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        backgroundColor: "#fafafa",
        position: "relative",
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
      onFocus={() => setIsAutoplayPaused(true)}
      onBlur={() => setIsAutoplayPaused(false)}
    >
      <Box
        sx={{
          maxWidth: { xs: "90%", sm: "80%", md: 900 },
          mx: "auto",
          position: "relative",
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: 3,
              mb: 1,
              fontWeight: 600,
            }}
          >
            Islamic Quotes From Quran
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontFamily: "var(--font-cinzel-decorative)",
              fontWeight: 700,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              color: "primary.main",
              mb: 2,
            }}
          >
            Words of Wisdom
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: "secondary.main",
              mx: "auto",
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Carousel Container */}
        <Box
          sx={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            overflow: "hidden",
            minHeight: { xs: 320, sm: 280, md: 300 },
          }}
        >
          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrevious}
            aria-label="Previous quote"
            sx={{
              position: "absolute",
              left: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
                transform: "translateY(-50%) scale(1.1)",
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            aria-label="Next quote"
            sx={{
              position: "absolute",
              right: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
                transform: "translateY(-50%) scale(1.1)",
              },
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Carousel Slides */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 8, sm: 10, md: 12 },
              py: { xs: 4, md: 6 },
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrevious();
                  }
                }}
                style={{
                  width: "100%",
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    mb: 3,
                    color: "secondary.main",
                    opacity: 0.3,
                  }}
                >
                  <FormatQuote sx={{ fontSize: { xs: 48, md: 64 }, transform: "rotate(180deg)" }} />
                </Box>

                {/* Quote Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    lineHeight: 1.8,
                    color: "text.primary",
                    fontStyle: "italic",
                    mb: 3,
                    maxWidth: 700,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  &quot;{quotes[currentIndex].text}&quot;
                </Typography>

                {/* Quote Source */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 2,
                      backgroundColor: "secondary.main",
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      color: "text.secondary",
                      fontWeight: 600,
                      fontFamily: "var(--font-cinzel-decorative)",
                    }}
                  >
                    {quotes[currentIndex].ayat}
                  </Typography>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Pagination Dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1.5,
              pb: 3,
              position : "absolute",
              bottom : 0,
              left : "50%"
            }}
          >
            {quotes.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  startAutoplay();
                }}
                role="button"
                aria-label={`Go to quote ${index + 1}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    startAutoplay();
                  }
                }}
                sx={{
                  width: currentIndex === index ? 32 : 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: currentIndex === index ? "primary.main" : "grey.300",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: currentIndex === index ? "primary.dark" : "grey.400",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IslamicQuoteCard;
