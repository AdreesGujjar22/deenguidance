"use client"
import { Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import BlogTableRow from "../../components/admin/BlogTableRow";

const sampleBlogs = [
  { id: "1", title: "The Power of Mindfulness", image: "https://via.placeholder.com/100x60", tags: ["Wellness"] },
  { id: "2", title: "Future of Renewable Energy", image: "https://via.placeholder.com/100x60", tags: ["Technology"] },
];

export default function BlogList() {
  return (
    <Paper sx={{ p: 2 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Posts</Typography>
        <Button variant="contained" href="/admin/create">
          Create New Blog
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleBlogs.map((blog) => (
            <BlogTableRow key={blog.id} blog={blog} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
