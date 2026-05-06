export default function UserCard({ user, onViewProfile }) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 border max-w-xs aspect-[10/11] w-full bg-white rounded-lg p-4 bg-zinc-900 text-neutral-50">
            <div className="bg-neutral-800 rounded-lg w-32 h-32 text-8xl flex items-center justify-center">
                {user.emoji || '👤'}
            </div>
            <h4 className="text-lg font-semibold">{user.name}</h4>
            <p className="text-sm text-center line-clamp-2">{user.description}</p>
            <p className="text-md text-neutral-400">{user.grade}</p>

            <ul className="flex flex-wrap gap-2 text-sm justify-center">
                {user.skills && user.skills.slice(0, 3).map((skill, index) => (
                    <li key={index} className="bg-neutral-800 px-2 py-1 rounded">
                        {skill}
                    </li>
                ))}
                {user.skills && user.skills.length > 3 && (
                    <li className="text-neutral-400">+{user.skills.length - 3}</li>
                )}
            </ul>
            
            <button 
                onClick={() => onViewProfile(user)}
                className="w-full border h-12 rounded-lg hover:bg-neutral-800 transition-colors"
            >
                View full profile
            </button>
        </div>
    );
}