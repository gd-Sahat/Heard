import { useState } from "react";
import { Mail, Phone, MessageCircle, Clock, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get in touch with our support team",
      contact: "support@heard.com",
      responseTime: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "1-800-HEARD (43273)",
      responseTime: "Mon-Fri, 9 AM - 6 PM EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help when you need it",
      contact: "Available on website",
      responseTime: "Response within minutes"
    }
  ];

  const faqs = [
    {
      question: "How do I start a conversation with a listener?",
      answer: "Simply sign up for an account, complete your preferences, and our AI matching system will connect you with a suitable listener within minutes."
    },
    {
      question: "Is my conversation completely anonymous?",
      answer: "Yes, all conversations are completely anonymous. We use end-to-end encryption and don't store any personally identifiable information."
    },
    {
      question: "What if I'm having a mental health crisis?",
      answer: "If you're in immediate danger, please contact emergency services (911) or the National Suicide Prevention Lifeline (988). Our listeners are trained to recognize crises and will guide you to appropriate professional help."
    },
    {
      question: "How much does it cost?",
      answer: "We offer a free plan with basic features, a Basic plan at $19/month for 3 conversations, and a Premium plan at $39/month for unlimited conversations. Students and low-income individuals qualify for significant discounts."
    },
    {
      question: "Can I become a listener?",
      answer: "Yes! We're always looking for empathetic individuals to join our listener community. You must be 21+, pass our training program, and commit to at least 5 hours per week."
    },
    {
      question: "What's the difference between Heard and therapy?",
      answer: "Heard provides emotional support through trained listeners, while therapy involves licensed professionals treating mental health conditions. We complement therapy but don't replace professional treatment when needed."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            We're Here for You
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need support? Our team is ready to help you every step of the way.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <Select onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the nature of your inquiry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user-support">User Support</SelectItem>
                    <SelectItem value="listener-application">Listener Application</SelectItem>
                    <SelectItem value="corporate-partnership">Corporate Partnership</SelectItem>
                    <SelectItem value="technical-issue">Technical Issue</SelectItem>
                    <SelectItem value="billing">Billing & Payments</SelectItem>
                    <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                    <SelectItem value="media-inquiry">Media Inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Options & Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactOptions.map((option, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{option.title}</h3>
                        <p className="text-slate-600 mb-2">{option.description}</p>
                        <p className="font-medium text-blue-600 mb-1">{option.contact}</p>
                        <p className="text-sm text-slate-500">{option.responseTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Crisis Support Notice */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <h3 className="font-semibold text-red-800 mb-2">Crisis Support</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                If you're experiencing a mental health crisis or are in immediate danger, please contact:
              </p>
              <div className="mt-3 space-y-1 text-sm text-red-700">
                <p><strong>Emergency Services:</strong> 911</p>
                <p><strong>National Suicide Prevention Lifeline:</strong> 988</p>
                <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions about Heard.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl border border-blue-100">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Visit Our Office</h3>
            <div className="text-slate-600 space-y-2">
              <p>Heard Headquarters</p>
              <p>123 Wellness Street, Suite 500</p>
              <p>San Francisco, CA 94105</p>
              <p className="pt-4">
                <Clock className="w-4 h-4 inline mr-2" />
                Monday - Friday: 9:00 AM - 6:00 PM PST
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}