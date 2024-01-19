export default function Task({ tasksList, deleteTask }) {
  return (
    <ul>
      {tasksList.map((task) => {
        return (
          <li key={task}>
            <span>{task}</span>
            <button onClick={() => deleteTask(task)}>Clear</button>
          </li>
        );
      })}
    </ul>
  );
}
