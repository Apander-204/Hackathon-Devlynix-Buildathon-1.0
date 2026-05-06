import { useState } from "react";
import { skillsSort } from "../utils/sortingUsers";

export default function FilterChips({activeSkills, setActiveSkills, activeGrades, setActiveGrades}) {

    const categories = ["All", "HTML", "CSS", "JavaScript", "React", "Vue", "Angular", "Python", "FastAPI"];
    let grades = ["All", "Trainee", "Junior", "Middle", "Senior"];

    const changeSkill = (skill) => {
        setActiveSkills(prev => {
            if (skill === "All") {
                const newState = Object.keys(prev).reduce((acc, curr) => {
                    acc[curr] = false;
                    return acc;
                }, {});
                newState["All"] = true;
                return newState;
            }

            const newState = { ...prev, "All": false };
            newState[skill] = !prev[skill];

            const hasAnySkill = Object.keys(newState).some(key => 
                key !== "All" && newState[key] === true
            );

            if (!hasAnySkill) {
                newState["All"] = true;
            }
            
            return newState;
        });
    };

    const changeGrade = (grade) => {
        setActiveGrades(prev => {
            if (grade === "All") {
                const newState = Object.keys(prev).reduce((acc, curr) => {
                    acc[curr] = false;
                    return acc;
                }, {});
                newState["All"] = true;
                return newState;
            }

            const newState = { ...prev, "All": false };

            Object.keys(newState).forEach(g => {
                if (g !== grade && g !== "All") {
                    newState[g] = false;
                }
            });

            newState[grade] = !prev[grade];

            if (!newState[grade]) {
                const hasAnyGrade = Object.keys(newState).some(g => 
                    g !== "All" && newState[g] === true
                );

                if (!hasAnyGrade) {
                    newState["All"] = true;
                }
            }
            
            return newState;
        });
    };

    return(
        <div className="flex flex-col w-full md:w-auto">
            <div className="mb-6">
                <h2 className="text-gray-500 text-sm uppercase tracking-wider mb-3 font-mono">
                    Filter by skills
                </h2>
                <ul className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <li key={category}>
                            <button
                                onClick={() => changeSkill(category)}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                                    activeSkills[category] 
                                        ? "bg-white text-black" 
                                        : "bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-gray-200"
                                }`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-gray-500 text-sm uppercase tracking-wider mb-3 font-mono">
                    Filter by level
                </h2>
                <ul className="flex flex-wrap gap-2">
                    {grades.map((grade) => (
                        <li key={grade}>
                            <button
                                onClick={() => changeGrade(grade)}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                                    activeGrades[grade] 
                                        ? "bg-white text-black" 
                                        : "bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-gray-200"
                                }`}
                            >
                                {grade}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}