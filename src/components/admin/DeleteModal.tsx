"use client";
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteModal({ open, onClose, onDelete }: DeleteModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this blog? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => {
            onDelete();
            onClose();
          }}
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
