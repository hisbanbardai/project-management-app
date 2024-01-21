import { useRef, useState } from "react";
import Task from "./Task";

export default function Tasks({ tasksList, addTaskBtn, deleteTaskBtn }) {
  const taskName = useRef();
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          ref={taskName}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={() => {
            addTaskBtn(taskName.current.value);
            taskName.current.value = "";
          }}
        >
          Add Task
        </button>
      </div>
      <div>
        {!tasksList.length && (
          <p className="text-stone-800 my-4">
            This project does not have any tasks yet
          </p>
        )}
        {tasksList.length > 0 && (
          <Task tasksList={tasksList} deleteTask={deleteTaskBtn} />
        )}
      </div>
    </section>
  );
}
