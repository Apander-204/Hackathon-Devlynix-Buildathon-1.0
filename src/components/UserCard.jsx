export default function UserCard({ user, onViewProfile, index }) {
    return (
        <div 
            className="flex flex-col items-center gap-3 border border-neutral-800 max-w-xs aspect-[10/11] w-full bg-neutral-900 rounded-lg p-5 transition-all duration-200 hover:border-white hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] card-enter"
            style={{ animationDelay: `${index * 0.03}s` }}
        >
            <div className="bg-neutral-800 rounded-full w-24 h-24 text-5xl flex items-center justify-center border border-neutral-700">
                {user.emoji || '👤'}
            </div>

            <h4 className="text-white font-mono text-base tracking-tighter text-center">
                {user.name}
            </h4>

            <p className="text-neutral-400 text-xs text-center line-clamp-2 leading-relaxed">
                {user.description || 'No description'}
            </p>

            <p className="text-neutral-500 text-xs font-mono">
                {user.grade}
            </p>

            <ul className="flex flex-wrap gap-1.5 justify-center mt-1">
                {user.skills && user.skills.slice(0, 3).map((skill, index) => (
                    <li key={index} className="bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded text-neutral-300 text-xs font-mono">
                        {skill}
                    </li>
                ))}
                {user.skills && user.skills.length > 3 && (
                    <li className="text-neutral-500 text-xs font-mono px-2 py-0.5">
                        +{user.skills.length - 3}
                    </li>
                )}
            </ul>

            <button 
                onClick={() => onViewProfile(user)}
                className="w-full border border-neutral-700 bg-transparent h-10 rounded-md text-white text-sm font-mono hover:bg-white hover:text-black transition-all duration-200 mt-2"
            >
                View profile
            </button>
        </div>
    );
}