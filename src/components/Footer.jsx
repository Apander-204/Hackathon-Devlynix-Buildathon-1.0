export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-zinc-900 text-neutral-50 border-t border-neutral-800 mt-8">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h2 className="text-lg font-bold">HackSearch</h2>
                    </div>
                    
                    <div className="text-neutral-500 text-sm">
                        <p>© {currentYear} Все права защищены</p>
                    </div>
                    
                    <div className="flex gap-4">
                        <a href="#" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                            GitHub
                        </a>
                        <a href="#" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                            Discord
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}