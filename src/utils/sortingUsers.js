function skillsSort(users, activeSkills, activeGrades, searchTerm) {
    const activeSkillsList = Object.keys(activeSkills).filter(s => activeSkills[s] && s !== "All");
    const activeGradesList = Object.keys(activeGrades).filter(g => activeGrades[g] && g !== "All");

    if (activeSkillsList.length === 0 && activeGradesList.length === 0 && !searchTerm) {
        return users;
    }
    
    return users.filter(user => {
        let skillMatch = true;
        let gradeMatch = true;
        let nameMatch = true;

        if (activeSkillsList.length > 0) {
            skillMatch = activeSkillsList.every(skill => user.skills.includes(skill));
        }

        if (activeGradesList.length > 0) {
            gradeMatch = activeGradesList.includes(user.grade);
        }

        if (searchTerm && searchTerm.trim()) {
            nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
        }

        return skillMatch && gradeMatch && nameMatch;
    });
}

export { skillsSort };