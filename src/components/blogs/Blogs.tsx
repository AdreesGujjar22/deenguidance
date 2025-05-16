import React from 'react';
import { 
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import BlogData from '@/data/blogs/BlogData';
import BlogCard from './BlogCard';

const Blogs: React.FC = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 600 }}
        >
          News And Articles
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          paragraph 
          sx={{ color: 'text.secondary', mb: 4 }}
        >
          Explore our latest insights, uncovering how technology transforms industries—from AI fairness to innovations in e-commerce and telecom.
        </Typography>
        
        {/* Cards Grid */}
        <Grid container spacing={4}>
          {BlogData.map((blog, index) => (
            <div key={index}>
                <BlogCard _id={blog._id} slug={blog.slug} title={blog.title} description={blog.description} image={blog.image} content={blog?.content} />
            </div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
