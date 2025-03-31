"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import BlogData from "@/data/blogs/BlogData";
import { BlogItem } from "@/types/Blog";
import { useParams } from "next/navigation";

const BlogComponent = () => {
  const { id } = useParams();
  const [content, setContent] = useState<BlogItem>({
    id: 0,
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (id) {
      const blog = BlogData.find((item) => item.id === Number(id));
      if (blog) setContent(blog);
    }
  }, [id]);

  const handleNavigation = (direction: "prev" | "next") => {
    if (!id) return;
    const currentId = Number(id);
    const newId = direction === "prev" ? currentId - 1 : currentId + 1;
    const blogExists = BlogData.some((item) => item.id === newId);
  
    if (blogExists) {
      window.location.href = `/blogs/${newId}`;
    }
  };

  if (!content) return <Typography>Loading...</Typography>;  

  return (
    <Container disableGutters maxWidth={false}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${content?.image})`,
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
            {content?.title}
          </Typography>
        </Box>
      </Box>

      {/* Blog Content */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            borderBottom: "2px solid #004d40",
            mb: 4,
          }}
        >
          <CardContent sx={{ px: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 600,
                color: "#2D2D2D",
                mb: 4,
              }}
            >
              {content?.title}
            </Typography>
            <Box
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#444",
              }}
              dangerouslySetInnerHTML={{ __html: content?.description }}
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="outlined"
            sx={{
              color: "#004d40",
              fontSize: "1.1rem",
              fontWeight: 600,
              borderColor: "#004d40",
              "&:hover": { backgroundColor: "#004d40", color: "white" },
            }}
            onClick={() => handleNavigation("prev")}
          >
            ← Previous
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#004d40",
              fontSize: "1.1rem",
              fontWeight: 600,
              borderColor: "#004d40",
              "&:hover": { backgroundColor: "#004d40", color: "white" },
            }}
            onClick={() => handleNavigation("next")}
          >
            Next →
          </Button>
        </Stack>
      </Container>
    </Container>
  );
};

export default BlogComponent;