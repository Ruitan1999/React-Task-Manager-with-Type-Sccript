import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('Off');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
        
        
      <ToggleButton value="Off">Not Completed</ToggleButton>
      <ToggleButton value="On">Completed</ToggleButton>

    </ToggleButtonGroup>
  );
}