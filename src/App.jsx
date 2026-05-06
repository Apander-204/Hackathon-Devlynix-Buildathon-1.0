import { useEffect, useRef, useState } from 'react';
import NavBar from './components/NavBar';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import ProfileForm from './components/ProfileForm';
import ProfileModal from './components/ProfileModal';
import Footer from './components/Footer';
import {initDemoUsers, loadAllUsers, addUser, getCreatedUser, clearCreatedUser} from "./utils/localStorage";
import { skillsSort } from './utils/sortingUsers';

function App() {

    let [users, setUsers] = useState([]);
    let [activeUsers, setActiveUsers] = useState([]);
    let [searchTerm, setSearchTerm] = useState("");

    let [createdUser, setCreatedUser] = useState(null);

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
        addUser(newUser);

        const updatedUsers = loadAllUsers();
        setUsers(updatedUsers);
        setCreatedUser(newUser);
        setCreateProfileMenu(false);
    };

    const handleLogout = () => {
        clearCreatedUser();
        setCreatedUser(null);
    };

    const handleViewProfile = (user) => {
        setSelectedUser(user);
        setIsProfileOpen(true);
    };

    useEffect(() => {
        initDemoUsers();
        const loadedUsers = loadAllUsers();
        setUsers(loadedUsers);

        const savedCreatedUser = getCreatedUser();
        if (savedCreatedUser) {
            setCreatedUser(savedCreatedUser);
        }
    }, []);


    useEffect(() => {
        if (users.length > 0) {
            const filtered = skillsSort(users, activeSkills, activeGrades, searchTerm);
            setActiveUsers(filtered);
        }
    }, [users, activeSkills, activeGrades, searchTerm]);

    let [createProfileMenu, setCreateProfileMenu] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleCloseProfile = () => {
        setIsProfileOpen(false);
        setSelectedUser(null);
    };

    return(
        <div className="bg-neutral-900 flex flex-col justify-center items-center min-h-screen bg-neutral-900">
            {createProfileMenu ? (
                <div className="w-full fixed flex justify-center items-center top-10">
                    <ProfileForm createProfileMenu={createProfileMenu} setCreateProfileMenu={setCreateProfileMenu} onAddProfile={handleAddProfile}/>
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    />
                </div>
            ) : null}

            <div className="w-full">
                <NavBar createProfileMenu={createProfileMenu} setCreateProfileMenu={setCreateProfileMenu} createdUser={createdUser} onLogout={handleLogout}/>
            </div>
            
            <div className="flex flex-wrap w-full justify-around items-center mt-12">
                <FilterChips activeGrades={activeGrades} activeSkills={activeSkills} setActiveGrades={setActiveGrades} setActiveSkills={setActiveSkills} setUsers={setUsers} />
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
            <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                    {activeUsers.map(user => (
                        <UserCard 
                            key={user.id} 
                            user={user} 
                            onViewProfile={handleViewProfile}
                        />
                    ))}
                </div>

                {isProfileOpen && selectedUser && (
                    <ProfileModal 
                        user={selectedUser} 
                        onClose={handleCloseProfile}
                    />
                )}
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    );
}

export default App