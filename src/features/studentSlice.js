import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchStudentsAPI,
  addStudentAPI,
  updateStudentAPI,
  deleteStudentAPI
} from "./studentAPI";

// createAsyncThunk - for Api handling and passing to the create slice to createSlice

// GET
export const fetchStudents = createAsyncThunk(
  "students/fetch",
  async () => {
    const response = await fetchStudentsAPI();
    return response.data;
  }
);

// POST
export const addStudent = createAsyncThunk(
  "students/add",
  async (student) => {
    const response = await addStudentAPI(student);
    return response.data;
  }
);

// PUT
export const updateStudent = createAsyncThunk(
  "students/update",
  async (student) => {
    const response = await updateStudentAPI(student);
    return response.data;
  }
);

// DELETE
export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id) => {
    await deleteStudentAPI(id);
    return id;
  }
);

//SLICE 

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ADD
      .addCase(addStudent.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // UPDATE
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (s) => s.id === action.payload.id
        );
        state.list[index] = action.payload;
      })

      // DELETE
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (s) => s.id !== action.payload
        );
      });
  }
});

export default studentSlice.reducer;
