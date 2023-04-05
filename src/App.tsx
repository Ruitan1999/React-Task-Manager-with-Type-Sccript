import React, { useState, useEffect, Fragment } from "react";
import TableUI from "./components/table";
import ColorToggleButton from "./components/toggleUI";
import FormPropsTextFields from "./components/inputUI";
import BasicSelect from "./components/userSelector";
import BasicButtons from "./components/buttonUI";
import classes from "./Filter.module.css";
import TaskModal from "./addTaskModal";
import axios, { Axios } from "axios";

type resultProps = {
  id: number;
  isComplete: boolean;
  name: string;
  user: number;
};

type usersProps = {
  id: number;
  firstName: string;
  lastName: string;
};

export type dataProps = {
  
  taskID: number;
  userName: string;
  isComplete: boolean;
  taskName: string;
  id: number;
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState<resultProps[]>([]);
  const [users, setUsers] = useState<usersProps[]>([]);
  const [data, setData] = useState<dataProps[]>([]);

  const getTotalData = () => {
    axios
      .get("api/todos")
      .then((response) => response.data)
      .then((response) => {
        setResults(response.todos);
      });

    axios
      .get("api/users")
      .then((response) => response.data)
      .then((response) => {
        setUsers(response.users);
      });
  };

  useEffect(() => {
    getTotalData();
  }, []);

  useEffect(() => {
    const dateSet: dataProps[] = []
    results.map((todos) => {
      let data = {
        userName: "",
        isComplete: todos.isComplete,
        taskName: todos.name,
        taskID: todos.id,
        id: todos.id,
        userId: 0,
      };

      users.map((user) => {
        if (user.id === todos.user) {
          data.userName = user.firstName + " " + user.lastName;
          if (user.id > 0 ) {
            data.userId = user.id;
          }else {
              return
            }
            
          
        }
      });

       dateSet.push(data);
    });
    setData(dateSet);
    
  }, [users]);

  function taskDelete(taskID: number) {
    axios.delete(`api/todo/${taskID}/delete`).then(() => {
      getTotalData();
    });
  }

  const OpenModalHandler = () => {
    setShowModal(true);
  };

  const CloseModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <div>
        <header>
          <div className={classes.filter}>
            <FormPropsTextFields></FormPropsTextFields>
            <BasicSelect></BasicSelect>
            <ColorToggleButton></ColorToggleButton>
          </div>
        </header>
        <TableUI data={data} deletefnc={taskDelete}></TableUI>
        <div className={classes.buttons}>
          <BasicButtons
            onClick={OpenModalHandler}
            
          ></BasicButtons>
        </div>
        {showModal && <TaskModal onClose={CloseModalHandler} getData={data}></TaskModal>}
      </div>
    </Fragment>
  );
}

export default App;
