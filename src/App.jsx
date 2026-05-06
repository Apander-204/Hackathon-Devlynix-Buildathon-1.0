import { useEffect, useRef, useState } from 'react';
import NavBar from './components/NavBar';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import ProfileForm from './components/ProfileForm';
import {initDemoUsers, loadAllUsers, addUser} from "./utils/localStorage";
import { skillsSort } from './utils/sortingUsers';

function App() {

    let [users, setUsers] = useState([]);
    let [activeUsers, setActiveUsers] = useState([]);
    let [searchTerm, setSearchTerm] = useState("");

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

    let [activeGrades, setActiveGrades] = useState({
        "All": true,
        "Trainee": false,
        "Junior": false,
        "Middle": false,
        "Senior": false
    });

    let searchRef = useRef(null);

    const handleAddProfile = (newUser) => {
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        addUser(newUser);
    };

    useEffect(() => {
        initDemoUsers();
        setUsers(loadAllUsers());
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            const filtered = skillsSort(users, activeSkills, activeGrades, searchTerm);
            setActiveUsers(filtered);
        }
    }, [users]);

    useEffect(() => {
        setActiveUsers(skillsSort(users, activeSkills, activeGrades, searchRef.current.value));
    }, [activeSkills, activeGrades, searchTerm]);

    let [createProfileMenu, setCreateProfileMenu] = useState(false);

    return(
        <div className="bg-neutral-900 flex flex-col justify-center items-center">
            {createProfileMenu ? (
                <div className="w-full fixed flex justify-center items-center top-10">
                    <ProfileForm createProfileMenu={createProfileMenu} setCreateProfileMenu={setCreateProfileMenu} onAddProfile={handleAddProfile}/>
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    />
                </div>
            ) : null}

            <div className="w-full">
                <NavBar createProfileMenu={createProfileMenu} setCreateProfileMenu={setCreateProfileMenu} />
            </div>
            
            <div className="flex flex-wrap w-full justify-around items-center mt-12">
                <FilterChips activeGrades={activeGrades} activeSkills={activeSkills} setActiveGrades={setActiveGrades} setActiveSkills={setActiveSkills} setUsers={setUsers} />
                <SearchBar searchRef={searchRef} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {activeUsers.length > 0 ? activeUsers.map((user) => (
                    <UserCard username={user.name} description={user.description} skills={user.skills} grade={user.grade} emoji={user.emoji}/>
                )) : ""};
            </div>
        </div>
        
    );
}

export default App