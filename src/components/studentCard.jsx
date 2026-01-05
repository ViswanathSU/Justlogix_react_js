import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../features/studentSlice";

import {
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeletionConfirm from "./DeletionConfirm";

const StudentCard = ({ student, onEdit }) => {
  const dispatch = useDispatch();
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleDeleteConfirm = () => {
    dispatch(deleteStudent(student.id));
    setOpenConfirm(false);
  };

  return (
    <>
      <TableRow>
        <TableCell align="center">{student.name}</TableCell>
        <TableCell align="center">{student.email}</TableCell>
        <TableCell align="center">{student.age}</TableCell>

        <TableCell align="center">

            <Button
              size="small"
              variant="contained"
              onClick={() => onEdit(student)}
              startIcon={<EditIcon/>}
              sx={{mr:2}}
            >
              Edit
            </Button>

            <Button
              size="small"
              color="error"
              variant="outlined"
              onClick={() => setOpenConfirm(true)}
              startIcon={<DeleteIcon/>}
            >
              Delete
            </Button>
        </TableCell>
      </TableRow>

      <DeletionConfirm
        open={openConfirm}
        onCancel={() => setOpenConfirm(false)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

export default StudentCard;
