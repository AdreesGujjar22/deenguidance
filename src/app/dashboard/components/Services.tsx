'use client'
import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ServiceCard from "../../../components/ServiceCard";
import BookIcon from "@mui/icons-material/Book";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import TranslateIcon from "@mui/icons-material/Translate";

const ServicesBanner: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: { xs: 4, sm: 6, md: 10, lg: 15 },
                backgroundColor: "#fdfdfd",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.1,
                    zIndex: 0,
                }}
            />

            <Box sx={{ zIndex: 1, display: "flex", alignItems: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#d4af37", fontSize: { xs: 30, sm: 35, md: 40 } }} />
            </Box>

            <Typography
                variant="subtitle1"
                sx={{
                    color: "#6c6c6c",
                    fontWeight: "bold",
                    zIndex: 1,
                    fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                    fontFamily: 'CinzelDecorative',
                }}
            >
                What We Offer
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    fontFamily: 'CinzelDecorative',
                    color: "#000",
                    letterSpacing: "1px",
                    zIndex: 1,
                    fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
                }}
            >
                OUR SERVICES
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    gap: { xs: 2, sm: 3, md: 4 },
                    p: { xs: 0, sm:3, md: 1 , xlg:4 },
                }}
            >
                <ServiceCard
                    title="Quran Learning"
                    description="Learn to recite and understand the Quran with personalized guidance tailored to all levels of learners."
                    icon={<BookIcon sx={{ color: "white", fontSize: { xs: 24, sm: 28, md: 32 } }} />}
                />
                <ServiceCard
                    title="Tafseer Learning"
                    description="Explore the deeper meanings and interpretations of the Quran to gain profound insights into its teachings."
                    icon={<MenuBookIcon sx={{ color: "white", fontSize: { xs: 24, sm: 28, md: 32 } }} />}
                />
                <ServiceCard
                    title="Hadith Learning"
                    description="Delve into the sayings and traditions of the Prophet (PBUH) to enrich your understanding of Islamic practices."
                    icon={<ImportContactsIcon sx={{ color: "white", fontSize: { xs: 24, sm: 28, md: 32 } }} />}
                />
                <ServiceCard
                    title="Arabic Learning"
                    description="Master the Arabic language to connect with Islamic texts and enhance your understanding of classical literature."
                    icon={<TranslateIcon sx={{ color: "white", fontSize: { xs: 24, sm: 28, md: 32 } }} />}
                />

            </Box>
        </Box>
    );
};

export default ServicesBanner;
