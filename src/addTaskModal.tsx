import axios from "axios";
import React, { Fragment, useRef } from "react";

import classes from "./addTaskModal.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { dataProps } from "./App";


type tableProps = {
  getData: dataProps[];
  onClose: () => void;
};

function TaskModal({ onClose, getData }: tableProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const userRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = titleRef.current!.value;
    const selectedUser = userRef.current?.value;

    console.log({
      title: enteredText,
      user: selectedUser,
    });

    if (enteredText?.trim().length === 0) {
      return;
    }

    const newTask = {
      title: enteredText,
      user: selectedUser,
      completed: false,
    };

    axios
      .post("/todo/create", newTask)
      .then((response) => {
        console.log(response.data);
        getData.push(response.data); // Add new task to existing task table
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });

    titleRef.current!.value = "";
  }

  const users = Array.from(
    new Set(
      getData.map((item: any) => {
        return {
          name: item.userName,
        };
      }).map((user: any) => user.name)
    )
  ).map((name: string, index: number) => ({
    name,
    value: index,
  }));

  console.log(users);

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={classes.backdrop}></div>
        <div className={classes.modal}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "60ch" },
            }}
          >
            <div>
              <TextField
                id="Task-name"
                label="Project Name"
                inputRef={titleRef}
              />
            </div>
          </Box>
          <div className={classes.control}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  User
                </InputLabel>

                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "user",
                    id: "uncontrolled-native",
                  }}
                  ref={userRef}
                >
                  {users.map((item) => {
                    return <option value={item.value}>{item.name}</option>;
                  })}
                </NativeSelect>
              </FormControl>
            </Box>
          </div>

          <Stack spacing={3} direction="row">
            <Button type="submit">Add Task</Button>
            <Button variant="text" color="error" onClick={onClose}>
              Close
            </Button>
          </Stack>
        </div>
      </form>
    </Fragment>
  );
}

export default TaskModal;
