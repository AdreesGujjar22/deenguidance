"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Pagination } from "@mui/material";
import BlogCard from "@/components/blogs/BlogCard";
import { useRouter } from "next/navigation";
import { BlogItem } from "../../types/Blog";
import HeroBanner from "@/components/common/HeroBanner";
import Loading from "@/components/common/Loading";

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
        const res = await fetch("/api/blog/list");
        const data = await res.json();
        setBlogs(data);
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
      <Loading />
    );
  }

  if (error) {
    return (
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center",
          minHeight: "60vh",
          gap: 2,
          px: 2,
        }}
      >
        <Typography variant="h5" color="error" align="center" gutterBottom>
          Oops! Something went wrong
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {error}
        </Typography>
      </Box>
    );
  }

  // Add "Not Found" logic if there are no blogs
  if (!loading && blogs.length === 0) {
    return (
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
            minHeight: "60vh",
            gap: 2,
          }}
        >
          <Typography variant="h4" align="center" color="text.primary" gutterBottom>
            No blogs available yet
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            Check back soon for new content!
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
      <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
        <HeroBanner title="Explore Our Latest Insights" bgImage="/images/blogs/bg-blog.jpg" />
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          {/* Responsive Grid for Blog Cards */}
          <Box
            sx={{
              display: "grid",
              gap: 4,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              mb: 6,
            }}
          >
            {paginatedData.map((blog, index) => (
              <Box 
                key={blog._id} 
                onClick={() => handleCard(blog.slug)} 
                sx={{ 
                  cursor: 'pointer',
                  height: '100%',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  '@keyframes fadeInUp': {
                    from: {
                      opacity: 0,
                      transform: 'translateY(30px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
                role="article"
                aria-label={`Read blog: ${blog.title}`}
              >
                <BlogCard 
                  _id={blog._id} 
                  title={blog.title} 
                  description={blog.description} 
                  image={blog.image} 
                  slug={blog.slug} 
                  content={blog.content} 
                />
              </Box>
            ))}
          </Box>
          
          {/* Pagination Component */}
          {totalPages > 1 && (
            <Box 
              sx={{ 
                display: "flex", 
                justifyContent: "center", 
                mt: 4,
                pb: 4,
              }}
            >
              <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handleChange} 
                color="primary"
                size="large"
                showFirstButton
                showLastButton
                sx={{
                  '& .MuiPaginationItem-root': {
                    fontWeight: 600,
                  },
                }}
              />
            </Box>
          )}
        </Container>
      </Box>
  );
};

export default Blogs;
