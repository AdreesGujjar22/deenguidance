"use client"

import { CircularProgress, IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DeleteModal from "./DeleteModal";
import Button from "../ui/atoms/Button";
import { BlogItem } from "../../types/Blog";

const BlogTableRow: React.FC<BlogItem> = ({  _id,slug, title })=> {

  const router = useRouter();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blog/delete/${slug}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete blog");
      }
      // Refresh the admin list page after deletion
      router.refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <TableRow>
        <TableCell>{_id}</TableCell>
        <TableCell>{title}</TableCell>
        <TableCell align="right">
          <IconButton onClick={() => router.push(`/admin/edit/${slug}`)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => router.push(`/blogs/${slug}`)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setDeleteModalOpen(true)}
              sx={{ ml: 1 }}
            >
              {loading ? <CircularProgress size={20} /> : <DeleteIcon />}
            </Button>
          </IconButton>

        </TableCell>
      </TableRow>
      <DeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
}

export default BlogTableRow;