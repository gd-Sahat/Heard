import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Import all pages
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { HowItWorksPage } from "./components/pages/HowItWorksPage";
import { PricingPage } from "./components/pages/PricingPage";
import { BecomeListenerPage } from "./components/pages/BecomeListenerPage";
import { ResourcesPage } from "./components/pages/ResourcesPage";
import { PrivacyPage } from "./components/pages/PrivacyPage";
import { ContactPage } from "./components/pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "how-it-works":
        return <HowItWorksPage />;
      case "pricing":
        return <PricingPage />;
      case "become-listener":
        return <BecomeListenerPage />;
      case "resources":
        return <ResourcesPage />;
      case "privacy":
        return <PrivacyPage />;
      case "contact":
        return <ContactPage />;
      case "corporate":
        return <CorporatePage />;
      case "technology":
        return <TechnologyPage />;
      case "start-conversation":
        // This would typically redirect to the app or show a signup modal
        return <StartConversationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// Placeholder components for missing pages
function CorporatePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Corporate Partnerships</h1>
        <p className="text-xl text-slate-600">Coming soon...</p>
      </div>
    </div>
  );
}

function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">How Heard Works</h1>
        <p className="text-xl text-slate-600">Coming soon...</p>
      </div>
    </div>
  );
}

function StartConversationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Ready to Start Your Conversation?</h1>
        <p className="text-xl text-slate-600 mb-8">
          You're just one click away from connecting with a caring listener who's ready to hear you.
        </p>
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100">
          <p className="text-slate-700 mb-6">
            In a real application, this would redirect to the secure Heard platform where you can:
          </p>
          <ul className="text-left space-y-2 text-slate-600 mb-6">
            <li>• Create your anonymous profile</li>
            <li>• Set your listener preferences</li>
            <li>• Get matched with a listener in under 60 seconds</li>
            <li>• Start your private, encrypted conversation</li>
          </ul>
          <p className="text-sm text-slate-500">
            This is a demo website. The actual Heard platform would be a separate, secure application.
          </p>
        </div>
      </div>
    </div>
  );
}