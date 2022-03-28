import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearTrackDetails } from "../redux/trackSlice";
import {
  Body,
  BodyDetails,
  Details,
  Image,
  DetailsHeader as Header,
  DetailsTitle as Title,
} from "./styles";
import formatDate from "../utils/formatDate";
import formatPrice from "../utils/formatPrice";

const TrackDetails = ({ track }: any) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => dispatch(clearTrackDetails())}
        >
          Back
        </Button>
      </div>
      <Details>
        <Header>
          <Title style={{ fontSize: "larger" }}>
            <h2>{track.trackName}</h2>
            <h3>
              {track.artistName},<i> {track.kind}</i>
            </h3>
          </Title>
          <Image src={track.artworkUrl100} alt={track.trackName} />
        </Header>
        <Body>
          <BodyDetails style={{ fontSize: "larger" }}>
            <div>{formatPrice(track.trackPrice)}</div>
            <div>{track.trackTimeMillis}</div>
            <div dangerouslySetInnerHTML={{ __html: track.description }} />
            <p>
              <i>{formatDate(track.releaseDate)}</i>
            </p>
          </BodyDetails>
        </Body>
      </Details>
    </>
  );
};

export default TrackDetails;
