import { Heart, Users, DollarSign, Award, CheckCircle, Star, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function BecomeListenerPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Make a Real Impact",
      description: "Help people through difficult times and be part of their healing journey."
    },
    {
      icon: DollarSign,
      title: "Earn While Helping",
      description: "Flexible income opportunity - earn $12-18/hour based on experience and ratings."
    },
    {
      icon: Award,
      title: "Professional Development",
      description: "Gain valuable listening and communication skills with certification upon completion."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join a network of compassionate listeners with ongoing support and mentorship."
    }
  ];

  const requirements = [
    "Must be 21 years or older",
    "Excellent written communication skills",
    "Empathetic and non-judgmental personality",
    "Reliable internet connection",
    "Commitment to 5+ hours per week",
    "Pass background check and training program"
  ];

  const trainingModules = [
    {
      title: "Active Listening Fundamentals",
      duration: "4 hours",
      topics: ["Reflective listening", "Non-verbal cues", "Emotional validation"]
    },
    {
      title: "Emotional Support Techniques",
      duration: "6 hours",
      topics: ["Crisis recognition", "De-escalation", "When to refer"]
    },
    {
      title: "Ethics & Boundaries",
      duration: "4 hours",
      topics: ["Confidentiality", "Professional limits", "Self-care"]
    },
    {
      title: "Platform & Safety",
      duration: "3 hours",
      topics: ["Platform tools", "Safety protocols", "Reporting procedures"]
    },
    {
      title: "Practical Application",
      duration: "3 hours",
      topics: ["Mock conversations", "Feedback sessions", "Certification exam"]
    }
  ];

  const testimonials = [
    {
      name: "Maria L.",
      role: "Certified Listener, 8 months",
      quote: "Being a listener has been incredibly rewarding. I've helped over 200 people and learned so much about myself in the process.",
      rating: 5
    },
    {
      name: "David K.", 
      role: "Certified Listener, 1 year",
      quote: "The training was comprehensive and the ongoing support is amazing. I feel confident and prepared for every conversation.",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Certified Listener, 6 months",
      quote: "What started as a way to help others became a journey of personal growth. The flexibility fits perfectly with my schedule.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
            Join Our Listener Community
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Become a Certified Listener
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Make a meaningful difference in people's lives while developing valuable skills and earning flexible income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full transition-all duration-200">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Why Become a Listener */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Become a Listener?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join a community of compassionate individuals making a real difference in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Listener Requirements</h2>
            <p className="text-xl text-slate-600">
              We maintain high standards to ensure quality support for our users.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-blue-100">
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Training Program
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              20 hours of professional training to prepare you for meaningful conversations.
            </p>
          </div>

          <div className="space-y-6">
            {trainingModules.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
                        Module {index + 1}
                      </span>
                      <Badge variant="outline" className="text-slate-500">
                        {module.duration}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{module.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listener Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Listeners Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear from certified listeners who are making a difference every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 md:p-12 rounded-3xl text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of certified listeners and start your journey of helping others while growing personally and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Apply to Become a Listener
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-200">
                Download Info Packet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}