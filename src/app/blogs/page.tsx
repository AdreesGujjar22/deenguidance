"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Pagination, CircularProgress } from "@mui/material";
import BlogCard from "@/components/blogs/BlogCard";
import { useRouter } from "next/navigation";
import { BlogItem } from "../../types/Blog";
import BlogData from "@/data/blogs/BlogData";
import HeroBanner from "@/components/common/HeroBanner";
import PageSEO from "@/components/pageseo/PageSEO";

const Blogs: React.FC = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);

  // Fetch blogs from API on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const res = await fetch("/api/blog/list");
        // const data = await res.json();
        setBlogs(BlogData);
      } catch (err) {
        console.log("Error : ", err);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate pagination details
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const paginatedData = blogs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Use slug for navigation
  const handleCard = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 15 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" sx={{ mt: 15 }}>
        {error}
      </Typography>
    );
  }

  // Add "Not Found" logic if there are no blogs
  if (!loading && blogs.length === 0) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" sx={{ mt: 15 }}>
          No blogs found.
        </Typography>
      </Container>
    );
  }

  return (
    <>
    <PageSEO
    title="Blog — Deen Guidance | Articles on Quran, Islam & Faith"
    description="Read insightful blog posts on Quranic guidance, Islamic lifestyle, spirituality, parenting, and more. Learn and grow with authentic Islamic knowledge."
    canonicalUrl="https://www.deenguidance.com/blogs"
    openGraph={{
      url: 'https://www.deenguidance.com/blogs',
      type: 'website',
      title: 'Blog — Deen Guidance | Articles on Quran, Islam & Faith',
      description: 'Discover meaningful Islamic blog content: tips on Quran learning, Islamic values, parenting, and modern-day challenges — rooted in the Deen.',
      image: '/images/blogs/bg-blog.jpg', // Replace with your actual OG image
      siteName: 'Deen Guidance',
    }}
    twitter={{
      cardType: 'summary_large_image',
      siteHandle: '@DeenGuidance',
      creatorHandle: '@DeenGuidance',
      title: 'Islamic Blog — Quran, Parenting & Spiritual Growth | Deen Guidance',
      description: 'Explore powerful reflections and practical advice for Muslims worldwide. New blogs weekly on faith, family, and personal growth.',
      image: '/images/blogs/bg-blog.jpg', // Replace with your Twitter image
    }}
    additionalMetaTags={[
      { name: 'author', content: 'Deen Guidance Team' },
      { name: 'robots', content: 'index,follow' },
      {
        name: 'keywords',
        content:
          'Islamic blog, Quran articles, Muslim parenting, Islamic lifestyle, spiritual development, Deen Guidance blog, tafsir blog, Islamic guidance',
      },
    ]}
     />
      <Box>
        <HeroBanner title="Explore our latest insights" bgImage="/images/blogs/bg-blog.jpg" />
        <Container maxWidth="lg">
          {/* Responsive Grid for Blog Cards */}
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              },
              justifyItems: "center",
              pt: 15, backgroundColor: "#f9f9f9",
            }}
          >
            {paginatedData.map((blog) => (
              <Box key={blog._id} onClick={() => handleCard(blog.slug)} sx={{ width: "100%" }}>
                <BlogCard _id={blog._id} title={blog.title} description={blog.description} image={blog.image} slug={blog.slug} content={blog.content} />
              </Box>
            ))}
          </Box>
        </Container>
        {/* Pagination Component */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination count={totalPages} page={page} onChange={handleChange} color="primary" />
        </Box>
      </Box>
    </>
  );
};

export default Blogs;
