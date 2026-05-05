export default function SearchBar() {


    return(
        <div className="flex items-center">
            <input  type="search" 
                    className="[&::-webkit-search-cancel-button]:hidden border border-solid border-neutral-300 outline-none rounded-md pl-10 p-3 text-neutral-50" 
                    placeholder="Search... "/>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative right-56">
                <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}