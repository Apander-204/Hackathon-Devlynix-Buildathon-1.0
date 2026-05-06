import { useState } from 'react';

export default function ProfileForm({ createProfileMenu, setCreateProfileMenu, onAddProfile }) {
    const [formData, setFormData] = useState({
        username: '',
        description: '',
        grade: '',
        skills: [],
        emoji: '👨‍💻',
        socials: {
            linkedin: '',
            telegram: '',
            discord: ''
        }
    });

    const availableSkills = ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular", "Python", "FastAPI"];

    const availableGrades = ["Trainee", "Junior", "Middle", "Senior"];

    const availableEmojis = [
        "👨‍💻", "👩‍💻", "🧑‍💻", "💻", "🚀", "⚡", "🎯", "🔥", 
        "💪", "🎨", "📱", "🤖", "🛠️", "📚", "🌟", "💎"
    ];

    const changeMenu = () => {
        setCreateProfileMenu(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('social.')) {
            const socialName = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                socials: { ...prev.socials, [socialName]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const toggleSkill = (skill) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }));
    };

    const selectGrade = (grade) => {
        setFormData(prev => ({ ...prev, grade }));
    };

    const selectEmoji = (emoji) => {
        setFormData(prev => ({ ...prev, emoji }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username.trim()) {
            alert('Введите имя пользователя');
            return;
        }
        
        if (!formData.description.trim()) {
            alert('Введите описание');
            return;
        }
        
        if (!formData.grade) {
            alert('Выберите уровень');
            return;
        }
        
        if (formData.skills.length === 0) {
            alert('Выберите хотя бы один навык');
            return;
        }

        const newUser = {
            id: Date.now(),
            name: formData.username,
            description: formData.description,
            grade: formData.grade,
            skills: formData.skills,
            emoji: formData.emoji,
            socials: formData.socials,
        };

        if (onAddProfile) {
            onAddProfile(newUser);
        }

        changeMenu();
    };

    return (
        <form onSubmit={handleSubmit} className="z-50 flex flex-col gap-30 justify-center items-center bg-zinc-900 text-neutral-50 max-w-lg w-full rounded-md shadow-[0px_0px_8px_10px_rgba(227,_227,_227,_0.1)] max-h-[90vh] overflow-y-auto">
            <div className="p-5 w-full sticky top-0 bg-zinc-900">
                <h3 className="text-xl">Add profile</h3>
                <p className="text-sm">Create your profile card for add it to catalog</p>
            </div>
            
            <div className="flex flex-col w-full gap-4 p-5">
                <div>
                    <p className="mb-1">USERNAME</p>
                    <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="border border-neutral-300 outline-none rounded-md p-3 w-full bg-transparent"
                        placeholder="Enter username..."
                    />
                </div>

                <div>
                    <p className="mb-1">DESCRIPTION</p>
                    <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="border border-neutral-300 outline-none rounded-md p-3 w-full bg-transparent resize-none"
                        placeholder="Enter description..."
                        rows="3"
                    />
                </div>

                <div>
                    <p className="mb-2">GRADE</p>
                    <div className="flex flex-wrap gap-2">
                        {availableGrades.map(grade => (
                            <button
                                key={grade}
                                type="button"
                                onClick={() => selectGrade(grade)}
                                className={`px-3 py-1 rounded transition-all ${
                                    formData.grade === grade
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-zinc-700 text-neutral-300 hover:bg-zinc-600'
                                }`}
                            >
                                {grade}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="mb-2">SKILLS</p>
                    <div className="flex flex-wrap gap-2">
                        {availableSkills.map(skill => (
                            <button
                                key={skill}
                                type="button"
                                onClick={() => toggleSkill(skill)}
                                className={`px-3 py-1 rounded transition-all ${
                                    formData.skills.includes(skill)
                                        ? 'bg-green-500 text-white'
                                        : 'bg-zinc-700 text-neutral-300 hover:bg-zinc-600'
                                }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                    {formData.skills.length > 0 && (
                        <p className="text-sm text-neutral-400 mt-2">
                            Выбрано: {formData.skills.join(', ')}
                        </p>
                    )}
                </div>

                <div>
                    <p className="mb-2">CHOOSE EMOJI</p>
                    <div className="flex flex-wrap gap-2">
                        {availableEmojis.map(emoji => (
                            <button
                                key={emoji}
                                type="button"
                                onClick={() => selectEmoji(emoji)}
                                className={`text-2xl p-2 rounded transition-all ${
                                    formData.emoji === emoji
                                        ? 'bg-blue-500 scale-110'
                                        : 'bg-zinc-700 hover:bg-zinc-600'
                                }`}
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="mb-2">SOCIAL LINKS</p>
                    
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🔗</span>
                            <input
                                type="url"
                                name="social.linkedin"
                                value={formData.socials.linkedin}
                                onChange={handleInputChange}
                                placeholder="LinkedIn URL"
                                className="flex-1 border border-neutral-300 outline-none rounded-md p-2 bg-transparent text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xl">📱</span>
                            <input
                                type="text"
                                name="social.telegram"
                                value={formData.socials.telegram}
                                onChange={handleInputChange}
                                placeholder="Telegram username (без @)"
                                className="flex-1 border border-neutral-300 outline-none rounded-md p-2 bg-transparent text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xl">🎮</span>
                            <input
                                type="text"
                                name="social.discord"
                                value={formData.socials.discord}
                                onChange={handleInputChange}
                                placeholder="Discord username"
                                className="flex-1 border border-neutral-300 outline-none rounded-md p-2 bg-transparent text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-around gap-5 mt-4">
                    <button 
                        type="button"
                        className="border w-full h-12 rounded-md hover:bg-zinc-700 transition-all" 
                        onClick={changeMenu}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        className="border w-full h-12 rounded-md hover:bg-blue-600 transition-all bg-blue-500"
                    >
                        Create profile
                    </button>
                </div>
            </div>
        </form>
    );
}