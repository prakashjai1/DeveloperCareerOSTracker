export const Dashboard = ({ projects, skills,application }) => {
  const totalProjects = projects.length;
  const recentProjects = projects.slice(-3).reverse();
  const formatLink = (url) => {
    if (!url) return "#";
    if (!url.startsWith("http")) {
      return "https://" + url;
    }
    return url;
  };

  const planned = projects.filter((p) => p.progress === "Planned").length;
  const inProgress = projects.filter(
    (p) => p.progress === "In Progress",
  ).length;
  const done = projects.filter((p) => p.progress === "Done").length;

  const totalSkills = skills.length;

  const avgLevel =
    skills.length > 0
      ? (
          skills.reduce((acc, skill) => acc + Number(skill.level), 0) /
          skills.length
        ).toFixed(1)
      : 0;

  const strongSkills = skills.filter((s) => s.level >= 4).length;
  const weakSkills = skills.filter((s) => s.level <= 2).length;

  const completionRate =
    totalProjects > 0 ? Math.round((done / totalProjects) * 100) : 0;


  const totalApplication = application.length
  const totalScreening = application.filter((app) => app.stage === "Screening").length;
  const totalInterview = application.filter((app) => app.stage === "Interview").length;
  const totalOffer = application.filter((app) => app.stage === "Offer").length;
  const totalRejected = application.filter((app) => app.stage === "Rejected").length;


  return (
    <div className="bg-[var(--themeColor)] w-[100%] rounded-lg p-4 shadow-lg">
      <h1 className="text-3xl font-bold mb-5 text-[var(--darkThemeColor)]">
        Dashboard
      </h1>

      {/* 🔥 Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-[var(--bgElementColor)] rounded shadow">
          <h3>Total Projects</h3>
          <p className="text-2xl font-bold">{totalProjects}</p>
        </div>

        <div className="p-4 bg-yellow-100 rounded shadow">
          <h3>Planned</h3>
          <p>{planned}</p>
        </div>

        <div className="p-4 bg-blue-100 rounded shadow">
          <h3>In Progress</h3>
          <p>{inProgress}</p>
        </div>

        <div className="p-4 bg-green-100 rounded shadow">
          <h3>Done</h3>
          <p>{done}</p>
        </div>
      </div>

      {/* 🔥 Skills Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-[var(--bgElementColor)] rounded shadow">
          <h3>Total Skills</h3>
          <p className="text-2xl font-bold">{totalSkills}</p>
        </div>

        <div className="p-4 bg-purple-100 rounded shadow">
          <h3>Avg Level</h3>
          <p>{avgLevel}</p>
        </div>

        <div className="p-4 bg-green-100 rounded shadow">
          <h3>Strong Skills</h3>
          <p>{strongSkills}</p>
        </div>

        <div className="p-4 bg-red-100 rounded shadow">
          <h3>Weak Skills</h3>
          <p>{weakSkills}</p>
        </div>
      </div>

      {/* 🔥 Application Stats */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
        <div className="p-4 bg-[var(--bgElementColor)] rounded shadow">
          <h3>Total Application</h3>
          <p className="text-2xl font-bold">{totalApplication}</p>
        </div>

        <div className="p-4 bg-purple-100 rounded shadow">
          <h3>Total Screening</h3>
          <p>{totalScreening}</p>
        </div>

        <div className="p-4 bg-green-100 rounded shadow">
          <h3>Total Interview</h3>
          <p>{totalInterview}</p>
        </div>

        <div className="p-4 bg-red-100 rounded shadow">
          <h3>Total Offer</h3>
          <p>{totalOffer}</p>
        </div> 

        <div className="p-4 bg-red-400 rounded shadow">
          <h3>Total Rejected</h3>
          <p>{totalRejected}</p>
        </div>
       
      </div>

      {/* 🔥 Progress Bar */}
      <div>
        <h3 className="mb-2">Project Completion</h3>
        <div className="w-full bg-gray-300 h-3 rounded">
          <div
            className="bg-green-500 h-3 rounded"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
        <p className="mt-1 text-sm">{completionRate}% completed</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Recent Projects</h3>

        {recentProjects.length === 0 ? (
          <p>No projects added</p>
        ) : (
          recentProjects.map((project, index) => (
            <div
              key={index}
              className="p-3 mb-2 rounded bg-[var(--bgElementColor)] flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-500">{project.progress}</p>
              </div>

              <div className="flex gap-3">
                {/* Repo */}
                {project.rapoLink && (
                  <a
                    href={formatLink(project.rapoLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-sm"
                  >
                    Repo
                  </a>
                )}

                {/* Live */}
                {project.liveLink && (
                  <a
                    href={formatLink(project.liveLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 underline text-sm"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
