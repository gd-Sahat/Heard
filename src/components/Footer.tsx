import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Heard</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Creating a safe space where every voice is heard and every story matters. Join our community of support and understanding.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Community Guidelines</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Success Stories</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Crisis Resources</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4" />
                <span>support@heard.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4" />
                <span>1-800-HEARD</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 Heard. All rights reserved.
            </p>
          </div>
        </div>

        {/* Crisis Help Notice */}
        <div className="bg-slate-800 rounded-lg p-4 mt-6">
          <p className="text-slate-300 text-sm text-center">
            <strong className="text-white">Crisis Support:</strong> If you're in immediate danger, please contact emergency services or call the National Suicide Prevention Lifeline at 988.
          </p>
        </div>
      </div>
    </footer>
  );
}