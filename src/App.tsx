import React, { useState } from "react";
import { Switch, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Flex } from "./components/styles";
import Tracks from "./components/Tracks";
import TrackDetails from "./components/TrackDetails";

export default function App() {
  const [checked, setChecked] = useState(true);
  const { track } = useSelector((state: any) => state.media);
  console.log(";", track);
  if (track) {
    return <TrackDetails track={track} />;
  }

  return (
    <>
      <Flex>
        <Typography>Audio Book</Typography>
        <Switch checked={checked} onChange={() => setChecked(!checked)} />
        <Typography>Track</Typography>
      </Flex>
      {checked ? <Tracks /> : <Tracks wrapperType="audiobook" />}
    </>
  );
}
