import React from "react";
import { useSelector } from "react-redux";
import Track from "./Track";

const Tracks = ({ tracks, wrapperType }: any) => {
  // const { search: tracks } = useSelector((state: any) => state.allMedia);

  return (tracks || []).map((el: any, i: number) => (
    <Track key={i} track={el} />
  ));
};

export default Tracks;
