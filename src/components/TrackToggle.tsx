import React, { Dispatch, SetStateAction } from "react";
import { Switch, Typography } from "@mui/material";
import { Flex } from "./styles";

type TrackToggleType = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};

export default function TrackToggle({
  checked = true,
  setChecked,
}: TrackToggleType) {
  return (
    <Flex>
      <Typography>Audio Book</Typography>
      <Switch checked={checked} onChange={() => setChecked(!checked)} />
      <Typography>Track</Typography>
    </Flex>
  );
}
