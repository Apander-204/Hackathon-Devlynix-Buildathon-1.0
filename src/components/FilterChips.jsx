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
        <div className="flex flex-col bg-neutral-900">
            <h2 className="text-neutral-400 text-7xl mb-3">Skills</h2>
            <ul className={`flex flex-wrap gap-3 text-lg mb-7`}>
                {categories.map((category) => (
                    <li key={category}
                        className={`${activeSkills[category] ? "text-neutral-400" : "text-neutral-50"} hover:text-neutral-400 cursor-pointer`}
                        onClick={() => changeSkill(category)}>
                        {category}
                    </li>
                ))}
            </ul>
            <ul className={`flex flex-wrap gap-3 text-lg mb-7`}>
                {grades.map((grade) => (
                    <li key={grade}
                        className={`${activeGrades[grade] ? "text-neutral-400" : "text-neutral-50"} hover:text-neutral-400 cursor-pointer`}
                        onClick={() => changeGrade(grade)}>
                        {grade}
                    </li>
                ))}
            </ul>
        </div>
    );
}