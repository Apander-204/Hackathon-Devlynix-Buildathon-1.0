import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import ProfileForm from './components/ProfileForm';
import {initDemoUsers, loadAllUsers, addUser} from "./utils/localStorage";
import { skillsSort } from './utils/sortingUsers';

function App() {

    let [users, setUsers] = useState([]);

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

    useEffect(() => {
        initDemoUsers();
        setUsers(loadAllUsers());
    }, []);

    useEffect(() => {
        setUsers(skillsSort(activeSkills, activeGrades));
    }, [activeSkills, activeGrades]);

    useEffect(() => {
        
    }, [activeGrades]);

    return(
        <div className="bg-neutral-900 flex flex-col justify-center items-center">
            <div className="w-full">
                <NavBar />
            </div>
            
            <div className="flex flex-wrap w-full justify-around items-center mt-12">
                <FilterChips activeGrades={activeGrades} activeSkills={activeSkills} setActiveGrades={setActiveGrades} setActiveSkills={setActiveSkills} setUsers={setUsers} />
                <SearchBar />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {users.length > 0 ? users.map((user) => (
                    <UserCard username={user.name} description={user.description} skills={user.skills} grade={user.grade} emoji={user.emoji}/>
                )) : ""};
            </div>
        </div>
        
    );
}

export default App
