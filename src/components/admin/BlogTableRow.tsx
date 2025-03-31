import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function BlogTableRow({ blog }: { blog: any }) {
  return (
    <TableRow>
      <TableCell>{blog.id}</TableCell>
      <TableCell>{blog.title}</TableCell>
      <TableCell align="right">
        <IconButton onClick={() => alert(`Edit ${blog.id}`)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => alert(`View ${blog.id}`)}>
          <VisibilityIcon />
        </IconButton>
        <IconButton onClick={() => alert(`Delete ${blog.id}`)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
