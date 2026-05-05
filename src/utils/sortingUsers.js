
function skillsSort(activeSkills, activeGrades) {
    const users = JSON.parse(localStorage.getItem("hacksearch_users")) || [];
    
    const activeSkillsList = Object.keys(activeSkills).filter(s => activeSkills[s] && s !== "All");
    const activeGradesList = Object.keys(activeGrades).filter(g => activeGrades[g] && g !== "All");
    
    if (activeSkillsList.length === 0 && activeGradesList.length === 0) {
        return users;
    }
    
    return users.filter(user => {
        let skillMatch = true;
        let gradeMatch = true;
        
        if (activeSkillsList.length > 0) {
            skillMatch = activeSkillsList.every(skill => user.skills.includes(skill));
        }
        
        if (activeGradesList.length > 0) {
            gradeMatch = activeGradesList.includes(user.grade);
        }
        
        return skillMatch && gradeMatch;
    });
}

export { skillsSort};