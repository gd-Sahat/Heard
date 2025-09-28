import { Button } from "./ui/button";
import { Navigation, MobileNavigation } from "./Navigation";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Heard</span>
          </button>

          {/* Desktop Navigation */}
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline"
              onClick={() => onNavigate('become-listener')}
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              Become a Listener
            </Button>
            <Button 
              onClick={() => onNavigate('start-conversation')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              Start a Conversation
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
}