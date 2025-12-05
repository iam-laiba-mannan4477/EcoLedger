import React, { useState } from 'react';
import { Logo } from './icons/Logo';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#how-it-works', label: 'How It Works' },
        { href: '#benefits', label: 'Benefits' },
        { href: '#use-cases', label: 'Use Cases' },
    ];

    return (
        <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/80">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="flex items-center space-x-2">
                        <Logo className="h-10 w-10 text-eco-primary" />
                        <span className="text-2xl font-bold text-gray-800">EcoLedger</span>
                    </a>

                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-gray-600 font-medium hover:text-eco-primary transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <a href="#contact" className="bg-eco-primary text-white px-5 py-2.5 rounded-lg font-semibold shadow hover:bg-eco-dark transition-all">
                            Get Started
                        </a>
                    </div>
                    
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-md border-t">
                    <nav className="flex flex-col items-center p-4 space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-medium hover:text-eco-primary transition-colors">
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-eco-primary text-white w-full text-center px-5 py-2.5 rounded-lg font-semibold shadow hover:bg-eco-dark transition-all">
                            Get Started
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
