import { forwardRef, useImperativeHandle, useRef } from "react";

const NewProjectForm = forwardRef(function ({ onClick, addBtnClick }, ref) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();

  useImperativeHandle(ref, () => {
    return {
      getTitle() {
        return projectTitle.current.value;
      },
      getDescription() {
        return projectDescription.current.value;
      },
      getDueDate() {
        return projectDueDate.current.value;
      },
    };
  });

  return (
    <div>
      <menu>
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={() => addBtnClick(false)}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={onClick}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            TITLE
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="text"
            ref={projectTitle}
          />
        </p>
        <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            DESCRIPTION
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="text"
            ref={projectDescription}
          />
        </p>
        <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            DUE DATE
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
            ref={projectDueDate}
          />
        </p>
      </div>
    </div>
  );
});

export default NewProjectForm;
