import { Box, Link } from "@mui/material";
import React from "react";

interface mainLinkProps {
    icon : React.ReactNode;
    linkContent?:string; 
    linkHref? : string;
}

const MainLink : React.FC<mainLinkProps> = ({icon , linkContent = false,linkHref})=>{
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              color: "rgba(200,200,200,1)",
            },
          }}>
            {icon}
            {
                linkContent ? <Link
                href={linkHref}
                sx={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                {linkContent}
              </Link> : ''
            }
          </Box>
    );
}

export default MainLink;