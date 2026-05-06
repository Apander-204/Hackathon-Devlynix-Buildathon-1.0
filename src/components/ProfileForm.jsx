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
            alert('Please enter your name');
            return;
        }
        
        if (!formData.description.trim()) {
            alert('Please enter a description');
            return;
        }
        
        if (!formData.grade) {
            alert('Please select your level');
            return;
        }
        
        if (formData.skills.length === 0) {
            alert('Please select at least one skill');
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
        <form onSubmit={handleSubmit} className="z-50 flex flex-col bg-neutral-900 text-white max-w-lg w-full rounded-lg border border-neutral-800 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-5 w-full sticky top-0 bg-neutral-900 border-b border-neutral-800">
                <h3 className="text-white font-mono text-lg tracking-tighter">Create Profile</h3>
                <p className="text-neutral-500 text-sm mt-1">Fill in your details to join the directory</p>
            </div>

            <div className="flex flex-col w-full gap-5 p-5">
                <div>
                    <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Username</p>
                    <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="border border-neutral-700 outline-none rounded-md p-3 w-full bg-neutral-800 text-white placeholder-neutral-500 focus:border-white transition-colors"
                        placeholder="Enter username..."
                    />
                </div>

                <div>
                    <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Description</p>
                    <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="border border-neutral-700 outline-none rounded-md p-3 w-full bg-neutral-800 text-white placeholder-neutral-500 focus:border-white transition-colors resize-none"
                        placeholder="Tell us about yourself..."
                        rows="3"
                    />
                </div>

                <div>
                    <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Level</p>
                    <div className="flex flex-wrap gap-2">
                        {availableGrades.map(grade => (
                            <button
                                key={grade}
                                type="button"
                                onClick={() => selectGrade(grade)}
                                className={`px-3 py-1.5 rounded-md text-sm font-mono transition-all duration-200 ${
                                    formData.grade === grade
                                        ? 'bg-white text-black'
                                        : 'bg-neutral-800 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white'
                                }`}
                            >
                                {grade}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                        {availableSkills.map(skill => (
                            <button
                                key={skill}
                                type="button"
                                onClick={() => toggleSkill(skill)}
                                className={`px-3 py-1.5 rounded-md text-sm font-mono transition-all duration-200 ${
                                    formData.skills.includes(skill)
                                        ? 'bg-white text-black'
                                        : 'bg-neutral-800 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white'
                                }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                    {formData.skills.length > 0 && (
                        <p className="text-neutral-500 text-xs mt-3">
                            Selected: {formData.skills.join(', ')}
                        </p>
                    )}
                </div>

                <div>
                    <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Choose avatar</p>
                    <div className="flex flex-wrap gap-2">
                        {availableEmojis.map(emoji => (
                            <button
                                key={emoji}
                                type="button"
                                onClick={() => selectEmoji(emoji)}
                                className={`text-2xl p-2 rounded-md transition-all duration-200 ${
                                    formData.emoji === emoji
                                        ? 'bg-white scale-110'
                                        : 'bg-neutral-800 hover:bg-neutral-700'
                                }`}
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Social links</p>
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-xl text-neutral-500">🔗</span>
                            <input
                                type="url"
                                name="social.linkedin"
                                value={formData.socials.linkedin}
                                onChange={handleInputChange}
                                placeholder="LinkedIn URL"
                                className="flex-1 border border-neutral-700 outline-none rounded-md p-2 bg-neutral-800 text-white placeholder-neutral-500 focus:border-white transition-colors text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xl text-neutral-500">📱</span>
                            <input
                                type="text"
                                name="social.telegram"
                                value={formData.socials.telegram}
                                onChange={handleInputChange}
                                placeholder="Telegram username (without @)"
                                className="flex-1 border border-neutral-700 outline-none rounded-md p-2 bg-neutral-800 text-white placeholder-neutral-500 focus:border-white transition-colors text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xl text-neutral-500">🎮</span>
                            <input
                                type="text"
                                name="social.discord"
                                value={formData.socials.discord}
                                onChange={handleInputChange}
                                placeholder="Discord username"
                                className="flex-1 border border-neutral-700 outline-none rounded-md p-2 bg-neutral-800 text-white placeholder-neutral-500 focus:border-white transition-colors text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                    <button 
                        type="button"
                        className="border border-neutral-700 w-full h-11 rounded-md text-neutral-400 font-mono text-sm hover:bg-neutral-800 hover:text-white transition-all duration-200" 
                        onClick={changeMenu}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        className="bg-white text-black w-full h-11 rounded-md font-mono text-sm font-medium hover:bg-neutral-200 transition-all duration-200"
                    >
                        Create Profile
                    </button>
                </div>
            </div>
        </form>
    );
}