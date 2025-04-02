"use client";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import JoditEditor from "jodit-react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateBlogForm() {
  const router = useRouter();
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tags, setTags] = useState("");
  const [descriptionSummary, setDescriptionSummary] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", tags);
      formData.append("description", descriptionSummary);
      formData.append("content", content);
      if (imageFile) {
        formData.append("image", imageFile);
      } else {
        throw new Error("Image file is required");
      }

      await axios.post("/api/blog/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      router.push("/admin");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Failed to create blog");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box mb={2} display="flex" justifyContent="space-between">
        <Typography variant="h6">Create New Blog</Typography>
        <Button variant="outlined" onClick={() => router.push("/admin")}>
          Back
        </Button>
      </Box>
      <Stack spacing={2}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button variant="outlined" component="label">
          {imageFile ? imageFile.name : "Upload Image"}
          <input type="file" hidden onChange={handleImageChange} accept="image/*" />
        </Button>
        <TextField
          label="Tags (comma separated)"
          fullWidth
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <TextField
          label="Description Summary"
          fullWidth
          multiline
          rows={3}
          value={descriptionSummary}
          onChange={(e) => setDescriptionSummary(e.target.value)}
        />
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Blog Content
          </Typography>
          <JoditEditor
            ref={editorRef}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
          />
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" onClick={handleSubmit} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </Stack>
    </Paper>
  );
}
