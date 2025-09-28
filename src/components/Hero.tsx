import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onStartConversation?: () => void;
}

export function Hero({ onStartConversation }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Your Safe Space to Be{" "}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Heard
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Affordable, accessible, and anonymous conversations with empathetic listeners, anytime you need.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onStartConversation}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start a Conversation
              </Button>
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full transition-all duration-200">
                Become a Listener
              </Button>
            </div>
          </div>

          {/* Right Column - Animated Hands Video */}
          <div className="relative">
            {/* Background with soft gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"></div>
            
            {/* Animated Hands Container */}
            <div className="relative z-10 h-[400px] lg:h-[500px] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Animated SVG Hands */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg 
                  className="w-80 h-80 lg:w-96 lg:h-96" 
                  viewBox="0 0 400 300" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Floating particles */}
                  <g className="animate-pulse">
                    <circle cx="100" cy="80" r="3" fill="#3b82f6" opacity="0.4">
                      <animate attributeName="cy" values="80;60;80" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="100" r="2" fill="#60a5fa" opacity="0.6">
                      <animate attributeName="cy" values="100;85;100" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="60" r="2.5" fill="#2563eb" opacity="0.5">
                      <animate attributeName="cy" values="60;45;60" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  {/* Left Hand (seeking) */}
                  <g className="hand-seeking">
                    <path 
                      d="M120 180 Q130 160 140 170 Q145 175 150 185 Q155 195 160 200 Q165 205 170 200 Q175 195 180 200 Q185 205 190 210 Q195 215 200 220" 
                      stroke="#1e40af" 
                      strokeWidth="8" 
                      fill="none" 
                      strokeLinecap="round"
                      className="hand-path"
                    >
                      <animate 
                        attributeName="d" 
                        values="M120 180 Q130 160 140 170 Q145 175 150 185 Q155 195 160 200 Q165 205 170 200 Q175 195 180 200 Q185 205 190 210 Q195 215 200 220;
                                M115 185 Q125 165 135 175 Q140 180 145 190 Q150 200 155 205 Q160 210 165 205 Q170 200 175 205 Q180 210 185 215 Q190 220 195 225;
                                M120 180 Q130 160 140 170 Q145 175 150 185 Q155 195 160 200 Q165 205 170 200 Q175 195 180 200 Q185 205 190 210 Q195 215 200 220" 
                        dur="4s" 
                        repeatCount="indefinite"
                      />
                    </path>
                    
                    {/* Left hand palm */}
                    <ellipse cx="190" cy="210" rx="25" ry="35" fill="#3b82f6" opacity="0.8" transform="rotate(-10 190 210)">
                      <animateTransform 
                        attributeName="transform" 
                        values="rotate(-10 190 210) translate(0 0);rotate(-5 190 210) translate(5 -2);rotate(-10 190 210) translate(0 0)" 
                        dur="4s" 
                        repeatCount="indefinite"
                      />
                    </ellipse>
                  </g>
                  
                  {/* Right Hand (caring/supporting) */}
                  <g className="hand-caring">
                    <path 
                      d="M280 180 Q270 160 260 170 Q255 175 250 185 Q245 195 240 200 Q235 205 230 200 Q225 195 220 200 Q215 205 210 210 Q205 215 200 220" 
                      stroke="#1d4ed8" 
                      strokeWidth="8" 
                      fill="none" 
                      strokeLinecap="round"
                    >
                      <animate 
                        attributeName="d" 
                        values="M280 180 Q270 160 260 170 Q255 175 250 185 Q245 195 240 200 Q235 205 230 200 Q225 195 220 200 Q215 205 210 210 Q205 215 200 220;
                                M275 175 Q265 155 255 165 Q250 170 245 180 Q240 190 235 195 Q230 200 225 195 Q220 190 215 195 Q210 200 205 205 Q200 210 195 215;
                                M280 180 Q270 160 260 170 Q255 175 250 185 Q245 195 240 200 Q235 205 230 200 Q225 195 220 200 Q215 205 210 210 Q205 215 200 220" 
                        dur="4s" 
                        repeatCount="indefinite"
                      />
                    </path>
                    
                    {/* Right hand palm */}
                    <ellipse cx="210" cy="210" rx="25" ry="35" fill="#2563eb" opacity="0.8" transform="rotate(10 210 210)">
                      <animateTransform 
                        attributeName="transform" 
                        values="rotate(10 210 210) translate(0 0);rotate(5 210 210) translate(-5 -2);rotate(10 210 210) translate(0 0)" 
                        dur="4s" 
                        repeatCount="indefinite"
                      />
                    </ellipse>
                  </g>
                  
                  {/* Connection heart effect */}
                  <g className="connection-heart">
                    <path 
                      d="M200 200 C195 190 180 190 180 205 C180 215 200 230 200 230 C200 230 220 215 220 205 C220 190 205 190 200 200Z" 
                      fill="#ef4444" 
                      opacity="0"
                    >
                      <animate 
                        attributeName="opacity" 
                        values="0;0;0.8;0.4;0" 
                        dur="4s" 
                        repeatCount="indefinite"
                      />
                      <animateTransform 
                        attributeName="transform" 
                        values="scale(0.5) translate(0 10);scale(0.5) translate(0 10);scale(1) translate(0 0);scale(1.2) translate(0 -5);scale(0.8) translate(0 5)" 
                        dur="4s" 
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                  
                  {/* Gentle glow effect */}
                  <circle cx="200" cy="215" r="50" fill="url(#gentleGlow)" opacity="0.3">
                    <animate attributeName="r" values="50;60;50" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Gradient definitions */}
                  <defs>
                    <radialGradient id="gentleGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                      <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
                    </radialGradient>
                  </defs>
                </svg>
                
                {/* Overlay text */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-blue-700 font-medium text-lg mb-2 drop-shadow-sm">
                    Every hand needs another
                  </p>
                  <p className="text-blue-600 text-sm opacity-80">
                    Find your gentle connection
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}