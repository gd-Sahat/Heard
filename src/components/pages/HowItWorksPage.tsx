import { useState } from "react";
import { User, Users, MessageCircle, Clock, Shield, CheckCircle, Star, Award } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function HowItWorksPage() {
  const userSteps = [
    {
      icon: User,
      title: "Sign Up & Share Preferences",
      description: "Create your account and tell us your preferences for gender of listener, language, and session duration.",
      details: "Quick 2-minute signup process with optional preferences to help us match you better."
    },
    {
      icon: MessageCircle,
      title: "Get Matched with a Listener",
      description: "Our AI matching system connects you with a trained listener in less than a minute.",
      details: "Advanced algorithm considers your preferences, availability, and listener expertise."
    },
    {
      icon: Shield,
      title: "Start Your Conversation",
      description: "Begin chatting securely and anonymously in a judgment-free environment.",
      details: "End-to-end encrypted conversations with complete anonymity protection."
    }
  ];

  const listenerSteps = [
    {
      icon: Users,
      title: "Apply to Join",
      description: "Submit your application through our platform with basic information about yourself.",
      details: "Simple application process focusing on empathy and communication skills."
    },
    {
      icon: CheckCircle,
      title: "Complete Assessment",
      description: "Take our empathy assessment to demonstrate your listening and support abilities.",
      details: "Scenario-based assessment evaluating emotional intelligence and response skills."
    },
    {
      icon: Award,
      title: "Attend Training",
      description: "Complete our comprehensive online training program on active listening and support techniques.",
      details: "20-hour training covering ethics, boundaries, crisis recognition, and communication."
    },
    {
      icon: Star,
      title: "Start Supporting Users",
      description: "Begin your journey as a certified listener, making a difference in people's lives.",
      details: "Ongoing support, supervision, and continuing education opportunities."
    }
  ];

  const userFaqs = [
    {
      question: "What if I need professional help?",
      answer: "While our listeners provide emotional support, they are not licensed therapists. If you're experiencing a mental health crisis or need professional treatment, we'll guide you to appropriate resources and encourage you to seek professional help."
    },
    {
      question: "How is my data protected?",
      answer: "We use end-to-end encryption for all conversations, maintain strict anonymity protocols, and never store personally identifiable information. Your privacy and security are our top priorities."
    },
    {
      question: "How long are typical conversations?",
      answer: "Conversations can range from 15 minutes to an hour, depending on your needs and preferences. You have complete control over the duration and can end the conversation at any time."
    },
    {
      question: "What if I don't connect with my matched listener?",
      answer: "You can request a new listener at any time, no questions asked. We want to ensure you feel comfortable and supported in every conversation."
    }
  ];

  const listenerQuiz = [
    {
      scenario: "A user says: 'I feel like nobody understands what I'm going through.'",
      options: [
        "I understand exactly how you feel",
        "Tell me more about what you're experiencing",
        "You should try talking to a therapist",
        "Many people go through similar situations"
      ],
      correct: 1,
      explanation: "The best response encourages the user to share more and shows you're actively listening without making assumptions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How Heard Works
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking support or want to become a listener, we make it simple to connect and make a difference.
          </p>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="users" className="text-lg py-3">For Users</TabsTrigger>
              <TabsTrigger value="listeners" className="text-lg py-3">For Listeners</TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-16">
              {/* User Steps */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Getting Support in 3 Simple Steps</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {userSteps.map((step, index) => (
                    <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 mb-4">{step.description}</p>
                        <p className="text-sm text-slate-500 italic">{step.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* User FAQs */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-12 rounded-3xl">
                <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Frequently Asked Questions</h3>
                <div className="space-y-6 max-w-4xl mx-auto">
                  {userFaqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-blue-100">
                      <h4 className="font-semibold text-slate-900 mb-3">{faq.question}</h4>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* User CTA */}
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Your Conversation Now!
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="listeners" className="space-y-16">
              {/* Listener Journey */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Your Journey to Becoming a Listener</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {listenerSteps.map((step, index) => (
                    <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300">
                      <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium mb-2">
                          Step {index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 text-sm mb-3">{step.description}</p>
                        <p className="text-xs text-slate-500 italic">{step.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Quiz Preview */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">Do You Have What It Takes?</h3>
                <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                  Try this sample question from our empathy assessment to see if you have the listening skills we're looking for.
                </p>
                
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white p-6 rounded-2xl border border-blue-200 mb-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Scenario:</h4>
                    <p className="text-slate-700 italic mb-6">"{listenerQuiz[0].scenario}"</p>
                    <h4 className="font-semibold text-slate-900 mb-3">How would you respond?</h4>
                    <div className="space-y-3">
                      {listenerQuiz[0].options.map((option, index) => (
                        <button
                          key={index}
                          className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-green-800 text-sm">
                      <strong>Best Answer:</strong> "{listenerQuiz[0].options[listenerQuiz[0].correct]}"
                    </p>
                    <p className="text-green-700 text-sm mt-2">{listenerQuiz[0].explanation}</p>
                  </div>
                </div>
              </div>

              {/* Training Content Overview */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Training Program Overview</h3>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {[
                    {
                      title: "Active Listening Skills",
                      content: ["Reflective listening techniques", "Non-verbal communication", "Asking open-ended questions", "Summarizing and paraphrasing"]
                    },
                    {
                      title: "Emotional Boundary Setting",
                      content: ["Maintaining professional distance", "Self-care practices", "Recognizing personal triggers", "When to refer to professionals"]
                    },
                    {
                      title: "Ethical Guidelines",
                      content: ["Confidentiality protocols", "Crisis intervention procedures", "Cultural sensitivity", "Platform policies and procedures"]
                    }
                  ].map((module, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                      <h4 className="font-semibold text-slate-900 mb-4">{module.title}</h4>
                      <ul className="space-y-2">
                        {module.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-slate-600 text-sm flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Listener CTA */}
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Apply to Become a Listener!
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}