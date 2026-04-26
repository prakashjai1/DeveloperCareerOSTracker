import { useState } from "react";

export const Applications = ({ application, setApplication }) => {
  const [searchApplication, setSearchApplication] = useState("");
  const [appStatus,setAppStatus] = useState("All")

  // Add New Application
  const addApplication = () => {
    const company = prompt("Company:");
    const role = prompt("Role:");
    const newDate = new Date();
    const applingDate = newDate.toLocaleDateString("en-GB");
    if (company && role) {
      setApplication([
        ...application,
        {
          companyName: company,
          roleName: role,
          stage: "Applied",
          applyDate: applingDate,
          postLink: "",
          note: "",
        },
      ])
    }
  }

  const handleChange = (index, field, value) => {
    const updatedApplication = [...application]
    updatedApplication[index][field] = value
    setApplication(updatedApplication)
  }

  const filterApplication = ()=>{
    return application.filter((app)=>{
      const matchStatus = appStatus === "All" || app.stage === appStatus
      const matchSearch = app.companyName

      return(matchStatus && matchSearch)
    })

  }

  const deleteApplication = (index)=>{
    const updatedApplication = [...application]
    updatedApplication.splice(index,1)
    setApplication(updatedApplication)
    
  }

  return (
    <>
      <div className="bg-[var(--themeColor)] w-[100%] rounded-lg p-4 shadow-lg">
        <div className="application-top flex items-center justify-between mb-5">
          <h2 className="text-[var(--darkThemeColor)] text-2xl font-[600]">
            Application
          </h2>
          <div className="rightSideApplication flex items-center justify-center gap-2">
            <input
              type="text"
              placeholder="Search Application..."
              value={searchApplication}
              onChange={(e) => setSearchApplication(e.target.value)}
              className="border-1 rounded border-[var(--borderColor)] outline-none p-2"
            />
            <select
              name=""
              id=""
              //   value={status}
              //   onChange={(e) => setStatus(e.target.value)}
              className="border-1 rounded border-[var(--borderColor)] outline-none p-2"
            >
              <option value="All">All</option>
              <option value="Applied">Applied</option>
              <option value="Screening">Screening</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
            <button
              onClick={addApplication}
              className="cursor-pointer bg-[var(--dotColor)] p-2 text-[var(--themeColor)] rounded hover:bg-[var(--darkThemeColor)] hover:text-[var(--themeColor)]"
            >
              +Add
            </button>
          </div>
        </div>
        <div className="projects-box w-full flex  flex-wrap justify-left items-center gap-3 ">
          <div className="flex items-center justify-between mb-2 px-2 text-[var(--darkThemeColor)] font-semibold w-full">
            <div className="w-[20%]">Company</div>
            <div className="w-[15%]">Role</div>
            <div className="w-[10%]">Stage</div>
            <div className="w-[10%]">Date</div>
            <div className="w-[15%]">Link</div>
            <div className="w-[25%]">Notes</div>
            
          </div>
          {application.length > 0 &&
            filterApplication().map((app, index) => {
              return (
                <div
                  key={index}
                  className="py-2 px-4 rounded mb-2  flex  flex-wrap items-center justify-left  gap-2 bg-green-100 w-[100%]"
                >
                  <div className="company-name text-2xl text-[var(--darkThemeColor)] font-[700] w-[20%] break-words">
                    <h2 className="whitespace-normal">{app.companyName}</h2>
                  </div>

                  <div className="role text-xl text-[var(--darkThemeColor)] font-[500] w-[15%] break-words">
                    <h2 className="whitespace-normal">{app.roleName}</h2>
                  </div>
                  <div className="stage border rounded boarder-[var(--borderColor)] p-2 shrink-0 w-[10%]">
                    <select name="" id="" className="outline-none w-full" value={app.stage} onChange={(e)=>handleChange(index,"stage",e.target.value)}>
                      <option value="Applied">Applied</option>
                      <option value="Screening">Screening</option>
                      <option value="Interview">Interview</option>
                      <option value="Offer">Offer</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                  <div className="date  p-2 bg-transparent border rounded boarder-[var(--borderColor)] w-[10%]">
                    <span>{app.applyDate}</span>
                  </div>
                  <div className="job-post  p-2 bg-transparent border rounded boarder-[var(--borderColor)] w-[15%]">
                    <input
                      type="text"
                      placeholder="Job post link"
                      className="outline-none "
                      value={app.postLink}
                      onChange={(e)=>handleChange(index,"postLink",e.target.value)}
                    />
                  </div>
                  <div className="note  p-2 bg-transparent border rounded boarder-[var(--borderColor)] w-[17%]">
                    <input
                      type="text"
                      placeholder="Follow up/Feedback"
                      className="outline-none"
                      value={app.note}
                      onChange={(e)=>handleChange(index,"note",e.target.value)}
                    />
                  </div>
                  <div className="removeBtn w-[8%]">
                    <button
                      className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 cursor-pointer"
                      onClick={()=>{deleteApplication(index)}}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
