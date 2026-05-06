import { useEffect } from 'react';

export default function ProfileModal({ user, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-zinc-900 text-neutral-50 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white text-2xl z-10"
                >
                    ×
                </button>

                <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-neutral-800 rounded-full w-32 h-32 text-7xl flex items-center justify-center mb-4">
                            {user.emoji || '👤'}
                        </div>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-neutral-400">{user.grade}</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-neutral-300">About</h3>
                        <p className="text-neutral-200 leading-relaxed">
                            {user.description || 'Нет описания'}
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-neutral-300">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {user.skills && user.skills.length > 0 ? (
                                user.skills.map((skill, index) => (
                                    <span 
                                        key={index}
                                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <span className="text-neutral-500">Нет навыков</span>
                            )}
                        </div>
                    </div>

                    {(user.socials?.linkedin || user.socials?.telegram || user.socials?.discord) && (
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2 text-neutral-300">Social Links</h3>
                            <div className="space-y-2">
                                {user.socials.linkedin && (
                                    <a 
                                        href={user.socials.linkedin.startsWith('http') ? user.socials.linkedin : `https://${user.socials.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        <span>🔗</span> LinkedIn
                                    </a>
                                )}
                                {user.socials.telegram && (
                                    <a 
                                        href={`https://t.me/${user.socials.telegram.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        <span>📱</span> Telegram
                                    </a>
                                )}
                                {user.socials.discord && (
                                    <div className="flex items-center gap-2 text-neutral-400">
                                        <span>🎮</span> Discord: {user.socials.discord}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="mb-6 pt-4 border-t border-neutral-800">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-neutral-500">ID:</span>
                                <span className="ml-2 text-neutral-300">{user.id}</span>
                            </div>
                            {user.createdAt && (
                                <div>
                                    <span className="text-neutral-500">Создан:</span>
                                    <span className="ml-2 text-neutral-300">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <button 
                        onClick={onClose}
                        className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-50 py-2 rounded-lg transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}