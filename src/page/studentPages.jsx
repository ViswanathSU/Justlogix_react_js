import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../features/studentSlice";

import { Box, Button, Paper, Toolbar, Typography } from "@mui/material";

import UserList from "../components/userList";
import Search from "../components/Search";
import AddStudent from "../components/addUser";
import EditStudent from "../components/EditDialogue";

const StudentPages = () => {
  const dispatch = useDispatch();

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [search, setSearch] = useState("");

  // ADD
  const handleAdd = () => {
    setCurrentUser({ name: "", email: "", age: "" });
    setOpenAdd(true);
  };

  // EDIT
  const handleEdit = (user) => {
    setCurrentUser(user);
    setOpenEdit(true);
  };

  // SAVE ADD
  const handleAddSave = () => {
    dispatch(addStudent(currentUser));
    setOpenAdd(false);
  };

  // SAVE EDIT
  const handleEditSave = () => {
    dispatch(updateStudent(currentUser));
    setOpenEdit(false);
  };

  return (
    <>
    <div
      style={{
        height: "100vh",
        backgroundColor: "#092d5fff",
        padding : '20px'
      }}
      >
    <Typography variant="h4" sx={{textAlign : "center", color :'#fff', margin:'20px' }} fontWeight={700}>User Management</Typography>
    <Box sx={{display : 'flex',justifyContent:'center', alignItems : "center"}}>
      <Paper
      elevation={6}
        sx={{
          padding: "0",
          width: "1200px",
          borderRadius: "10px",
          backgroundColor:'#fff'
        }}
      >
        <Toolbar sx={{display: "flex", justifyContent : "space-between", padding:"12px"}}>
          <Search value={search} setValue={setSearch} />
          <Toolbar>

          <Button
            variant="contained"
            color="primary"
              sx={{ height: '40px', width: '122px'}}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            sx={{ height: '40px', width: '122px',m:2}}
          >
            + Add
          </Button>
          </Toolbar>
        </Toolbar>

        <UserList onEdit={handleEdit} search={search} />

        <AddStudent
          open={openAdd}
          user={currentUser}
          setUser={setCurrentUser}
          onClose={() => setOpenAdd(false)}
          onSave={handleAddSave}
        />


        <EditStudent
          open={openEdit}
          user={currentUser}
          setUser={setCurrentUser}
          onClose={() => setOpenEdit(false)}
          onSave={handleEditSave}
        />
      </Paper>
      </Box>
    </div>
    </>
  );
};

export default StudentPages;