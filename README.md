# HackSearch

> A dark-themed developer directory built during the **Devlynix Buildathon** hackathon. Find and connect with developers by skills, grade, and name.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Hackathon](https://img.shields.io/badge/Devlynix_Buildathon-2025-8A2BE2)

🔗 **Live Demo:** https://hack-search.vercel.app/

---

## 📖 About the Project

**HackSearch** is a single-page web application that helps you discover developers by their tech stack, level, and name. It was built from scratch during the **Devlynix Buildathon** hackathon.

The app features a clean, dark, terminal-inspired UI with:

- Filtering by **skills** (HTML, CSS, JavaScript, React, Vue, Angular, Python, FastAPI)
- Filtering by **grade** (Trainee, Junior, Middle, Senior)
- Live **search** by name
- A **profile creation form** with avatar picker and social links
- A detailed **profile modal**
- Persistent storage via `localStorage`

> 🏆 Submitted to the **Devlynix Buildathon** — [View on Devfolio](https://devfolio.co/projects/hacksearch-250d)

---

## ✨ Features

- 🔍 **Smart filtering** — combine skill and grade filters, reset with one click
- 🔎 **Live search** — instant filtering as you type
- 👤 **Create your own profile** — choose an emoji avatar, add skills, grade, and socials
- 💾 **localStorage persistence** — your profile and demo users survive page reloads
- 🌑 **Dark, minimal UI** — monospace accents, subtle animations, fully responsive
- 🪟 **Modal windows** — profile creation and profile view with backdrop blur
- 📱 **Responsive grid** — 1–4 columns depending on screen size

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build tool | Vite |
| Styling | Tailwind CSS |
| State | React Hooks (`useState`, `useEffect`, `useRef`) |
| Storage | Browser `localStorage` |
| Language | JavaScript (ES6+) |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── NavBar.jsx          # Top navigation with create/logout
│   ├── FilterChips.jsx     # Skill & grade filter buttons
│   ├── SearchBar.jsx       # Search input with icon
│   ├── UserCard.jsx        # Developer card in the grid
│   ├── ProfileForm.jsx     # Modal form to create a profile
│   ├── ProfileModal.jsx    # Detailed profile view
│   └── Footer.jsx          # Footer with links
├── utils/
│   ├── localStorage.js     # Init demo users, CRUD, persistence
│   └── sortingUsers.js     # skillsSort — filter & search logic
├── App.jsx                 # Main app, state & layout
└── main.jsx                # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Apander-204/Hackathon-Devlynix-Buildathon-1.0.git
cd Hackathon-Devlynix-Buildathon-1.0

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

---

## 🧠 How It Works

1. On first load, `initDemoUsers()` seeds `localStorage` with sample developers.
2. `loadAllUsers()` reads all users from storage into state.
3. `skillsSort(users, activeSkills, activeGrades, searchTerm)` returns the filtered list whenever any filter or the search term changes.
4. Creating a profile adds a new user via `addUser()` and saves the active profile to `localStorage`.
5. The "Logout" button clears the active profile but keeps the user in the directory.

---

## 📸 Screenshots

### Main page
![Main page](https://github.com/user-attachments/assets/fac744a3-6117-410c-9273-c0ea89e3ce6d)

### Profile modal
![Profile modal](https://github.com/user-attachments/assets/2ca8c7a8-1d3f-4e63-b59e-abae5482e322)

### Create profile
![Create profile](https://github.com/user-attachments/assets/79573e2a-ca53-4340-8236-87226121ecd5)

### Filters
![Filters](https://github.com/user-attachments/assets/c248c160-908b-4abe-a7da-13745e5b91a0)

---

## 🏆 Hackathon

Built during the **Devlynix Buildathon**.

- 🔗 [Hackathon page](https://devlynix-buildathon.devfolio.co/overview)
- 🔗 [Project on Devfolio](https://devfolio.co/projects/hacksearch-250d)

---

## 🔮 Future Improvements

- [ ] Add real authentication (OAuth / GitHub)
- [ ] Move from `localStorage` to a backend
- [ ] Add pagination or infinite scroll
- [ ] Allow editing and deleting your own profile
- [ ] Add sorting (by name, grade, number of skills)

---

## 👤 Author

**Apander-204**

- GitHub: [@Apander-204](https://github.com/Apander-204)
- Telegram: [@Apandeer](https://t.me/Apandeer)

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- The **Devlynix Buildathon** organizers and participants