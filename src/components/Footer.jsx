export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h2 className="text-white font-mono text-sm tracking-tighter">
                            DevMatch
                        </h2>
                    </div>

                    <div className="text-neutral-600 text-xs font-mono">
                        <p>© {currentYear} DevMatch. All rights reserved.</p>
                    </div>

                    <div className="flex gap-6">
                        <a 
                            href="#" 
                            className="text-neutral-500 text-xs font-mono hover:text-white transition-colors duration-200"
                        >
                            GitHub
                        </a>
                        <a 
                            href="#" 
                            className="text-neutral-500 text-xs font-mono hover:text-white transition-colors duration-200"
                        >
                            Discord
                        </a>
                        <a 
                            href="#" 
                            className="text-neutral-500 text-xs font-mono hover:text-white transition-colors duration-200"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}