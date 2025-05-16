import type { HeroBanner } from "@/types/HeroBanner";
import { Box, Typography } from "@mui/material";
import React from "react";

const HeroBanner : React.FC <HeroBanner> = ({ bgImage, title }) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_APP_URL}${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "50vh", md: "70vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                },
            }}
        >
            <Box position="relative" zIndex={1} px={2}>
                <Typography
                    variant="h1"
                    sx={{
                        color: "white",
                        fontSize: { xs: "1.8rem", md: "2.5rem" },
                        fontWeight: 700,
                        lineHeight: 1.2,
                        textTransform: "uppercase",
                        mb: 2,
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    )
}

export default HeroBanner;