import React from "react";
import { useSelector } from "react-redux";
import Track from "./Track";

const Tracks = ({ wrapperType = "track" }: any) => {
  const { media } = useSelector((state: any) => state.data);

  return media
    .filter((el: any) => el.wrapperType === wrapperType)
    .map((el: any, i: number) => <Track key={i} track={el} />);
};

export default Tracks;
