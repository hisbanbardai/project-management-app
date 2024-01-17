import { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import NewProjectForm from "./NewProjectForm";
import ProjectDetail from "./ProjectDetail";

const projects = [];

export default function MainContent() {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [isProjectClicked, setIsProjectClicked] = useState(false);

  const projectDetails = useRef();

  function handleClickSubmit() {
    if (
      !projectDetails.current.getTitle() ||
      !projectDetails.current.getDescription() ||
      !projectDetails.current.getDueDate()
    ) {
      console.log("All fields are required");
    } else {
      const project = {
        title: projectDetails.current.getTitle(),
        description: projectDetails.current.getDescription(),
        dueDate: projectDetails.current.getDueDate(),
      };
      //Empty all fields
      // projectTitle.current.value = "";
      // projectDescription.current.value = "";
      // projectDueDate.current.value = "";

      //Push project into projects array
      projects.push(project);
      console.log(projects);

      //set addBtnClicked to false
      handleAddBtnClick(false);
    }
  }

  function handleAddBtnClick(val) {
    val ? setIsAddBtnClicked(true) : setIsAddBtnClicked(false);
  }

  function handleProjectTitleClick() {
    setIsAddBtnClicked(false);
    setIsProjectClicked(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar addBtnClick={handleAddBtnClick} projectsList={projects} />
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
            onClick={() => handleAddBtnClick(true)}
          >
            Create new project
          </button>
        </div>
      ) : (
        <NewProjectForm
          ref={projectDetails}
          onClick={handleClickSubmit}
          addBtnClick={handleAddBtnClick}
        />
      )}

      {isProjectClicked && <ProjectDetail />}
    </main>
  );
}
