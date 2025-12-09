import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";

export default function EditDialogue({
  open,
  editName,
  editAge,
  editEmailId,
  setEditName,
  setEditAge,
  setEditEmailId,
  handleClose,
  handleSave,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit User</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Age"
          value={editAge}
          onChange={(e) => setEditAge(e.target.value)}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          value={editEmailId}
          onChange={(e) => setEditEmailId(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          startIcon={<SaveTwoToneIcon />}
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
