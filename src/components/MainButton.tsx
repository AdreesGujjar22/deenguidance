import React from "react";
import { Button, Box } from "@mui/material";

interface mainButtonProps {
  content: string;
  icon?: React.ReactNode;
  fs?:string;
  endIcon ? : React.ReactNode;
}

const MainButton: React.FC<mainButtonProps> = ({ content ,icon , fs='18px' , endIcon}) => {
  return (
    <Box sx={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      height : "100px",
    }}>
      <Box sx={{
        position: "relative",
        zIndex : 2,
        transition: "transform 0.3s, background-color 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}>
        <Button
          sx={{
            px: { xs: 4, md: 4 },
            py: { xs: 1, md: 1.5 },
            borderRadius: "30px",
            fontSize: { xs: "14px", md: fs },
            fontWeight: "bold",
            backgroundColor: "secondary.main",
            textTransform: "none",
            color: "white",
            boxShadow: "0px 4px 6px secondary.main",
          }}
        >
          {icon } {content} {endIcon}
        </Button>
        <Box
          sx={{
            position: "absolute",
            zIndex: -1,
            left: 7,
            top: 6,
            backgroundColor: "secondary.light",
            width: "100%",
            height: "100%",
            borderRadius: "30px",
          }}
        >
        </Box>
      </Box>
    </Box>
  )
}

export default MainButton;