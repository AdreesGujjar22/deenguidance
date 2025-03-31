"use client";
import React, { useRef, useState } from "react";
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import JoditEditor from "jodit-react";
import { useRouter } from "next/navigation";

export default function CreateBlogForm() {
  const router = useRouter();
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Paper sx={{ p: 2 }}>
      <Box mb={2} display="flex" justifyContent="space-between">
        <Typography variant="h6">Create New Blog</Typography>
        <Button variant="outlined" onClick={() => router.push("/admin")}>
          Back
        </Button>
      </Box>
      <Stack spacing={2}>
        <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Image URL" fullWidth value={image} onChange={(e) => setImage(e.target.value)} />
        <TextField label="Tags (comma separated)" fullWidth value={tags} onChange={(e) => setTags(e.target.value)} />
        <Box>
          <Typography variant="subtitle1">Description</Typography>
          <JoditEditor ref={editorRef} value={description} onBlur={(newContent) => setDescription(newContent)} />
        </Box>
        <Button variant="contained" onClick={() => alert("Submit Logic")}>
          Submit
        </Button>
      </Stack>
    </Paper>
  );
}
