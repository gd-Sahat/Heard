import { Check, Star, Users, DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with emotional support",
      features: [
        "AI-guided journaling tools",
        "Access to mental health resources",
        "Community support forums",
        "Basic mood tracking",
        "Crisis resource directory"
      ],
      limitations: [
        "No live conversations with listeners",
        "Limited journaling templates"
      ],
      cta: "Get Started Free",
      popular: false,
      color: "slate"
    },
    {
      name: "Basic",
      price: "$19",
      period: "per month",
      description: "Essential support for regular emotional wellness",
      features: [
        "Everything in Free",
        "3 conversations per month (30 min each)",
        "AI matching with listeners",
        "Anonymous and secure chats",
        "Priority support",
        "Advanced mood tracking",
        "Personalized wellness insights"
      ],
      limitations: [],
      cta: "Choose Basic",
      popular: false,
      color: "blue"
    },
    {
      name: "Premium",
      price: "$39",
      period: "per month",
      description: "Unlimited support whenever you need it most",
      features: [
        "Everything in Basic",
        "Unlimited conversations",
        "Priority listener matching (under 30 seconds)",
        "Extended sessions (up to 90 minutes)",
        "Choose your listener preferences",
        "Session recordings for reflection",
        "24/7 crisis support access",
        "Exclusive wellness workshops"
      ],
      limitations: [],
      cta: "Choose Premium",
      popular: true,
      color: "blue"
    }
  ];

  const discounts = [
    {
      icon: Users,
      title: "Students",
      discount: "50% off",
      description: "Valid student ID required. Because mental health shouldn't wait for graduation."
    },
    {
      icon: DollarSign,
      title: "Low Income",
      discount: "Up to 75% off",
      description: "Income-based discounts available. Everyone deserves to be heard."
    },
    {
      icon: Star,
      title: "Corporate",
      discount: "Custom pricing",
      description: "Bulk pricing for organizations. Support your team's wellbeing."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Affordable Emotional Support
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose a plan that works for your needs and budget. Quality support shouldn't break the bank.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 rounded-3xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-blue-500 transform scale-105' 
                    : 'border-blue-100 hover:border-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start opacity-60">
                      <span className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-slate-400">×</span>
                      <span className="text-slate-500 line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-3 rounded-full transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : plan.name === 'Free'
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Affordable */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Heard is Affordable</h2>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-blue-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Traditional therapy can cost $100-300 per session, making it inaccessible to many who need support. 
              At Heard, we use trained empathetic listeners instead of licensed therapists, allowing us to provide 
              quality emotional support at a fraction of the cost.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our listeners undergo comprehensive training in active listening, emotional support, and crisis recognition. 
              While they don't provide clinical treatment, they offer genuine human connection and support when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Special Discounts</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We believe everyone deserves access to emotional support, regardless of their financial situation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {discounts.map((discount, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <discount.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{discount.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-4">{discount.discount}</div>
                <p className="text-slate-600 leading-relaxed">{discount.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Choose a plan that works for you and start your journey to better emotional wellbeing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full transition-all duration-200">
              Compare All Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}