"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default function EditBlogForm() {
  const router = useRouter();
  const { slug } = useParams();
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [descriptionSummary, setDescriptionSummary] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blog data by slug for pre-filling the form
  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await res.json();
        if (typeof data.title === "string") setTitle(data.title);
        if (Array.isArray(data.tags)) setTags(data.tags.join(","));
        if (typeof data.description === "string") setDescriptionSummary(data.description);
        if (typeof data.content === "string") setContent(data.content);
        setContent(data?.content);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }

      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  // For update, we send JSON (no file update support here)
  const handleSubmit = async () => {
    setSubmitLoading(true);
    setError("");
    try {
      const payload = {
        title,
        tags: tags.split(",").map((tag) => tag.trim()),
        description: descriptionSummary,
        content,
      };
      const res = await fetch(`/api/blog/update/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update blog");
      }
      router.push("/admin");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Box mb={2} display="flex" justifyContent="space-between">
        <Typography variant="h6">Edit Blog</Typography>
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
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleSubmit} disabled={submitLoading}>
            {submitLoading ? <CircularProgress size={24} /> : "Update"}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
