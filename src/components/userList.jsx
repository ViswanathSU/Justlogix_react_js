import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../features/studentSlice";
import StudentCard from "./studentCard";
import PaginationComponent from "./Pagination";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const ITEMS_PER_PAGE = 4;

const UserList = ({ onEdit, search }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.students);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const filteredList = list.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setPage(1);
  }, [search]);


  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedList = filteredList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Paper elevation={6}>
        <Table>
          <TableHead sx={{ bgcolor: "#2e61fbff"}}>
            <TableRow>
              <TableCell align="center" sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell align="center" sx={{ color: "#fff" }}>Email</TableCell>
              <TableCell align="center" sx={{ color: "#fff" }}>Age</TableCell>
              <TableCell align="center" sx={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedList.map((s) => (
              <StudentCard
                key={s.id}
                student={s}
                onEdit={onEdit}
              />
            ))}
          </TableBody>
        </Table>
      

      <PaginationComponent
        page={page}
        setPage={setPage}
        totalItems={filteredList.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
      </Paper>
    </>
  );
};

export default UserList;
