export default function NavBar({ createProfileMenu, setCreateProfileMenu, createdUser, onLogout }) {
    
    return(
        <header className="bg-neutral-900 border-b border-neutral-800 w-full">
            <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
                <div>
                    <h2 className="text-white font-mono text-xl tracking-tighter">
                        HackSearch
                    </h2>
                </div>

                <div className="flex items-center gap-4">
                    {createdUser ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">{createdUser.emoji || '👤'}</span>
                                <span className="text-white text-sm font-medium">{createdUser.name}</span>
                                <span className="text-neutral-500 text-xs font-mono">{createdUser.grade}</span>
                            </div>
                            <button 
                                className="border border-neutral-700 text-neutral-400 rounded-md px-3 py-1.5 text-sm font-mono hover:bg-neutral-800 hover:text-white transition-all duration-200"
                                onClick={onLogout}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button 
                            className="bg-white text-black rounded-md px-4 py-1.5 text-sm font-mono font-medium hover:bg-neutral-200 transition-all duration-200" 
                            onClick={() => setCreateProfileMenu(!createProfileMenu)}
                        >
                            Create Profile
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}