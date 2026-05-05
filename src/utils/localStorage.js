function initDemoUsers() {
  if (!localStorage.getItem("hacksearch_users")) {
    const demos = [
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
      { id: 1, name: "Анна", description: "testtesttest", skills: ["React", "UI/UX"], grade: "Middle", emoji: "❤️"},
    ];
    localStorage.setItem("hacksearch_users", JSON.stringify(demos));
  }
}

function loadAllUsers() {
    const users = localStorage.getItem("hacksearch_users");
    return users ? JSON.parse(users) : [];
}

function addUser(user) {
    let users = JSON.parse(localStorage.getItem("hacksearch_users") || []);
    users.push(user);
    localStorage.setItem("hacksearch_users", JSON.stringify(user));
}

export {initDemoUsers, loadAllUsers, addUser};