import { useState } from "react"

export const PageLayout = ({title,streak,best,lastCheckin,checkedIn,setCheckedIn,date,setDate, children}) => {
    
    const checkIn = () => {
        setCheckedIn(true)
        setDate(()=>{
            const today = new Date()
            const currentDate = today.toLocaleDateString("en-GB")
            return currentDate
        })
    }
    return(
        <>
            <div className="bg-[var(--themeColor)] w-[80%]  rounded-lg p-4 shadow-lg">
                <div className="header flex items-center justify-between mb-4 shadow p-5 rounded">
                    <div className="left-side flex flex-col items-start justify-center gap-2">
                        <h1 className="font-[700] text-3xl">{title}</h1>
                        <ul className="flex items-center justify-center gap-8 list-none">
                            <li>Current Streak: {streak}</li>
                            <li>Best: {best}</li>
                            <li>Last Check-in: {lastCheckin}</li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <button onClick={checkIn} className="cursor-pointer bg-[var(--dotColor)] px-3 py-1 text-[var(--themeColor)] rounded hover:bg-[var(--darkThemeColor)] hover:text-[var(--themeColor)]">
                           {checkedIn ? "Checked-in ✅" : "Daily Check-in" }
                        </button>
                    </div>
                
                </div>
                {children}
            </div>
        </>
    )
}