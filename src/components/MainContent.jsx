import { useState } from "react";
import Sidebar from "./Sidebar";
import NewProjectForm from "./NewProjectForm";

export default function MainContent() {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);

  function handleClick(val) {
    val ? setIsAddBtnClicked(true) : setIsAddBtnClicked(false);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar addBtnClick={handleClick} />
      {!isAddBtnClicked ? (
        <div className="w-[35rem] mt-16">
          <img
            className="w-16 h-16 object-contain mx-auto"
            src="logo.png"
            alt="An image of pad and pen"
          />
          <h2 className="text-xl font-bold text-stone-700 my-4">
            No project Selected
          </h2>
          <p className="text-stone-600 mb-4">
            Select a project or get started with a new one
          </p>

          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleClick}
          >
            Create new project
          </button>
        </div>
      ) : (
        <NewProjectForm onClick={handleClick} />
      )}
    </main>
  );
}
