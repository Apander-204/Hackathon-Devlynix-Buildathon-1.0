import { useState } from "react";

export default function FilterChips() {

    const categories = ["All", "HTML", "CSS", "JavaScript", "React", "Vue", "Angular", "Python", "FastAPI"];

    let [activeSkills, setActiveSkills] = useState({
        "All": true,
        "HTML": false,
        "CSS": false,
        "JavaScript": false,
        "React": false,
        "Vue": false,
        "Angular": false,
        "Python": false,
        "FastAPI": false
    });

    let grades = ["Trainee", "Junior", "Middle", "Senior"];

    let [activeGrades, setActiveGrades] = useState({
        "Trainee": false,
        "Junior": false,
        "Middle": false,
        "Senior": false
    });

    return(
        <div className="flex flex-col bg-neutral-900">
            <h2 className="text-neutral-400 text-7xl mb-3">Skills</h2>
            <ul className={`flex flex-wrap gap-3 text-lg mb-7`}>
                {categories.map((category) => (
                    <li key={category}
                        className={`${activeSkills[category] ? "text-neutral-400" : "text-neutral-50"} hover:text-neutral-400`}>
                        {category}
                    </li>
                ))}
            </ul>
            <ul className={`flex flex-wrap gap-3 text-lg mb-7`}>
                {grades.map((grade) => (
                    <li key={grade}
                        className={`${activeGrades[grade] ? "text-neutral-400" : "text-neutral-50"} hover:text-neutral-400`}>
                        {grade}
                    </li>
                ))}
            </ul>
        </div>
    );
}