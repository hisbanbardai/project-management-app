export default function Task({ tasksList }) {
  function handleDeleteTask(task) {
    const indexToDelete = tasksList.indexOf(task);
  }

  return (
    <ul>
      {tasksList.map((task) => {
        return (
          <li key={task}>
            <span>{task}</span>
            <button>Clear</button>
          </li>
        );
      })}
    </ul>
  );
}
