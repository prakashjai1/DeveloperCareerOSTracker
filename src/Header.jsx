import { useState,useRef } from "react";
import closeIcon from "./assets/close.png"

export const Header = () => {

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("Jai Prakash Patel");
  const [role, setRole] = useState("Frontend Developer");
  const [designation, setDesignation] = useState("Get a job in 2026");
  const [profileImg, setProfileImg] = useState("https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D");

  let stuName = useRef();
  let stuRole = useRef();
  let stuDesignation = useRef();
  let stuProfile = useRef();

  const editProfile = () => {
        setEdit(true);
  };

  const saveProfile = (e) =>{
    e.preventDefault()
    stuName = stuName.current.value;
    stuRole = stuRole.current.value;
    stuDesignation = stuDesignation.current.value;
    stuProfile = stuProfile.current.files[0];
    
    setName(stuName);
    setRole(stuRole);
    setDesignation(stuDesignation);
    setProfileImg(URL.createObjectURL(stuProfile));
    setEdit(false);
  }
  return (
    <>
      <header className="w-[100%] ">
        <div className="w-[95%] mx-auto flex items-center justify-between py-2">
          <div className="left flex items-center justify-between gap-2">
            <div className="left-profile">
              <p className="bg-[var(--bgElementColor)] inline-block p-3 border border-[var(--textColor)] rounded-lg font-[800]">
                OS
              </p>
            </div>
            <div className="text-area">
              <h1 className="font-[800]">Developer Career OS</h1>
              <div className="flex items-center justify-center text-[var(--textColor)] gap-8">
                Track skills
                <ul className="flex items-center justify-center gap-8 list-disc">
                  <li>projects</li>
                  <li>applications</li>
                  <li>streak</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <ul className="flex items-center justify-center gap-8 list-disc">
              <li className="text-[var(--textColor)]">{name}</li>
              <li className="text-[var(--textColor)]">{role}</li>
              <li className="text-[var(--textColor)]">{designation}</li>
              <li className="list-none text-[var(--darkColor)] flex flex-col items-center justify-center gap-2">
                <span className="right-profile bg-[var(--bgElementColor)] inline-block  border border-[var(--textColor)] rounded-full font-[800]">
                <img src={profileImg} alt="Profile" className=" w-[100px] h-[100px] rounded-full object-cover" />
                </span>
                
                <button
                  className="bg-[var(--dotColor)] px-3 py-1 text-[var(--themeColor)] rounded hover:bg-[var(--darkThemeColor)] hover:text-[var(--themeColor)] cursor-pointer"
                  onClick={editProfile}
                >
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {edit && (
        <div className="edit-profile w-[100%] h-[100%] absolute top-[0%] right-[0%] bg-[var(--themeColor)] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
          <button onClick={()=> setEdit(false)} className="absolute top-5 right-5"><img src={closeIcon} alt="" className="w-[50px]" /></button>
          <h2 className="text-[var(--textColor)] font-[700] text-lg mb-4">
            Edit Profile
          </h2>
          <form className="flex flex-col gap-4 w-[30%]" onSubmit={saveProfile}>
            <input
              ref={stuName}
              type="text"
              placeholder="Name"
              required
              className="p-2 rounded border border-[var(--textColor)] bg-[transparent] text-[var(--textColor)]"
            />
            <input
              ref={stuRole}
              type="text"
              placeholder="Profession"
              required
              className="p-2 rounded border border-[var(--textColor)] bg-[transparent] text-[var(--textColor)]"
            />
            <input
              ref={stuDesignation}
              type="text"
              placeholder="Goal"
              required
              className="p-2 rounded border border-[var(--textColor)] bg-[transparent] text-[var(--textColor)]"
            />
            <input ref={stuProfile} required type="file" className="p-2 rounded border border-[var(--textColor)] bg-[transparent] text-[var(--textColor)]" />
            <button
              type="submit"
              className="bg-[var(--dotColor)] px-3 py-2 text-[var(--themeColor)] rounded hover:bg-[var(--darkThemeColor)] hover:text-[var(--themeColor)]"
              onClick={saveProfile}
            >
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
};
