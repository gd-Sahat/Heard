import { Hero } from "../Hero";
import { Features } from "../Features";
import { Testimonials } from "../Testimonials";
import { Shield, DollarSign, Users, Brain, ArrowRight, Clock } from "lucide-react";
import { Button } from "../ui/button";

export function HomePage() {
  const keyFeatures = [
    {
      icon: DollarSign,
      title: "Affordable Support",
      description: "Quality emotional support for those who can't afford traditional therapy."
    },
    {
      icon: Shield,
      title: "Anonymous Conversations",
      description: "Your privacy is protected with complete anonymity and end-to-end encryption."
    },
    {
      icon: Users,
      title: "Empathetic Listeners",
      description: "Connect with trained, caring people—not bots or AI."
    },
    {
      icon: Brain,
      title: "AI Matching",
      description: "Smart pairing system connects you with the perfect listener for your needs."
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Sign up and tell us your preferences",
      description: "Quick 2-minute signup with options for listener gender, language, and session type.",
      icon: "👤"
    },
    {
      step: 2,
      title: "Get matched with a trained listener",
      description: "Our AI matching system connects you with the perfect listener in under a minute.",
      icon: "🤝"
    },
    {
      step: 3,
      title: "Start a secure, judgment-free conversation",
      description: "Connect instantly through our encrypted platform and feel truly heard.",
      icon: "💬"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Heard?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience a new way to get emotional support that's accessible, affordable, and always available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Getting support is simple, fast, and completely confidential.
            </p>
          </div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="text-6xl mb-4">{step.icon}</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      <Features />
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Feel Lighter?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of people who have found their voice and support through Heard. Your journey to better emotional wellbeing starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Clock className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-200">
              Learn More About Heard
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}