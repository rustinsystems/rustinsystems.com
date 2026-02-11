import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-charcoal py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold tracking-wider text-white font-mono">
                            RUSTIN<span className="text-silver">SYSTEMS</span>
                        </span>
                        <p className="text-gray-400 text-sm mt-2">
                            Architecting secure systems from the metal up
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:contact@rustinsystems.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-charcoal pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Rustin Systems. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
