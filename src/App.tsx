import React from "react";
import { useSelector } from "react-redux";
import TrackDetails from "./components/TrackDetails";
import MainPanel from "./components/MainPanel";

export default function App() {
  const { track } = useSelector((state: any) => state.media);

  if (track) {
    return <TrackDetails track={track} />;
  }

  return <MainPanel />;
}
