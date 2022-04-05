import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { Container } from "./styles";
import Track from "./Track";

const Tracks = ({ wrapperType = "track" }: any) => {
  const { media } = useSelector((state: any) => state.data);
  const [searchText, setSearchText]: any = useState("");

  const filterBySearch = media.filter((el: any) => {
    const { trackName = "", artistName = "" } = el;

    const filterByTrack = trackName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const filterByArtist = artistName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    if (filterByTrack || filterByArtist) {
      return true;
    }

    return false;
  });

  return (
    <Container>
      <Container style={{ margin: "auto", width: "50%" }}>
        <TextField
          label="Search"
          onChange={(event) => setSearchText(event.target.value)}
          sx={{ width: 1 }}
        />
      </Container>
      <Container>
        {filterBySearch
          .filter((el: any) => el.wrapperType === wrapperType)
          .map((el: any, i: number) => (
            <Track key={i} track={el} />
          ))}
      </Container>
    </Container>
  );
};

export default Tracks;
