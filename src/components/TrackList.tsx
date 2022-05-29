import React from "react";
import Tracks from "./TracksPanel";

export default function TrackList({ checked }: { checked: boolean }) {
  return <Tracks {...(checked ? {} : { wrapperType: "audiobook" })} />;
}
