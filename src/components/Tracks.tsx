import React from "react";
import filterBySearch from "../utils/filterBySearch";
import Track from "./Track";

const Tracks = ({ media, searchText, wrapperType }: any) =>
  filterBySearch(media, searchText)
    .filter((el: any) => el.wrapperType === wrapperType)
    .map((el: any, i: number) => <Track key={i} track={el} />);

export default Tracks;
