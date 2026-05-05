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

    return(
        <div className="flex bg-neutral-900">
            <ul className={`flex gap-3 text-lg `}>
                {categories.map((category) => (
                    <li key={category}
                        className={`${activeSkills[category] ? "text-neutral-400" : "text-neutral-50"} hover:text-neutral-400`}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}