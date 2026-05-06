export default function SearchBar({ searchTerm, setSearchTerm }) {
    return(
        <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <input 
                type="search" 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-md py-2.5 pl-10 pr-4 text-white placeholder-neutral-500 outline-none focus:border-white transition-all duration-200 [&::-webkit-search-cancel-button]:hidden" 
                placeholder="Search by name..." 
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </div>
    );
}