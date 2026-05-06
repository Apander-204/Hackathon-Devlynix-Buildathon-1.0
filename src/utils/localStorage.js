function initDemoUsers() {
    if (!localStorage.getItem("hacksearch_users")) {
        const demos = [
            { 
                id: 1, 
                name: "Анна", 
                description: "Frontend разработчик с опытом 3 года", 
                skills: ["React", "CSS", "HTML"], 
                grade: "Middle", 
                emoji: "❤️", 
                socials: {
                    linkedin: '',
                    telegram: '',
                    discord: ''
                }
            },
            { 
                id: 2, 
                name: "Иван", 
                description: "Fullstack разработчик", 
                skills: ["JavaScript", "React", "Python"], 
                grade: "Senior", 
                emoji: "🚀", 
                socials: {
                    linkedin: '',
                    telegram: '',
                    discord: ''
                }
            }
        ];
        localStorage.setItem("hacksearch_users", JSON.stringify(demos));
    }
}

function loadAllUsers() {
    const users = localStorage.getItem("hacksearch_users");
    return users ? JSON.parse(users) : [];
}

function addUser(user) {
    let users = JSON.parse(localStorage.getItem("hacksearch_users") || "[]");
    users.push(user);
    localStorage.setItem("hacksearch_users", JSON.stringify(users));
    localStorage.setItem("hacksearch_created_user", JSON.stringify(user));
}

function getCreatedUser() {
    const user = localStorage.getItem("hacksearch_created_user");
    return user ? JSON.parse(user) : null;
}

function clearCreatedUser() {
    localStorage.removeItem("hacksearch_created_user");
}

function updateCreatedUser(user) {
    localStorage.setItem("hacksearch_created_user", JSON.stringify(user));
}

export { initDemoUsers, loadAllUsers, addUser, getCreatedUser, clearCreatedUser, updateCreatedUser };