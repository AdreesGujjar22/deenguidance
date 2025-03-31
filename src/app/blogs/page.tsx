"use client"
import React, { useState } from "react";
import { Box, Container, Typography, Pagination } from "@mui/material";
import BlogCard from "@/components/blogs/BlogCard";
import BlogData from "@/data/blogs/BlogData";
import { useRouter } from 'next/navigation';

const Blogs: React.FC = () => {
  const router = useRouter()
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(BlogData.length / itemsPerPage);
  const paginatedData = BlogData.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleCard = (id: number) => {
    console.log("card .............", id);
    router.push(`/blogs/${id}`);
  }

  return (
    <Box sx={{ pt: 15, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="subtitle1"
          align="center"
          paragraph
          sx={{ color: "text.secondary", mb: 4, fontSize: { xs: 20, md: 25 }, fontFamily: "CinzelDecorative" }}
        >
          Explore our latest insights.
        </Typography>

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
          }}
        >
          {paginatedData.map((blog, index) => (
            <div key={index} onClick={() => handleCard(blog?.id)}>
              <BlogCard id={blog?.id} title={blog?.title} description={blog?.description} image={blog?.image} />
            </div>
          ))}
        </Box>

        {/* Pagination Component */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination count={totalPages} page={page} onChange={handleChange} color="primary" />
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;
