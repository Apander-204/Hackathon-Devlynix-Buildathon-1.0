function initDemoUsers() {
    if (!localStorage.getItem("hacksearch_users")) {
        const demos = [
            { 
                id: 1, 
                name: "Sarah Chen", 
                description: "Full-stack developer with 5 years of experience. Passionate about React and clean code.", 
                skills: ["React", "Node.js", "TypeScript"], 
                grade: "Senior", 
                emoji: "🚀", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 2, 
                name: "Marcus Johnson", 
                description: "UI/UX designer turned frontend dev. Creating beautiful, accessible interfaces.", 
                skills: ["UI/UX", "React", "CSS"], 
                grade: "Middle", 
                emoji: "🎨", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 3, 
                name: "Elena Volkov", 
                description: "Backend developer specializing in Python and AI. Looking for hackathon team!", 
                skills: ["Python", "FastAPI", "AI"], 
                grade: "Middle", 
                emoji: "🐍", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 4, 
                name: "David Kim", 
                description: "JavaScript enthusiast. Building web apps since 2020. Open to collaborate.", 
                skills: ["JavaScript", "React", "Vue"], 
                grade: "Junior", 
                emoji: "⚡", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 5, 
                name: "Priya Sharma", 
                description: "Tech lead and mentor. Love building scalable solutions and helping juniors grow.", 
                skills: ["React", "Node.js", "Python"], 
                grade: "Senior", 
                emoji: "🌟", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 6, 
                name: "Carlos Mendez", 
                description: "Mobile dev exploring web3. Looking for frontend-backend collab.", 
                skills: ["React", "Web3", "JavaScript"], 
                grade: "Middle", 
                emoji: "📱", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 7, 
                name: "Aisha Okafor", 
                description: "Self-taught developer. Passionate about open source and community building.", 
                skills: ["HTML", "CSS", "JavaScript"], 
                grade: "Trainee", 
                emoji: "💻", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 8, 
                name: "Thomas Weber", 
                description: "Software architect with 8+ years in enterprise. Seeking side project teammates.", 
                skills: ["Angular", "TypeScript", "Node.js"], 
                grade: "Senior", 
                emoji: "🏛️", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 9, 
                name: "Yuki Tanaka", 
                description: "Frontend specialist. Love creating smooth animations and responsive designs.", 
                skills: ["React", "CSS", "UI/UX"], 
                grade: "Middle", 
                emoji: "🎯", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 10, 
                name: "Oliver Smith", 
                description: "CS student eager to learn and build real-world projects.", 
                skills: ["HTML", "CSS", "JavaScript"], 
                grade: "Trainee", 
                emoji: "📚", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 11, 
                name: "Nina Petrov", 
                description: "Data scientist transitioning to fullstack. Strong Python and FastAPI skills.", 
                skills: ["Python", "FastAPI", "AI"], 
                grade: "Middle", 
                emoji: "🤖", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 12, 
                name: "James Wilson", 
                description: "DevOps engineer who loves frontend on weekends. React and Vue enthusiast.", 
                skills: ["React", "Vue", "JavaScript"], 
                grade: "Senior", 
                emoji: "🛠️", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 13, 
                name: "Sofia Rossi", 
                description: "Creative developer with eye for design. Building aesthetic web experiences.", 
                skills: ["UI/UX", "HTML", "CSS"], 
                grade: "Junior", 
                emoji: "💎", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 14, 
                name: "Rahul Mehta", 
                description: "Open source contributor. Looking for hackathon team to build something meaningful.", 
                skills: ["React", "Node.js", "AI"], 
                grade: "Middle", 
                emoji: "🔥", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 15, 
                name: "Emma Berg", 
                description: "Former graphic designer now coding. UI/UX + frontend = my superpower.", 
                skills: ["UI/UX", "CSS", "HTML"], 
                grade: "Junior", 
                emoji: "🎨", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 16, 
                name: "Lucas Silva", 
                description: "Backend specialist. Let's build the next big thing together!", 
                skills: ["Python", "FastAPI", "Node.js"], 
                grade: "Senior", 
                emoji: "⚙️", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 17, 
                name: "Mona Al-Hassan", 
                description: "Recent bootcamp grad. Ready to contribute and learn from the team.", 
                skills: ["React", "JavaScript", "HTML"], 
                grade: "Trainee", 
                emoji: "🌱", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 18, 
                name: "Adam Nowak", 
                description: "Fullstack dev with focus on performance and clean architecture.", 
                skills: ["React", "Node.js", "TypeScript"], 
                grade: "Middle", 
                emoji: "🏎️", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 19, 
                name: "Clara Dubois", 
                description: "AI researcher looking to build practical applications. NLP and LLMs.", 
                skills: ["Python", "AI", "FastAPI"], 
                grade: "Senior", 
                emoji: "🧠", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
            },
            { 
                id: 20, 
                name: "Alex Rivera", 
                description: "Curious developer. Love learning new tech and solving real problems.", 
                skills: ["JavaScript", "HTML", "CSS"], 
                grade: "Junior", 
                emoji: "🔍", 
                socials: { linkedin: "#", telegram: "#", discord: "#" }
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