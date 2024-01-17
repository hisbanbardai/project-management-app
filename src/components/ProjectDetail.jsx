export default function ProjectDetail({ data }) {
  return (
    <>
      <h1>{data.title}</h1>
      <button>Delete</button>
      <p>{data.dueDate}</p>
      <p>{data.description}</p>
    </>
  );
}
