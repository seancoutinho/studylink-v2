"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary transition-colors duration-300 hover:text-primary/80">
          StudyLinkEU
        </Link>
        <nav className="hidden md:flex space-x-1">
          {['About', 'Services', 'Courses', 'Blog', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline" className="hidden md:inline-flex hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            Apply Now
          </Button>
          <Button variant="ghost" className="md:hidden text-foreground hover:text-primary transition-colors duration-300" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {['About', 'Services', 'Courses', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                {item}
              </Link>
            ))}
            <Button variant="outline" className="w-full mt-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              Apply Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;