"use client";
import React, { useState } from "react";
import { Button, Box, Dialog, DialogContent, IconButton, Typography, ButtonProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface MainButtonProps extends ButtonProps {
  content: string;
  icon?: React.ReactNode;
  fs?: string;
  endIcon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  videoUrl?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  content,
  icon,
  fs = "18px",
  endIcon,
  videoUrl = "",
  onClick,
  bgColor="secondary.main",
  textColor="white",
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (videoUrl) {
      setOpen(true);
    }
    if (onClick) {
      onClick(event);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
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
            {...rest}
            sx={{
              px: { xs: 2, md: 3 },
              py: { xs: 1, md: 1.2 },
              borderRadius: "30px",
              fontSize: { xs: "11px", md: fs },
              fontWeight: "bold",
              backgroundColor: bgColor,
              textTransform: "none",
              color: textColor,
              boxShadow: "0px 4px 6px secondary.main",
              ...rest.sx,
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
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "black" }}>
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
