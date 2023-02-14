import * as React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'; 

export default function Buttons() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Home</Button>
      <Button>Activity</Button>
      <Button>Explore</Button>
    </ButtonGroup>
  );
}

