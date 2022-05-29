import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styles";
import Tracks from "./Tracks";
import SearchBar from "./SearchBar";

const TracksPanel = ({ wrapperType = "track" }: any) => {
  const { media } = useSelector((state: any) => state.allMedia);
  const [searchText, setSearchText]: any = useState("");
  const dispatch = useDispatch();

  return (
    <Container>
      <SearchBar {...{ searchText, setSearchText }} />
      <Container>
        <Tracks {...{ media, searchText, wrapperType }} />
      </Container>
    </Container>
  );
};

export default TracksPanel;
