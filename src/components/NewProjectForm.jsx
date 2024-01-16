import { useRef } from "react";

const projects = [];

export default function NewProjectForm({ onClick }) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();

  function handleClickSubmit() {
    if (
      !projectTitle.current.value ||
      !projectDescription.current.value ||
      !projectDueDate.current.value
    ) {
      console.log("All fields are required");
    } else {
      const project = {
        title: projectTitle.current.value,
        description: projectDescription.current.value,
        dueDate: projectDueDate.current.value,
      };
      //Empty all fields
      projectTitle.current.value = "";
      projectDescription.current.value = "";
      projectDueDate.current.value = "";

      //Push project into projects array
      projects.push(project);
      console.log(projects);

      onClick(false);
    }
  }

  return (
    <>
      <div>
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleClickSubmit}
        >
          Save
        </button>
      </div>
      <label className="text-sm font-bold uppercase text-stone-500">
        TITLE
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
          ref={projectTitle}
        />
      </label>
      <label className="text-sm font-bold uppercase text-stone-500">
        DESCRIPTION
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
          ref={projectDescription}
        />
      </label>
      <label className="text-sm font-bold uppercase text-stone-500">
        DUE DATE
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="date"
          ref={projectDueDate}
        />
      </label>
    </>
  );
}
