import { useRef, useState } from "react";

const tasks = [];

export default function Tasks() {
  const [taskExist, setTaskExist] = useState(false);
  const taskName = useRef();

  return (
    <>
      <h2>Tasks</h2>
      <input type="text" />
      <button ref={taskName}>Add Task</button>
      {!taskExist && <p>This project does not have any tasks yet</p>}
    </>
  );
}
