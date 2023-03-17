import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface basicButtonInterface2 {
    CloseModalHandler: () => void;
}

const AddNewButton = () => {
   
    
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" >Add Task</Button>
      <Button variant="text" color="error" >Close</Button>
    </Stack>
  );
}
export default AddNewButton;