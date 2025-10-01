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
import BlogData from "@/data/blogs/BlogData";
import { BlogItem } from "@/types/Blog";
import HeroBanner from "@/components/common/HeroBanner";
import PageSEO from "@/components/pageseo/PageSEO";

const BlogComponent = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [content, setContent] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading  ...sluf...........")
    console.log("Loading  ..............")
    if (!slug || slug === "undefined") return;

    const fetchBlog = async () => {
      try {
        setLoading(true)
        // const findBlog = BlogData?.find((item) => {
        //   return item.slug == slug;
        // })
        // if (findBlog) {
        //   return setContent(findBlog);
        // }
        const res = await fetch(`/api/blog/${slug}`);
        console.log("res : ----------- ",res)
        if (!res.ok) {
          setContent(null);
        } else {
          const data = await res.json();
          setContent(data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setContent(null);
      } finally {
        setLoading(false)
      }
    };
    fetchBlog();
  }, [slug]);

  const handleNavigation = (direction: "prev" | "next") => {

    if (!content || BlogData.length === 0) return;
    const index = BlogData.findIndex((blog) => blog.slug === content.slug);
    let newIndex = index;
    if (direction === "prev") {
      const findPrev = BlogData[index - 1];
      if (findPrev.slug) {
        router.push(`/blogs/${findPrev?.slug}`);
        newIndex = index - 1;
      }
    } else {
      const findPrev = BlogData[index + 1];
      if (findPrev.slug) {
        router.push(`/blogs/${findPrev.slug}`);
        newIndex = index + 1;
      }
    }
    if (newIndex >= 0 && newIndex < BlogData.length) {
      router.push(`/blogs/${BlogData[newIndex].slug}`);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 20 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!content) {
    return (
      <Container disableGutters maxWidth={false}>
        <Typography variant="h4" align="center" sx={{ mt: 20 }}>
          Blog not found.
        </Typography>
      </Container>
    );
  }

  return (
    <>
    <PageSEO
        title={content?.title}
        description={content?.description}
        canonicalUrl={`https://deenguidance.com/blog/${content?.slug}`}
        openGraph={{
          url: `https://deenguidance.com/blog/${content?.slug}`,
          image: content?.image,
          siteName: 'Deen Guidance',
        }}
        twitter={{
          siteHandle: '@DeenGuidance',
          creatorHandle: '@AuthorHandle',
        }}
        additionalMetaTags={[
          { name: 'author', content: "Mufti Zafer ullah" },
          { name: 'robots', content: 'index,follow' },
        ]}
      />
      <Container disableGutters maxWidth={false}>
        {/* Hero Section */}

        <HeroBanner title={content?.title} bgImage={content?.image} />

        {/* Blog Content */}
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
          <Card
            sx={{
              // borderRadius: 2,
              boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
              borderBottom: "2px solid #004d40",
              backgroundColor: "transparent",
              px: { xs: 1, md: 2 },
              mb: { xs: 3, md: 4 },
            }}
          >
            <CardContent sx={{ px: { xs: 2, md: 3 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontWeight: 600,
                  color: "#2D2D2D",
                  mb: 4,
                }}
              >
                {content.title}
              </Typography>
              <Box
                sx={{
                  fontSize: { xs: "1rem", md: "1.0625rem" },
                  lineHeight: 1.9,
                  color: "text.primary",
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
    </>
  );
};

export default BlogComponent;
