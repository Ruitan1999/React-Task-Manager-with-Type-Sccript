import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface basicButtonInterface {
    onClick: () => void;
}
  
const BasicButtons = ({onClick} : basicButtonInterface) => {
   
    
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick}>Add Task</Button>
    </Stack>
  );
}
export default BasicButtons;