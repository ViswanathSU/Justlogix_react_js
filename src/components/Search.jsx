import { TextField } from "@mui/material";

const Search = ({ value, setValue }) => {
  return (
    <TextField
      placeholder="Search.."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      sx={{
        '& .MuiOutlinedInput-root':{
          borderRadius : '12px',
          width:'344px'
        }
      }}
    />
  );
};

export default Search;
