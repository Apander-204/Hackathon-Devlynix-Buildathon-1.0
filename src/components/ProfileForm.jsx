export default function ProfileForm() {
    return(
        <div className="flex flex-col justify-center items-center h-auto bg-zinc-900 text-neutral-50 max-w-lg rounded-md">
            <div className="p-5 w-full">
                <h3 className="text-xl">Add profile</h3>
                <p className="text-sm">Create your profile card for add it to catalog</p>
            </div>
            <div className="flex flex-col w-full gap-4 p-5">
                <div>
                    <p>USERNAME</p>
                    <input type="text" className="border border-solid border-neutral-300 outline-none rounded-md pl-10 p-3 w-full" />
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-8 top-37">
                        <circle cx="9" cy="9" r="2" stroke="#424242" stroke-width="1.5"/>
                        <path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="#424242" stroke-width="1.5"/>
                        <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#424242" stroke-width="1.5"/>
                        <path d="M19 12H15" stroke="#424242" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M19 9H14" stroke="#424242" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M19 15H16" stroke="#424242" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
                <div>
                    <p>DESCRIPTION</p>
                    <input type="text" className="border border-solid border-neutral-300 outline-none rounded-md pl-10 p-3 w-full" />
                    <svg fill="#424242" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute left-8 top-59"><path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM4,4H20V6H4ZM20,20H4V8H20ZM6,12a1,1,0,0,1,1-1H17a1,1,0,0,1,0,2H7A1,1,0,0,1,6,12Zm0,4a1,1,0,0,1,1-1h5a1,1,0,0,1,0,2H7A1,1,0,0,1,6,16Z"/></svg>
                </div>
                <div>
                    <p>GRADE</p>
                    <input type="text" className="border border-solid border-neutral-300 outline-none rounded-md pl-10 p-3 w-full" />
                    <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute left-8 top-81">
                        <path fill="#424242" d="M19 5.85c0-.9-.44-1.71-1.16-2.22-.1-1.31-1.16-2.36-2.47-2.47C14.89.45 14.08.02 13.15 0c-.06 0-.21 0-.36.03-.28.04-.54.12-.79.23-.55-.26-1.11-.33-1.81-.18-.65.17-1.18.56-1.55 1.08-.63.05-1.21.32-1.69.77-.45.46-.72 1.08-.78 1.7-.53.37-.91.9-1.09 1.53-.148.61-.078 1.27.182 1.84-.26.56-.34 1.22-.18 1.83.18.63.56 1.17 1.08 1.54.06.62.33 1.23.78 1.69.32.3.67.52 1.06.65v9.91c0 .33.12.66.35.92.44.5 1.26.61 1.82.21l1.83-1.66 1.72 1.57c.26.22.57.34.9.34.4 0 .77-.17 1.04-.47.22-.25.34-.58.34-.91v-9.91c.38-.13.74-.35 1.05-.64.45-.46.73-1.08.79-1.7.51-.37.9-.91 1.07-1.53.148-.61.088-1.27-.172-1.84.17-.36.26-.75.26-1.15zm-5 15.36l-2-1.82-2 1.82v-7.36c.05.03.11.04.17.06.72.17 1.27.09 1.83-.17.35.17.75.26 1.15.26.22 0 .42-.03.66-.08.07-.02.13-.04.19-.07v7.36zm2.94-12.9c-.12.45-.4.83-.77 1.1-.04.44-.24.88-.56 1.21-.34.32-.76.52-1.2.55-.26.37-.66.64-1.12.77-.17.04-.31.06-.47.06-.28 0-.57-.06-.82-.19-.4.19-.79.25-1.31.13-.45-.13-.84-.4-1.1-.77-.44-.03-.86-.23-1.21-.56-.32-.33-.51-.76-.55-1.2-.37-.27-.65-.65-.77-1.1-.108-.44-.058-.91.122-1.31-.18-.41-.23-.88-.12-1.32.12-.44.4-.83.78-1.09.04-.44.23-.88.55-1.21.35-.33.76-.52 1.21-.55.26-.38.65-.65 1.11-.77.5-.11.9-.06 1.29.13.18-.08.36-.14.56-.17.11-.02.22-.02.26-.02.66.02 1.24.32 1.59.83.94.08 1.69.82 1.76 1.76.508.36.828.95.828 1.59 0 .28-.06.57-.18.82.18.41.23.88.12 1.31z"/>
                        <circle fill="#424242" cx="12.001" cy="7" r="2"/>
                    </svg>
                </div>
                <div>
                    <p>SKILLS</p>
                    <input type="text" className="border border-solid border-neutral-300 outline-none rounded-md pl-10 p-3 w-full" />
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-8 top-104">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7 14C10.623 14 9.74999 13.1046 9.74999 12C9.74999 10.8954 10.623 10 11.7 10C12.7769 10 13.65 10.8954 13.65 12C13.65 12.5304 13.4445 13.0391 13.0789 13.4142C12.7132 13.7893 12.2172 14 11.7 14Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8841 16.063V14.721C16.8841 14.3887 17.0128 14.07 17.2419 13.835L18.1672 12.886C18.6443 12.3967 18.6443 11.6033 18.1672 11.114L17.2419 10.165C17.0128 9.93001 16.8841 9.61131 16.8841 9.27899V7.93599C16.8841 7.24398 16.3371 6.68299 15.6624 6.68299H14.353C14.029 6.68299 13.7182 6.55097 13.4891 6.31599L12.5638 5.36699C12.0867 4.87767 11.3132 4.87767 10.8361 5.36699L9.91087 6.31599C9.68176 6.55097 9.37102 6.68299 9.04702 6.68299H7.73759C7.41341 6.68299 7.10253 6.81514 6.87339 7.05034C6.64425 7.28554 6.51566 7.6045 6.51592 7.93699V9.27899C6.51591 9.61131 6.3872 9.93001 6.15809 10.165L5.23282 11.114C4.75573 11.6033 4.75573 12.3967 5.23282 12.886L6.15809 13.835C6.3872 14.07 6.51591 14.3887 6.51592 14.721V16.063C6.51592 16.755 7.06288 17.316 7.73759 17.316H9.04702C9.37102 17.316 9.68176 17.448 9.91087 17.683L10.8361 18.632C11.3132 19.1213 12.0867 19.1213 12.5638 18.632L13.4891 17.683C13.7182 17.448 14.029 17.316 14.353 17.316H15.6614C15.9856 17.3163 16.2966 17.1844 16.5259 16.9493C16.7552 16.7143 16.8841 16.3955 16.8841 16.063Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="flex items-center justify-around gap-5">
                    <button className="border w-full h-12 rounded-md hover:bg-zinc-700">Cancel</button>
                    <button className="border w-full h-12 rounded-md hover:bg-zinc-700">Create account</button>
                </div>
            </div>
        </div>
    );
}