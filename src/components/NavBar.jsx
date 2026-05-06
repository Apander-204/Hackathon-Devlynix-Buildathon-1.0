export default function NavBar({ createProfileMenu, setCreateProfileMenu, createdUser, onLogout }) {
    
    return(
        <header className="bg-zinc-900 text-neutral-50 shadow-[0px_5px_5px_-3px_rgba(227,_227,_227,_0.1)] w-full">
            <div className="flex items-center pt-7 pb-7 justify-around">
                <div>
                    <h2 className="text-xl font-bold">HackSearch</h2>
                </div>

                <div className="flex items-center gap-4">
                    {createdUser ? (
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{createdUser.emoji || '👤'}</span>
                                <span className="font-medium">{createdUser.name}</span>
                                <span className="text-sm text-neutral-400">{createdUser.grade}</span>
                            </div>
                            <button 
                                className="bg-red-500/20 text-red-400 rounded-md px-3 py-1 text-sm hover:bg-red-500/30 transition-colors"
                                onClick={onLogout}
                            >
                                Выйти
                            </button>
                        </div>
                    ) : (
                        <button 
                            className="bg-neutral-50 text-neutral-900 rounded-md p-2 hover:bg-neutral-200 transition-colors" 
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