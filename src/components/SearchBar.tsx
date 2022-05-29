import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { getMediaFetch, updateSearchFilter } from "../redux/allMediaSlice";
import { Container } from "./styles";

const SearchBar = () => {
  const { searchValue = "" } = useSelector((state: any) => state.allMedia);
  const dispatch = useDispatch();

  return (
    <Container style={{ display: "flex", margin: "auto", width: "50%" }}>
      <TextField
        label="Search"
        onChange={(event) => {
          dispatch(updateSearchFilter(event.target.value));
        }}
        sx={{ width: 1 }}
        value={searchValue}
      />
      <Button
        disabled={!searchValue.length}
        onClick={() => {
          dispatch(getMediaFetch(searchValue));
        }}
        sx={{ width: 1 }}
      >
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;
