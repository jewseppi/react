import React, { useEffect, useState } from "react";
import { Switch, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getMediaFetch } from "./redux/mediaSlice";
import { Container, Flex } from "./components/styles";
import Tracks from "./components/Tracks";
import TrackDetails from "./components/TrackDetails";

export default function App() {
  const [checked, setChecked] = useState(true);
  const { track } = useSelector((state: any) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMediaFetch());
  }, [dispatch]);

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
      <Container>
        {checked ? <Tracks /> : <Tracks wrapperType="audiobook" />}
      </Container>
    </>
  );
}
