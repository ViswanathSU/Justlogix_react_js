import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import AddIcon from "@mui/icons-material/Add";
import BackgroundWrapper from "../background/BackgroundWrapper.jsx";
import EditDialogue from "../components/EditDialogue.jsx";
import DeletionConfirm from "../components/DeletionConfirm.jsx";
import Search from "../components/Search.jsx";
import {
  getUsers,
  getTotalUsers,
  addUser,
  deleteUser,
  updateUser,
} from "../api/Api.jsx";

function Product() {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const page = parseInt(pageNumber) || 1;
  const limit = 3;

  const [listOfPerson, setListOfPerson] = useState([]);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [emailID, setEmailId] = useState("");

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editEmailId, setEditEmailId] = useState("");

  const [deleteId, setDeleteId] = useState(null);

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");

  const location = useLocation();

  // Load Users + Sorting + Search + Pagination
  const loadUsers = async () => {
    const totalRes = await getTotalUsers(search);
    setTotal(totalRes.data.length);

    const res = await getUsers(page, limit, search, sortBy, sortOrder);

    let sortedData = [...res.data];

    if (sortBy) {
      sortedData.sort((a, b) => {
        let valueA = a[sortBy];
        let valueB = b[sortBy];

        // convert age to number for correct sorting
        if (sortBy === "age") {
          valueA = Number(valueA);
          valueB = Number(valueB);
        }

        if (sortOrder === "asc") {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      });
    }

    setListOfPerson(sortedData);
  };

  useEffect(() => {
    loadUsers();
  }, [page, search, sortBy, sortOrder, location]);

  const handleAdd = async () => {
    let isValid = true;
    setNameError("");
    setAgeError("");
    setEmailError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (name.trim() === "") {
      setNameError("Name cannot be empty");
      isValid = false;
    }

    if (age.trim() === "") {
      setAgeError("Age cannot be empty");
      isValid = false;
    }

    if (!emailRegex.test(emailID)) {
      setEmailError("Enter valid email");
      isValid = false;
    }

    if (!isValid) return;

    const newId = Math.random().toString(36).substring(2, 7);

    await addUser({ id: newId, name, age, emailID });
    setName("");
    setAge("");
    setEmailId("");
    loadUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  const startEdit = (person) => {
    setEditId(person.id);
    setEditName(person.name);
    setEditAge(person.age);
    setEditEmailId(person.emailID);
  };

  const saveEdit = async () => {
  await updateUser(editId, {
  name: editName,
  age: editAge,
  emailID: editEmailId,
});

    cancelEdit();
    loadUsers();
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditName("");
    setEditAge("");
    setEditEmailId("");
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <BackgroundWrapper>
      <div className="demo">
        <Typography
          sx={{
            fontSize: 60,
            textAlign: "center",
            fontFamily: "Georgia",
            color: "#221f17ff",
          }}
        >
          <b>USER MANAGEMENT</b>
        </Typography>

        <Card
          sx={{
            maxWidth: 1000,
            height: 500,
            margin: "16px auto",
            padding: 2,
            bgcolor: "#ffffffff",
          }}
        >
          <CardContent>
            <Search
  searchValue={search}
  onSearchChange={(value) => {
    navigate("/page/1");
    setSearch(value);
     }}/>

            {/* Sorting */}
            <div style={{ display: "flex", gap: 12, marginBottom: 15 }}>
              <TextField
                select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  navigate("/page/1");
                }}
                SelectProps={{ native: true }}
                sx={{
                  width: 150,
                  bgcolor: "white",
                  borderRadius: "12px",
                }}
              >
                <option value="">None</option>
                <option value="name">Name</option>
                <option value="age">Age</option>
              </TextField>

              <TextField
                select
                label="Order"
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  navigate("/page/1");
                }}
                SelectProps={{ native: true }}
                sx={{
                  width: 150,
                  bgcolor: "white",
                  borderRadius: "12px",
                }}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </TextField>
            </div>

            {/* Add User */}
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <TextField
                placeholder="Name"
                value={name}
                error={!!nameError}
                helperText={nameError}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  bgcolor: "white",
                  borderRadius: "10px",
                }}
              />

              <TextField
                placeholder="Age"
                value={age}
                error={!!ageError}
                helperText={ageError}
                onChange={(e) => setAge(e.target.value)}
                sx={{
                  bgcolor: "white",
                  borderRadius: "10px",
                }}
              />

              <TextField
                placeholder="Email"
                value={emailID}
                error={!!emailError}
                helperText={emailError}
                onChange={(e) => setEmailId(e.target.value)}
                sx={{
                  bgcolor: "white",
                  borderRadius: "10px",
                }}
              />

              <Button
                variant="contained"
                onClick={handleAdd}
                startIcon={<AddIcon />}
                sx={{
                  height: 55,
                  width: 120,
                  borderRadius: "8px",
                  bgcolor: "#61058cff",
                }}
              >
                Add
              </Button>
            </div>

            {/* USER CARDS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "16px",
                marginTop: 16,
              }}
            >
              {listOfPerson.map((user) => (
                <Card
                  key={user.id}
                  sx={{ padding: 2, bgcolor: "#d3b0faff", boxShadow: 3 }}
                >
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography>Age: {user.age}</Typography>
                  <Typography>Email: {user.emailID}</Typography>

                  <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => startEdit(user)}
                      sx={{
                        borderColor: "#5a0b8aff",
                        color: "#5a0b8aff",
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => setDeleteId(user.id)}
                      sx={{
                        borderColor: "#5a0b8aff",
                        color: "#5a0b8aff",
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <br />
            <br />
            <br />

            {/* Pagination */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                page={page}
                count={totalPages}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/page/${item.page}`}
                    {...item}           
                  />
                )}
              />
            </div>
          </CardContent>
        </Card>
        {/* Edit Dialog */}
<EditDialogue
  open={editId !== null}
  editName={editName}
  editAge={editAge}
  editEmailId={editEmailId}
  setEditName={setEditName}
  setEditAge={setEditAge}
  setEditEmailId={setEditEmailId}
  handleClose={cancelEdit}
  handleSave={saveEdit}
/>

{/* Delete Dialog */}
<DeletionConfirm
  open={deleteId !== null}
  onCancel={() => setDeleteId(null)}
  onConfirm={async () => {
    await handleDelete(deleteId);
    setDeleteId(null);
  }}
/>
      </div>
    </BackgroundWrapper>
  );
}

export default Product;