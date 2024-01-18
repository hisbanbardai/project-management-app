import { useRef, useState } from "react";
import Task from "./Task";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskExist, setTaskExist] = useState(false);
  const taskName = useRef();

  function handleAddTaskBtnClick() {
    setTaskExist(true);
    const task = taskName.current.value;
    setTasks((prevTasks) => [...prevTasks, task]);
    taskName.current.value = "";
  }

  return (
    <>
      <h2>Tasks</h2>
      <input ref={taskName} type="text" />
      <button onClick={handleAddTaskBtnClick}>Add Task</button>
      {!taskExist && <p>This project does not have any tasks yet</p>}
      {taskExist && <Task tasksList={tasks} />}
    </>
  );
}
