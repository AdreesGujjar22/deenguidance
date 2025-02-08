import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Container } from "@mui/material";
import blog1 from '../../../public/images/blog2.jpg';
// import blog2 from '../../../../public/images/blog2.jpg';
// import blog3 from '../../../../public/images/blog3.jpg';
// import blog4 from '../../../../public/images/blog4.jpg';

const blogPosts = [
  {
    title: "How Fair is Your AI? Exploring the Challenge of Defining ‘Fairness’",
    description: "Artificial intelligence (AI) has rapidly transformed various industries, from healthcare to finance, ...",
    image: '../../../../public/images/blog2.jpg',
  },
  {
    title: "Impact of Chat GPT on the Telecom Industry",
    description: "The telecommunications industry is one that is constantly evolving and adapting to new technologies. ...",
    image: '../../../../public/images/blog2.jpg',
  },
  {
    title: "The Power of E-Commerce Cloud Computing – An Insight",
    description: "E-commerce has witnessed a paradigm shift with the integration of cloud computing. ...",
    image: '../../../../public/images/blog2.jpg',
  },
  {
    title: "How Mobile App Development is Shaping E-Commerce",
    description: "Mobile app development is increasingly becoming a critical component of e-commerce strategies. ...",
    image: '../../../../public/images/blog2.jpg',
  },
];

const BlogSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia component="img" height="160" image={`${blog1}`} alt={post.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogSection;
