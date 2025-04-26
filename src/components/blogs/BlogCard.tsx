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
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "350px" },
          display: "flex",
          flexDirection: "column",
          boxShadow: "1px 1px 5px grey",
          borderRadius: '16px',
          ":hover": {
            boxShadow: "1px 1px 10px grey",
          }
        }}
        elevation={3}
      >
        <CardActionArea sx={{ flexGrow: 2 }} >
          {/* Card Image */}
          <CardMedia
            component="img"
            height="200"
            image={image}
            // image={`/uploads/1743533065638-0a068f2b93304dee8961c0fbcf46f0e3.jpg`}
            alt={`${title}-${_id}`}
          />
          {/* Card Content */}
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                lineHeight: 1.5,
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
                WebkitLineClamp: 2,
                overflow: "hidden",
                pt: 1
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
