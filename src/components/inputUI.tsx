import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "60ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="project-name"
          label="Project Name"
          defaultValue="Watermelon Squad"
        />
      </div>
    </Box>
  );
}
