import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaBriefcase   } from "react-icons/fa";
import {Link, NavLink} from "react-router-dom"
export const SideBar = () => {
    
    const navMenu = [
        {
            title: "Dashboard",
            id: Math.random(),
            to: "/",
            iconSlider: <FaHome className="text-[var(--dotColor)]"/>
        },
        {
            title: "Skills",
            id: Math.random(),
            to: "/skills",
            iconSlider: <FaCode className="text-[var(--dotColor)]"/>
        },
        {
            title: "Projects",
            id: Math.random(),
            to: "/projects",
            iconSlider: <FaBriefcase   className="text-[var(--dotColor)]"/>
        },
        {
            title: "Applications",
            id: Math.random(),
            to: "/applications",
            iconSlider: <MdOutlineEventNote className="text-[var(--dotColor)]"/>
        },
        {
            title: "Notes",
            id: Math.random(),
            to: "/notes",
            iconSlider: <LuNotebookPen className="text-[var(--dotColor)]"/>
        },
        {
            title: "Settings",
            id: Math.random(),
            to: "/settings",
            iconSlider: <IoSettings className="text-[var(--dotColor)]"/>
        }
    ]
    return(
        <>
            <div className="sideBar bg-[var(--themeColor)] w-[18%] h-[85vh] rounded-lg p-4 shadow-lg">
                <ul className="flex flex-col justify-center items-start  gap-2">
                   {
                    navMenu.map((item)=>{
                    return(
                        <NavLink to={item.to}  className={({isActive})=> `  nav-link w-[95%] mx-auto flex justify-start items-center px-2 py-3 rounded-xl gap-2 font-[700] cursor-pointer ${isActive ? 'bg-[var(--bgElementColor)] text-[var(--themeColor)] shadow-[-2px_2px_0px_1px_var(--darkThemeColor)]' : 'bg-[transparent] text-[var(--darkThemeColor)] '} `} key={item.id}>{item.iconSlider} {item.title}</NavLink>
                    )
                   })
                   }
                </ul>
            </div>
        </>
    )
}