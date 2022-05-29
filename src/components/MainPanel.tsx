import React, { useState } from "react";
import TrackList from "./TrackList";
import TrackToggle from "./TrackToggle";

const MainPanel = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <TrackToggle {...{ checked, setChecked }} />
      <TrackList checked={checked} />
    </>
  );
};

export default MainPanel;
