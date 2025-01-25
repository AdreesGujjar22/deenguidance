"use client";
import React, { useState } from "react";
import { Button, Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface MainButtonProps {
  content: string;
  icon?: React.ReactNode;
  fs?: string;
  endIcon?: React.ReactNode;
  videoUrl?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  content,
  icon,
  fs = "18px",
  endIcon,
  videoUrl = "", 
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (videoUrl) setOpen(true);
    else console.warn("No video URL provided for MainButton.");
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            transition: "transform 0.3s, background-color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Button
            sx={{
              px: { xs: 2, md: 3 },
              py: { xs: 1, md: 1.2 },
              borderRadius: "30px",
              fontSize: { xs: "11px", md: fs },
              fontWeight: "bold",
              backgroundColor: "secondary.main",
              textTransform: "none",
              color: "white",
              boxShadow: "0px 4px 6px secondary.main",
            }}
            onClick={handleOpen}
            aria-label={`Open video: ${content}`}
          >
            {icon} {content} {endIcon}
          </Button>
          <Box
            sx={{
              position: "absolute",
              zIndex: -1,
              left: 5,
              top: 5,
              backgroundColor: "secondary.light",
              width: "100%",
              height: "100%",
              borderRadius: "30px",
            }}
          />
        </Box>
      </Box>

      {/* Video Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "15px",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent
          sx={{
            position: "relative",
            padding: 0,
            "& iframe": {
              width: "100%",
              height: "400px",
              "@media (max-width: 600px)": {
                height: "250px",
              },
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              zIndex: 10,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
            aria-label="Close video"
          >
            <CloseIcon />
          </IconButton>

          {videoUrl ? (
            <iframe
              src={`${videoUrl}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                backgroundColor: "black",
              }}
            >
              <Typography color="white" variant="h6">
                No video URL provided
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MainButton;
