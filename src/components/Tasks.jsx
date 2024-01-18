import { useState } from "react";

export default function Tasks() {
  const [taskExist, setTaskExist] = useState(false);

  return (
    <>
      <h2>Tasks</h2>
      <input type="text" />
      <button>Add Task</button>
      {!taskExist && <p>This project does not have any tasks yet</p>}
    </>
  );
}
