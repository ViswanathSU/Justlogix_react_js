import { Pagination, Toolbar } from "@mui/material";

const PaginationComponent = ({
  page,
  setPage,
  totalItems,
  itemsPerPage = 4,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  if (pageCount <= 1) return null;

  return (
    <Toolbar sx={{margin:"auto", justifyContent:"center"}}>
      <Pagination
        count={pageCount}
        page={page}
        color="primary"
        onChange={(e, value) => setPage(value)}
      />
   </Toolbar>
  );
};

export default PaginationComponent;
