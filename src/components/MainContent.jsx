import { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import NewProjectForm from "./NewProjectForm";
import ProjectDetail from "./ProjectDetail";
import Tasks from "./Tasks";
import noProjectImage from "../assets/no-projects.png";

const projects = [];

export default function MainContent() {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [isProjectClicked, setIsProjectClicked] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const projectDetails = useRef();
  const [tasks, setTasks] = useState({});

  function handleDeleteTaskBtnClick(taskName) {
    const indexToDelete = tasks[projectData.title].indexOf(taskName);
    setTasks((prevTasks) => {
      const projectTasks = prevTasks[projectData.title];
      const updatedTasks = projectTasks.filter((task) => task !== taskName);
      return {
        ...prevTasks,
        [projectData.title]: updatedTasks,
      };
    });
  }

  function handleAddTaskBtnClick(taskName) {
    // const task = taskName;
    setTasks((prevTasks) => {
      const projectTasks = prevTasks[projectData.title] || [];
      return {
        ...prevTasks,
        [projectData.title]: [...projectTasks, taskName],
      };
    });
    // setTasks((prevTasks) => [...prevTasks, task]);
    // taskName.current.value = "";
  }

  function handleClickSubmit() {
    if (
      !projectDetails.current.getTitle().trim() ||
      !projectDetails.current.getDescription().trim() ||
      !projectDetails.current.getDueDate().trim()
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

      //set addBtnClicked to false
      handleAddBtnClick(false);
    }
  }

  function handleAddBtnClick(val) {
    if (val) {
      setIsProjectClicked(false);
      setIsAddBtnClicked(true);
    } else setIsAddBtnClicked(false);

    setProjectData(null);
  }

  function handleProjectTitleClick(data) {
    setProjectData(data);
    setIsAddBtnClicked(false);
    setIsProjectClicked(true);
  }

  function handleDeleteProject(data) {
    setIsProjectClicked(false);
    const indexToDelete = projects.findIndex(
      (project) => project.title === data.title
    );

    if (indexToDelete !== -1) {
      projects.splice(indexToDelete, 1);
    }

    setProjectData(null);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        addBtnClick={handleAddBtnClick}
        projectsList={projects}
        projectTitleClick={handleProjectTitleClick}
      />

      {!isAddBtnClicked && !isProjectClicked && (
        <div className="mt-24 text-center w-2/3">
          <img
            className="w-16 h-16 object-contain mx-auto"
            src={noProjectImage}
            alt="An image of pad and pen"
          />
          <h2 className="text-xl font-bold text-stone-700 my-4">
            No project Selected
          </h2>
          <p className="text-stone-400 mb-4">
            Select a project or get started with a new one
          </p>
          <p className="mt-8">
            <button
              className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
              onClick={() => handleAddBtnClick(true)}
            >
              Create new project
            </button>
          </p>
        </div>
      )}

      {isAddBtnClicked && (
        <NewProjectForm
          ref={projectDetails}
          onClick={handleClickSubmit}
          addBtnClick={handleAddBtnClick}
        />
      )}

      {isProjectClicked && (
        <>
          <ProjectDetail
            data={projectData}
            deleteProject={handleDeleteProject}
          />
          <Tasks
            tasksList={tasks[projectData.title] || []}
            addTaskBtn={handleAddTaskBtnClick}
            deleteTaskBtn={handleDeleteTaskBtnClick}
          />
        </>
      )}
    </main>
  );
}
