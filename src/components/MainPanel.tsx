import React, { useState } from "react";
import TracksPanel from "./TracksPanel";
import TrackToggle from "./TrackToggle";

const MainPanel = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <TrackToggle {...{ checked, setChecked }} />
      <TracksPanel wrapperType="track" />
    </>
  );
};

export default MainPanel;
