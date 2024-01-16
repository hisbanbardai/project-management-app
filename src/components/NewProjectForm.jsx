import { useRef } from "react";

const projects = [];

export default function NewProjectForm() {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();

  return (
    <form className="mt-4 text-right" action="">
      <div>
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
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
    </form>
  );
}
