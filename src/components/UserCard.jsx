export default function UserCard() {
    return(
        <div className="flex flex-col justify-center items-center gap-2 border max-w-xs aspect-[10/11] w-full bg-white rounded-lg shadow-md p-4 bg-zinc-900 text-neutral-50">
            <div className="bg-neutral-800 rounded-lg w-32 h-32"></div>
            <h4 className="text-lg">Name</h4>
            <p className="text-sm">Description</p>
            <p className="text-mg">Level</p>
            <p>Skills</p>
            <button className="w-full border h-12">View full profile</button>
        </div>
    );
}