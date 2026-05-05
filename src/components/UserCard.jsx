export default function UserCard({username, description, grade, skills, emoji}) {
    return(
        <div className="flex flex-col justify-center items-center gap-2 border max-w-xs aspect-[10/11] w-full bg-white rounded-lg p-4 bg-zinc-900 text-neutral-50">
            <div className="bg-neutral-800 rounded-lg w-32 h-32 text-8xl flex items-center justify-center">{emoji}</div>
            <h4 className="text-lg">{username}</h4>
            <p className="text-sm">{description}</p>
            <p className="text-mg">{grade}</p>

            <ul className={`flex gap-3 text-base`}>
                {skills.map((skill) => (
                    <li key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <button className="w-full border h-12">View full profile</button>
        </div>
    );
}