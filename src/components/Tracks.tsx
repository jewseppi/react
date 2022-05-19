import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { getMediaFetch } from "../redux/mediaSlice";
import { Container } from "./styles";
import filterBySearch from "../utils/filterBySearch";
import Track from "./Track";

const Tracks = ({ wrapperType = "track" }: any) => {
  const { media } = useSelector((state: any) => state.data);
  const [searchText, setSearchText]: any = useState("");
  const dispatch = useDispatch();

  return (
    <Container>
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
      <Container>
        {filterBySearch(media, searchText)
          .filter((el: any) => el.wrapperType === wrapperType)
          .map((el: any, i: number) => (
            <Track key={i} track={el} />
          ))}
      </Container>
    </Container>
  );
};

export default Tracks;
