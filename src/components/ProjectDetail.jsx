import Tasks from "./Tasks";

export default function ProjectDetail({ data, deleteProject }) {
  return (
    <>
      <h1>{data.title}</h1>
      <button onClick={() => deleteProject(data)}>Delete</button>
      <p>{data.dueDate}</p>
      <p>{data.description}</p>
      <div>
        <Tasks />
      </div>
    </>
  );
}
