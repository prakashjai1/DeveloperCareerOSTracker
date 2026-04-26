import { useState } from "react";

export const Projects = ({ projects, setProjects }) => {
  const [status, setStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const addProject = () => {
    const newProject = prompt("Project title:");
    if (newProject) {
      const today = new Date();
      const currentDate = today.toLocaleDateString("en-GB");
      setProjects([
        ...projects,
        {
          title: newProject,
          progress: "Planned",
          tech: "React",
          rapoLink: "",
          liveLink: "",
          notes: "",
          searchProject: "",
          createdDate: currentDate,
        },
      ]);
    }
  };

  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const deleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const filterProjects = () => {
    return projects.filter((project) => {
      const matchStatus = status === "All" || project.progress === status;

      const matchSearch = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchStatus && matchSearch;
    });
  };
  return (
    <>
      <div className="bg-[var(--themeColor)] w-[100%]  rounded-lg p-4 shadow-lg">
        <div className="project-top flex items-center justify-between mb-5">
          <h2 className="text-[var(--darkThemeColor)] text-2xl font-[600]">
            Projects
          </h2>
          <div className="rightSideSkill flex items-center justify-center gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Skills..."
              className="border-1 rounded border-[var(--borderColor)] outline-none p-2"
            />
            <select
              name=""
              id=""
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border-1 rounded border-[var(--borderColor)] outline-none p-2"
            >
              <option value="All">All</option>
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button
              onClick={addProject}
              className="cursor-pointer bg-[var(--dotColor)] p-2 text-[var(--themeColor)] rounded hover:bg-[var(--darkThemeColor)] hover:text-[var(--themeColor)]"
            >
              +Add
            </button>
          </div>
        </div>

        <div className="projects-box w-full flex  flex-wrap justify-between items-center gap-3 ">
          {filterProjects().map((project, index) => {
            return (
              <div
                key={index}
                className="py-2 px-4 rounded mb-2  flex  flex-wrap items-center justify-between gap-2 bg-yellow-200 w-[48%]"
              >
                <div className="project-card-top flex items-start justify-between w-full gap-3">
                  {/* LEFT */}
                  <div className="leftSide flex flex-col gap-1 flex-1 min-w-0">
                    <h3 className="text-2xl text-[var(--darkThemeColor)] font-[600] break-words">
                      {project.title}
                    </h3>
                    <span className="text-[var(--dotColor)] text-sm font-[500] ">
                      {project.tech}
                    </span>
                  </div>

                  {/* RIGHT */}
                  <div className="rightSide border rounded boarder-[var(--borderColor)] p-2 w-[140px] shrink-0">
                    <select
                      className="outline-none w-full"
                      value={project.progress}
                      onChange={(e) =>
                        handleChange(index, "progress", e.target.value)
                      }
                    >
                      <option value="Planned">Planned</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 flex-1 border rounded px-2">
                    <span>🔗</span>
                    <input
                      type="text"
                      value={project.rapoLink}
                      onChange={(e) => {
                        handleChange(index, "rapoLink", e.target.value);
                      }}
                      placeholder="Repo link"
                      className="w-full p-2 outline-none bg-transparent"
                    />
                  </div>

                  <div className="flex items-center gap-2 flex-1 border rounded px-2">
                    <span>🌐</span>
                    <input
                      type="text"
                      value={project.liveLink}
                      onChange={(e) =>
                        handleChange(index, "liveLink", e.target.value)
                      }
                      placeholder="Live link"
                      className="w-full p-2 outline-none bg-transparent boarder-[var(--borderColor)]"
                    />
                  </div>
                </div>

                <div className=" w-full">
                  <div className="flex items-start gap-2 flex-1 border border-[var(--borderColor)] rounded px-3 py-2 bg-[var(--bgElementColor)]">
                    <textarea
                      value={project.notes}
                      onChange={(e) =>
                        handleChange(index, "notes", e.target.value)
                      }
                      placeholder="Notes: edge cases, challenges, learnings"
                      className="w-full outline-none bg-transparent resize-none h-[80px] placeholder-[var(--themeColor)] text-[var(--themeColor)]"
                    ></textarea>
                  </div>
                </div>

                <div className=" w-full">
                  <div className="flex items-center justify-between gap-2 flex-1 border border-[var(--borderColor)] rounded px-3 py-2 bg-[var(--bgElementColor)]">
                    <span className="text-[var(--themeColor)]">
                      Created: {project.createdDate}
                    </span>
                    <button
                      onClick={() => deleteProject(index)}
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 text-[var(--themeColor)] rounded hover:bg-[var(--darkThemeColor)] hover:text-[var(--themeColor)]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
