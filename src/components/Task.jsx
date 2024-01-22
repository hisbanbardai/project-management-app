export default function Task({ tasksList, deleteTask }) {
  return (
    <ul className="p-4 mt-8 rounded-md bg-stone-100">
      {tasksList.map((task) => {
        return (
          <li key={task} className="flex justify-between my-4">
            <span>{task}</span>
            <button
              className="text-stone-700 hover:text-red-500"
              onClick={() => deleteTask(task)}
            >
              Clear
            </button>
          </li>
        );
      })}
    </ul>
  );
}
