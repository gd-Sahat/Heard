import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'become-listener', label: 'Become a Listener' },
    { id: 'resources', label: 'Resources' },
  ];

  const moreItems = [
    { id: 'privacy', label: 'Privacy & Safety' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'technology', label: 'Technology' },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
            currentPage === item.id ? 'text-blue-600' : 'text-slate-600'
          }`}
        >
          {item.label}
        </button>
      ))}
      
      {/* More Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
        >
          <span>More</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
            {moreItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors duration-200 ${
                  currentPage === item.id ? 'text-blue-600 bg-blue-50' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export function MobileNavigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const allItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'become-listener', label: 'Become a Listener' },
    { id: 'resources', label: 'Resources' },
    { id: 'privacy', label: 'Privacy & Safety' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'technology', label: 'Technology' },
  ];

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-10"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg py-4 z-50">
          <div className="max-w-7xl mx-auto px-4">
            {allItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left py-3 px-4 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  currentPage === item.id 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                onClick={() => onNavigate('start-conversation')}
              >
                Start a Conversation
              </Button>
              <Button 
                variant="outline"
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                onClick={() => onNavigate('become-listener')}
              >
                Become a Listener
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}