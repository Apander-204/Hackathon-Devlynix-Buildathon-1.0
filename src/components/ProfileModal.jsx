import { useEffect } from 'react';

export default function ProfileModal({ user, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-neutral-900 text-white rounded-lg border border-neutral-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-500 hover:text-white text-2xl z-10 transition-colors duration-200"
                >
                    ×
                </button>

                <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-neutral-800 rounded-full w-28 h-28 text-6xl flex items-center justify-center mb-4 border border-neutral-700">
                            {user.emoji || '👤'}
                        </div>
                        <h2 className="text-white font-mono text-xl tracking-tighter">{user.name}</h2>
                        <p className="text-neutral-500 text-sm font-mono mt-1">{user.grade}</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">About</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {user.description || 'No description provided'}
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {user.skills && user.skills.length > 0 ? (
                                user.skills.map((skill, index) => (
                                    <span 
                                        key={index}
                                        className="bg-neutral-800 border border-neutral-700 text-gray-300 px-3 py-1 rounded-md text-xs font-mono"
                                    >
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <span className="text-neutral-500 text-sm">No skills listed</span>
                            )}
                        </div>
                    </div>

                    {(user.socials?.linkedin || user.socials?.telegram || user.socials?.discord) && (
                        <div className="mb-6">
                            <h3 className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Social links</h3>
                            <div className="space-y-2">
                                {user.socials.linkedin && (
                                    <a 
                                        href={user.socials.linkedin.startsWith('http') ? user.socials.linkedin : `https://${user.socials.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-neutral-300 hover:text-white text-sm transition-colors duration-200"
                                    >
                                        <span className="text-neutral-500">🔗</span> 
                                        LinkedIn
                                    </a>
                                )}
                                {user.socials.telegram && (
                                    <a 
                                        href={`https://t.me/${user.socials.telegram.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-neutral-300 hover:text-white text-sm transition-colors duration-200"
                                    >
                                        <span className="text-neutral-500">📱</span> 
                                        Telegram
                                    </a>
                                )}
                                {user.socials.discord && (
                                    <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                        <span>🎮</span> 
                                        Discord: {user.socials.discord}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="mb-6 pt-4 border-t border-neutral-800">
                        <div className="flex flex-col gap-1 text-xs">
                            <div>
                                <span className="text-neutral-600 font-mono">ID:</span>
                                <span className="ml-2 text-neutral-500 font-mono">{user.id}</span>
                            </div>
                            {user.createdAt && (
                                <div>
                                    <span className="text-neutral-600 font-mono">Created:</span>
                                    <span className="ml-2 text-neutral-500 font-mono">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <button 
                        onClick={onClose}
                        className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-2.5 rounded-md text-sm font-mono transition-all duration-200 border border-neutral-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}