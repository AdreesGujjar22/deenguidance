"use client";
import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";
import BlogTableRow from "../../components/admin/BlogTableRow";
import { BlogItem } from "../../types/Blog";

export default function BlogList() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog/list");
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" sx={{ mt: 2 }}>
        {error}
      </Typography>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Posts</Typography>
        <Button variant="contained" href="/admin/create">
          Create New Blog
        </Button>
      </Box>
      <Table sx={{width : "1040px"}}>
        <TableHead sx={{width : "100%"}}>
          <TableRow sx={{ width : "100%"}}>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{width : "100%"}}>
          {blogs.map((blog) => (
            <Fragment key={blog._id} sx={{width : "100%"}}>
              <BlogTableRow _id={blog._id} slug={blog.slug} title={blog.title} image={blog.image} description={blog.description} />
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
