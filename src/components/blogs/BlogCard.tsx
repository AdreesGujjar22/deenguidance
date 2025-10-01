import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { BlogItem } from "@/types/Blog";

const BlogCard: React.FC<BlogItem> = ({ _id, title, description, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: '100%',
      }}
    >
      <Card
        className="animate-fadeIn"
        sx={{
          width: { xs: "100%", sm: "350px" },
          height: '100%',
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          borderRadius: '20px',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0,0,0,0.05)',
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
            transform: 'translateY(-8px)',
          }
        }}
        elevation={0}
      >
        <CardActionArea 
          sx={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            height: '100%',
          }} 
        >
          {/* Card Image */}
          <CardMedia
            component="img"
            height="220"
            image={image}
            alt={`${title}-${_id}`}
            sx={{
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          />
          {/* Card Content */}
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: "1.125rem",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                lineHeight: 1.4,
                mb: 1.5,
                color: 'primary.main',
                fontFamily: 'var(--font-cinzel-decorative)',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
                lineHeight: 1.6,
                fontSize: '0.9375rem',
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default BlogCard;
