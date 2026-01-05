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
  user,
  setUser,
  onClose,
  onSave,
}) {
  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          value={user.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Age"
          value={user.age || ""}
          onChange={(e) => handleChange("age", e.target.value)}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          value={user.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          startIcon={<SaveTwoToneIcon />}
          onClick={onSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
