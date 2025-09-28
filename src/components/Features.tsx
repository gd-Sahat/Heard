import { MessageCircle, Users, Heart } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Affordable Support",
      description: "Quality emotional support for those who can't afford traditional therapy, with flexible pricing options."
    },
    {
      icon: Users,
      title: "Anonymous Conversations",
      description: "Your privacy is our priority. Share openly without fear of judgment in completely anonymous sessions."
    },
    {
      icon: Heart,
      title: "Empathetic Listeners", 
      description: "Connect with trained, caring people—not bots. Real humans who understand and genuinely care."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How We Help You
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our platform is designed to provide you with the tools and community you need to feel heard and supported.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}