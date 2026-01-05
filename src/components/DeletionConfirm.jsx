import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
} from "@mui/material";

export default function DeletionConfirm({ open, onCancel, onConfirm }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>DELETE Confirmation!!</DialogTitle>

      <DialogContentText sx={{ padding: "20px" }}>
        Do you really want to delete this user?
      </DialogContentText>

      <DialogActions>
        <Button
          variant="contained"
          sx={{ bgcolor: "primary" }}
          onClick={onCancel}
        >
          No
        </Button>

        <Button
          variant="contained"
          sx={{ bgcolor: "primary", color: "white" }}
          onClick={onConfirm}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
