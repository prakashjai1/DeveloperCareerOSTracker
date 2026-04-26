import { useState } from "react";

export const Notes = ({ notes, setNotes,noteArea,setNoteArea }) => {
  const [searchNoteArea,setSearchNoteArea] = useState("")
  const [textAreaOpen,setTextAreaOpen] = useState()
  const addNote = () => {
    const noteName = prompt("Note title:");
    const currDate = new Date()
    const newDate = currDate.toLocaleDateString("en-GB")
    
    if (noteName.trim()) {
      setNotes([
        ...notes,
        {
          noteTitle: noteName,
          noteDate:newDate,
        },
      ]);
      setNoteArea([
        ...noteArea,
        {
          textArea:""
        },
        
      ])
    }
    
  };

  const handleChange = (index,field,value)=>{
    const updatedNote = [...noteArea]
    updatedNote[index][field] = value
    setNoteArea(updatedNote)
  }

  const filterNote = ()=>{
    return notes.filter((note)=>{
      return note.noteTitle
      .toLowerCase()
      .includes(searchNoteArea.toLowerCase());
    })
  }

  const deleteNote = (index)=>{
    const newNote = [...notes]
    const newTextarea = [...noteArea]
    newNote.splice(index,1)
    newTextarea.splice(index,1)
    setNotes(newNote)
    setNoteArea(newTextarea)
  }

  return (
    <>
      <div className=" w-[100%]  flex justify-between items-start">
        <div className="left-part w-[30%] bg-[var(--themeColor)]  rounded-lg p-4 shadow-lg">
          <div className="top flex justify-between items-center">
            <h1 className="text-2xl font-[700] text-[var(--darkThemeColor)]">
              Notes
            </h1>
            <button
              onClick={addNote}
              className="cursor-pointer bg-[var(--dotColor)] p-2 text-[var(--themeColor)] rounded hover:bg-[var(--darkThemeColor)] hover:text-[var(--themeColor)]"
            >
              +Add
            </button>
          </div>
          {
            notes.length > 0 &&

          
            filterNote().map((note,index)=>{
                return(
                    <div id={index} className="flex flex-col justify-center items-start w-[100%] bg-green-200 p-2 mt-2 rounded-xl" onClick={()=>setTextAreaOpen(index)}>
                        <h2 className="text-xl font-[600] capitalize">{note.noteTitle}</h2>
                        <span className="text-gray-500 text-2">{note.noteDate}</span>
                    </div>
                )
            })
          
          }
        </div>
        
        <div className="right-part w-[69%]">
          <div className="textarea-top  w-full mt-2 mb-2 flex justify-between items-center">
            <div className="search-box w-[85%] shadow-lg rounded-lg border border-gray-100 p-2">
              <input type="text" className="w-[100%] outline-none" placeholder="Search Note" value={searchNoteArea} onChange={(e)=>setSearchNoteArea(e.target.value)}/>
            </div>
            <button className="w-[10%] bg-red-500 text-white p-2 rounded hover:bg-red-600" onClick={()=>deleteNote(notes.length -1)}>Delete</button>
          </div>
          {
            textAreaOpen != undefined
            ?
            (<div className="shadow hover:shadow-lg rounded-lg p-4 w-[100%] flex justify-between items-start mt-2">
              <textarea name="" id="" className="w-full h-[40vh] outline-none" value={noteArea[textAreaOpen]?.textArea || "" } onChange={(e)=>handleChange(textAreaOpen, "textArea", e.target.value)}></textarea>
            </div>)
            :
            notes.length > 0 &&
                <div className="shadow hover:shadow-lg rounded-lg p-4 w-[100%] flex justify-between items-start mt-2">
                  <textarea name="" id="" className="w-full h-[40vh] outline-none" value={noteArea[notes.length -1]?.textArea || "" } onChange={(e)=>handleChange(notes.length -1, "textArea", e.target.value)}></textarea>
                </div>
          }
        </div>
      </div>
    </>
  );
};
