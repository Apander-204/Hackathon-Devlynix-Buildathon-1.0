import { useEffect, useRef, useState } from 'react';
import NavBar from './components/NavBar';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import ProfileForm from './components/ProfileForm';
import ProfileModal from './components/ProfileModal';
import Footer from './components/Footer';
import { initDemoUsers, loadAllUsers, addUser, getCreatedUser, clearCreatedUser } from "./utils/localStorage";
import { skillsSort } from './utils/sortingUsers';

function App() {
    let [users, setUsers] = useState([]);
    let [activeUsers, setActiveUsers] = useState([]);
    let [searchTerm, setSearchTerm] = useState("");
    let [createdUser, setCreatedUser] = useState(null);
    let [createProfileMenu, setCreateProfileMenu] = useState(false);
    let [selectedUser, setSelectedUser] = useState(null);
    let [isProfileOpen, setIsProfileOpen] = useState(false);

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

    const handleCloseProfile = () => {
        setIsProfileOpen(false);
        setSelectedUser(null);
    };

    const closeAllModals = () => {
        if (createProfileMenu) setCreateProfileMenu(false);
        if (isProfileOpen) handleCloseProfile();
    };

    const resetFilters = () => {
        setActiveSkills({
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
        setActiveGrades({
            "All": true,
            "Trainee": false,
            "Junior": false,
            "Middle": false,
            "Senior": false
        });
        setSearchTerm("");
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

    return (
        <div className="bg-neutral-900 flex flex-col min-h-screen">
            {(createProfileMenu || (isProfileOpen && selectedUser)) && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={closeAllModals}
                />
            )}

            {createProfileMenu && (
                <div className="w-full fixed flex justify-center items-center top-10 z-50">
                    <ProfileForm 
                        createProfileMenu={createProfileMenu} 
                        setCreateProfileMenu={setCreateProfileMenu} 
                        onAddProfile={handleAddProfile}
                    />
                </div>
            )}

            <NavBar 
                createProfileMenu={createProfileMenu} 
                setCreateProfileMenu={setCreateProfileMenu} 
                createdUser={createdUser} 
                onLogout={handleLogout}
            />

            <div className="flex-grow w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 mb-8">
                    <FilterChips 
                        activeGrades={activeGrades} 
                        activeSkills={activeSkills} 
                        setActiveGrades={setActiveGrades} 
                        setActiveSkills={setActiveSkills} 
                        setUsers={setUsers} 
                    />
                    <SearchBar 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                    {activeUsers.map((user, index) => (
                        <UserCard 
                            key={user.id} 
                            user={user} 
                            onViewProfile={handleViewProfile}
                            index={index}
                        />
                    ))}
                </div>

                {activeUsers.length === 0 && users.length > 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">😕 No developers found</p>
                        <button 
                            onClick={resetFilters}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Reset filters
                        </button>
                    </div>
                )}
            </div>

            {isProfileOpen && selectedUser && (
                <ProfileModal 
                    user={selectedUser} 
                    onClose={handleCloseProfile}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;