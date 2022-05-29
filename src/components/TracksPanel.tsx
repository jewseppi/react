import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";
import Tracks from "./Tracks";
import SearchBar from "./SearchBar";

const TracksPanel = ({ wrapperType = "track" }: { wrapperType: string }) => {
  const { media: tracks } = useSelector((state: any) => state.allMedia);
  return (
    <Container>
      <SearchBar />
      <Container>
        <Tracks {...{ tracks, wrapperType }} />
      </Container>
    </Container>
  );
};
export default TracksPanel;
