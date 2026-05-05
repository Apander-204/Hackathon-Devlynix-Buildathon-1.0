export default function NavBar() {

    return(
        <header className="bg-zinc-900 text-neutral-50 shadow-[0px_5px_5px_-3px_rgba(227,_227,_227,_0.1)] w-full">
            <div className="flex items-center pt-7 pb-7 justify-around">
                <div>
                    <h2>HackSearch</h2>
                </div>

                <div>
                    <button className="bg-neutral-50 text-neutral-900 rounded-md p-2">Create Profile</button>
                </div>
            </div>
        </header>
    );
}