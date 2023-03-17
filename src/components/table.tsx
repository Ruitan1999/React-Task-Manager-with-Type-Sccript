import React, { useState, useEffect, Fragment, ReactNode, Key } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { dataProps } from "../App";


type tableProps = {
    data: dataProps[],
    deletefnc: (id: number) => void,
};

const BasicTable = ({ data, deletefnc } : tableProps) =>  {

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Completed</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              // {rows.map((row) => (
              <TableRow
                key={item.taskID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.taskID}</TableCell>
                <TableCell component="th" scope="row">
                  {item.taskName}
                </TableCell>
                <TableCell align="right">{item.userName}</TableCell>
                <TableCell align="right">
                  {" "}
                  <FormControlLabel control={<Checkbox checked={item.isComplete}/>} label="Complete" />
                </TableCell>
                <TableCell align="right">
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                  >
                    <Button
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => deletefnc(item.taskID)}
                    >
                      Remove
                    </Button>
                    <Button>Edit</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default BasicTable;
