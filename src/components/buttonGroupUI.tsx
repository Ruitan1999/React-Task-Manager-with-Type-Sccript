import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface OnRemoveProp {
  onRemove: (data: any) => Promise<void>;
}

// interface GrabID {
//   onDeleteUser: (data: any) => Promise<void>;
// }

const DisableElevation = ({ onRemove }: OnRemoveProp) => {
  // const getID = ({ onDeleteUser }:GrabID ) => {
  //   props.onDeleteUser(props.id);
  // };

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button color="error" startIcon={<DeleteIcon />} onClick={()=>onRemove}>
        Remove
      </Button>
      <Button>Edit</Button>
    </ButtonGroup>
  );
};

export default DisableElevation;
