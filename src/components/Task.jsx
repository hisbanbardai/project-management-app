export default function Task({ tasksList }) {
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
