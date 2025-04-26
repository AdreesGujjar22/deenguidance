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
  CircularProgress,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";

interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
}

const BlogComponent = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [content, setContent] = useState<BlogItem | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug || slug === "undefined") return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) {
          setContent(null);
        } else {
          const data = await res.json();
          setContent(data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setContent(null);
      }
    };

    // Fetch all blogs for navigation
    const fetchAllBlogs = async () => {
      try {
        const res = await fetch(`/api/blog/list`);
        const data = await res.json();
        setAllBlogs(data);
      } catch (error) {
        console.error("Error fetching all blogs:", error);
      }
    };

    Promise.all([fetchBlog(), fetchAllBlogs()]).finally(() => {
      setLoading(false);
    });
  }, [slug]);

  const handleNavigation = (direction: "prev" | "next") => {
    if (!content || allBlogs.length === 0) return;
    const index = allBlogs.findIndex((blog) => blog.slug === content.slug);
    let newIndex = index;
    if (direction === "prev") {
      newIndex = index - 1;
    } else {
      newIndex = index + 1;
    }
    if (newIndex >= 0 && newIndex < allBlogs.length) {
      router.push(`/blogs/${allBlogs[newIndex].slug}`);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!content) {
    return (
      <Container disableGutters maxWidth={false}>
        <Typography variant="h4" align="center" sx={{ mt: 8 }}>
          Blog not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container disableGutters maxWidth={false}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_APP_URL}${content.image})`,
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
            {content.title}
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
              {content.title}
            </Typography>
            <Box
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#444",
              }}
              dangerouslySetInnerHTML={{ __html: content.content }}
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
