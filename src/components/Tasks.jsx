import { useRef, useState } from "react";
import Task from "./Task";

export default function Tasks({ tasksList, addTaskBtn }) {
  const taskName = useRef();
  return (
    <>
      <h2>Tasks</h2>
      <div>
        <input ref={taskName} type="text" />
        <button
          onClick={() => {
            addTaskBtn(taskName.current.value);
            taskName.current.value = "";
          }}
        >
          Add Task
        </button>
      </div>
      <div>
        {!tasksList.length && <p>This project does not have any tasks yet</p>}
        {tasksList.length > 0 && <Task tasksList={tasksList} />}
      </div>
    </>
  );
}
