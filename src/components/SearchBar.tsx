import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { getMediaFetch } from "../redux/allMediaSlice";
import { Container } from "./styles";

const SearchBar = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}): any => {
  const dispatch = useDispatch();

  return (
    <Container style={{ display: "flex", margin: "auto", width: "50%" }}>
      <TextField
        label="Search"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        sx={{ width: 1 }}
        value={searchText}
      />
      <Button
        disabled={!searchText.length}
        onClick={() => {
          dispatch(getMediaFetch(searchText));
          setSearchText("");
        }}
        sx={{ width: 1 }}
      >
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;
