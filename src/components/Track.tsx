import React from "react";
import { useDispatch } from "react-redux";
import { getTrackDetails } from "../redux/trackSlice";
import { Body, BodyDetails as Details, Content, Image, Title } from "./styles";
import formatDate from "../utils/formatDate";
import formatPrice from "../utils/formatPrice";

const Track = ({ track }: any) => {
  const dispatch = useDispatch();

  return (
    <Content onClick={() => dispatch(getTrackDetails(track))}>
      <Title type={track.wrapperType}>
        <h2>{track.trackName}</h2>
        <h3>
          {track.artistName},<i> {track.kind}</i>
        </h3>
      </Title>
      <Body>
        <Image src={track.artworkUrl100} alt={track.trackName} />
        <Details>
          <div>{formatPrice(track.trackPrice)}</div>
          <div>{track.trackTimeMillis}</div>
          <div>{formatDate(track.releaseDate)}</div>
        </Details>
      </Body>
    </Content>
  );
};

export default Track;
