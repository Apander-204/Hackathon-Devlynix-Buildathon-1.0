export default function NavBar() {

    return(
        <header className="bg-zinc-900 text-neutral-50">
            <div className="flex items-center justify-between mr-100 ml-100 pt-7 pb-7">
                <div>
                    <h2>HackSearch</h2>
                </div>

                <div>
                    <button>Create Profile</button>
                </div>
            </div>
        </header>
    );
}