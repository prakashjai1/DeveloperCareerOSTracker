import { useState } from "react";

export const Skills = ({ skills, setSkills }) => {
  const [searchTerm, setSearchTerm] = useState("");
  let newSkill = "";

  // Add New skill
  const addSkill = () => {
    newSkill = prompt("Enter a new skill:");
    if (newSkill) {
      setSkills([
        ...skills,
        {
          name: newSkill,
          level: 1,
          target: 1,
          notes: "",
        },
      ]);
    }
  };

  // Update skill details
  const handleChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  //Delete a skill
  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const filterSkills = () => {
    return skills.filter((skill) => {
      const matchSearch = skill.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchSearch;
    });
  };
  return (
    <>
      <div className="bg-[var(--themeColor)] w-[100%]  rounded-lg p-4 shadow-lg">
        <div className="skill-top flex items-center justify-between mb-5">
          <h2 className="text-[var(--darkThemeColor)] text-2xl font-[600]">
            Skills
          </h2>
          <div className="rightSideSkill flex items-center justify-center gap-2">
            <input
              type="text"
              placeholder="Search Skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-1 rounded border-[var(--borderColor)] outline-none p-2"
            />
            <button
              onClick={addSkill}
              className="cursor-pointer bg-[var(--dotColor)] p-2 text-[var(--themeColor)] rounded hover:bg-[var(--darkThemeColor)] hover:text-[var(--themeColor)]"
            >
              +Add
            </button>
          </div>
        </div>

        {
          <div className="">
            <div className="flex items-center justify-between mb-2 px-2 text-[var(--darkThemeColor)] font-semibold">
              <div className="w-[30%]">Skill</div>
              <div className="w-[10%] text-center">Level</div>
              <div className="w-[15%] text-center">Target</div>
              <div className="w-[35%]">Notes</div>
              <div className="w-[10%] text-center">Action</div>
            </div>
            {filterSkills().map((skill, index) => {
              return (
                <div
                  key={index}
                  className="py-2 px-4 rounded mb-2  flex items-center justify-between gap-2 bg-[var(--bodyColor)]"
                >
                  <div className="skill-part w-[30%]">
                    <h3 className="text-[var(--darkThemeColor)] text-3xl font-[600]">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="level-part flex items-center justify-center gap-2 w-[10%] shadow p-1 rounded border  text-[var(--darkThemeColor)] bg-gray-100 border-[var(--borderColor)] ">
                    <button
                      className="bg-gray-300 py-1 px-2 rounded font-[600]"
                      onClick={() =>
                        skill.level > 1 &&
                        handleChange(index, "level", skill.level - 1)
                      }
                    >
                      -
                    </button>
                    <span className="text-[var(--darkThemeColor)] text-xl font-[600]">
                      {skill.level}
                    </span>
                    <button
                      className="bg-gray-300 py-1 px-2 rounded font-[600]"
                      onClick={() =>
                        skill.level < 5 &&
                        handleChange(index, "level", skill.level + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="target-part bg-[var(--themeColor)] w-[15%] p-2 rounded border border-[var(--borderColor)] shadow text-[var(--darkThemeColor)]">
                    <select
                      name=""
                      id=""
                      className="w-full outline-none w-full"
                      value={skill.target}
                      onChange={(e) =>
                        handleChange(index, "target", e.target.value)
                      }
                    >
                      <option value="1" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="note-part w-[35%]">
                    <input
                      type="text"
                      placeholder="What's next?"
                      className="border-1 rounded bg-[var(--themeColor)] border-[var(--borderColor)] outline-none p-2 w-full"
                      value={skill.notes}
                      onChange={(e) =>
                        handleChange(index, "notes", e.target.value)
                      }
                    />
                  </div>
                  <div className="removeBtn w-[10%]">
                    <button
                      className="w-full bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => deleteSkill(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        }

        {skills.length > 0 && (
          <h3>
            Rule: Target 4/5 on core stack + be able to explain decisions.
          </h3>
        )}
      </div>
    </>
  );
};
