import { useRef, useState } from "react";

const tasks = [];

export default function Tasks() {
  const [taskExist, setTaskExist] = useState(false);
  const taskName = useRef();

  function handleAddTaskBtnClick() {
    setTaskExist(true);
    const task = taskName.current.value;
    tasks.push(task);
    taskName.current.value = "";
  }

  return (
    <>
      <h2>Tasks</h2>
      <input ref={taskName} type="text" />
      <button onClick={handleAddTaskBtnClick}>Add Task</button>
      {!taskExist && <p>This project does not have any tasks yet</p>}
    </>
  );
}
