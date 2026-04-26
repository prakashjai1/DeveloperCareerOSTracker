import { useState } from "react"

export const Settings = ({skills,projects,application,dataImported,setDataImported}) => {
    const [allData,setAllData] = useState("")
    

    const exportData = ()=>{
        const data = {
            skills:skills,
            projects:projects,
            application:application
        }
        const jsonData = JSON.stringify(data)
        setAllData(jsonData)
    }
    const importData = ()=>{
        const newData = JSON.parse(allData)
        setDataImported(JSON.stringify(newData, null, 2));
    }
    return(
        <>
        <div className="bg-[var(--themeColor)] w-[100%]  rounded-lg p-4 shadow-lg">
            <h2 className="text-2xl text-[var(--darkThemeColor)] font-[600]">Settings</h2>
            <p className="text-gray-600">Data is saved only run time in browser. You can export/import JSON.</p>

            <div className="tow-box flex justify-between items-start w-full mt-4">
                <div className="export-import shadow-lg rounded-lg w-[100%] p-2 bg-[var(--themeColor)] border border-gray-300">
                    <h2 className="text-2xl text-[var(--darkThemeColor)] font-[600]">Export/Import</h2>
                    <div className="flex justify-between items-center w-full mt-4">
                        <button className="border border border-gray-500 shadow bg-purple-300 cursor-pointer rounded-2xl font-[600]  p-2 text-[var(--darkThemeColor)]" onClick={exportData}>Export JSON</button>
                        <button className="border border border-gray-500 shadow bg-green-200 cursor-pointer rounded-2xl font-[600]  p-2 text-[var(--darkThemeColor)]" onClick={importData}>Import JSON</button>
                    </div>
                    <div className="extrak-part w-full p-2 border border-gray-300 rounded-lg shadow-lg mt-3 h-[40vh] bg-gray-100">
                        <textarea name="" id="" placeholder="Export will appear here. JSON here to import" className="text-gray-600 outline-none w-full h-full" value={dataImported} onChange={(e)=>setDataImported(e.target.value)}></textarea>
                    </div>
                </div>
                {/* <div className="reset shadow-lg rounded-lg w-[49%] p-2 h-[20vh] bg-[var(--themeColor)] border border-gray-300">

                </div> */}
            </div>
        </div>
        </>
    )
}