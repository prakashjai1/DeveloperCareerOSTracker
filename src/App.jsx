import { useState } from 'react'
import { SideBar } from './SideBar'
import { MainBar } from './MainBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Dashboard } from './Dashboard'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Applications } from './Applications'
import { Notes } from './Notes'
import { Settings } from './Settings'
import { Header } from './Header'
import { PageLayout } from './PageLayout'


function App() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [date, setDate] = useState("")
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [application, setApplication] = useState([])
  const [notes, setNotes] = useState([])
  const [noteArea,setNoteArea] = useState([])
  const [dataImported,setDataImported] = useState([])


  return (
    <>
      <Header />  
      <div className="w-[100%] mx-auto flex items-start justify-between gap-4 py-4">
        <SideBar />
        
        <Routes>
          <Route path='/' element={<PageLayout title="Dashboard" streak={checkedIn ? "1" : "0"} best={checkedIn ? "1" : "0"} lastCheckin={checkedIn ? date : ""}  checkedIn={checkedIn} setCheckedIn={setCheckedIn} date={date} setDate={setDate}> <Dashboard projects={projects} skills={skills} application={application} /> </PageLayout>} />
          <Route path='/skills' element={<PageLayout title="Skills" streak={checkedIn ? "1" : "0"} best={checkedIn ? "1" : "0"} lastCheckin={checkedIn ? date : ""}  checkedIn={checkedIn} setCheckedIn={setCheckedIn} date={date} setDate={setDate}> <Skills skills={skills} setSkills={setSkills} /> </PageLayout>} />
          <Route path='/projects' element={<PageLayout title="Projects" streak={checkedIn ? "1" : "0"} best={checkedIn ? "1" : "0"} lastCheckin={checkedIn ? date : ""}  checkedIn={checkedIn} setCheckedIn={setCheckedIn} date={date} setDate={setDate} > <Projects projects={projects} setProjects={setProjects}/> </PageLayout>} />
          <Route path='/applications' element={<PageLayout title="Applications" streak={checkedIn ? "1" : "0"} best={checkedIn ? "1" : "0"} lastCheckin={checkedIn ? date : ""}  checkedIn={checkedIn} setCheckedIn={setCheckedIn} date={date} setDate={setDate}><Applications application={application} setApplication={setApplication} /> </PageLayout>} />
          <Route path='/notes' element={<PageLayout title="Notes" streak={checkedIn ? "1" : "0"} best={checkedIn ? "1" : "0"} lastCheckin={checkedIn ? date : ""}  checkedIn={checkedIn} setCheckedIn={setCheckedIn} date={date} setDate={setDate}><Notes notes={notes} setNotes={setNotes} noteArea={noteArea} setNoteArea={setNoteArea} /> </PageLayout>} />
          <Route path='/settings' element={<PageLayout title="Settings" streak={checkedIn ? "1" : "0"} best={checkedIn ? "1" : "0"} lastCheckin={checkedIn ? date : ""}  checkedIn={checkedIn} setCheckedIn={setCheckedIn} date={date} setDate={setDate}> <Settings skills={skills} setSkills={setSkills} projects={projects} setProjects={setProjects} application={application} setApplication={setApplication} dataImported={dataImported} setDataImported={setDataImported} /> </PageLayout>} />
        </Routes>

        <MainBar />
      </div>
    </>
  )
}

export default App
