import { Shield, Lock, Eye, AlertTriangle, Users, FileText } from "lucide-react";

export function PrivacyPage() {
  const privacyMeasures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All conversations are encrypted using military-grade AES-256 encryption, ensuring only you and your listener can access your messages."
    },
    {
      icon: Eye,
      title: "Complete Anonymity",
      description: "No personal information is required or stored. You choose your own anonymous username and avatar."
    },
    {
      icon: FileText,
      title: "Zero Data Logging",
      description: "We don't log, record, or store your conversations. Once your session ends, your messages are permanently deleted."
    },
    {
      icon: Shield,
      title: "Strict Listener Confidentiality",
      description: "All listeners sign comprehensive confidentiality agreements and undergo background checks before certification."
    }
  ];

  const safetyFeatures = [
    {
      icon: AlertTriangle,
      title: "AI Safety Monitoring",
      description: "Our AI system flags potential high-risk conversations and immediately connects users to crisis resources when needed."
    },
    {
      icon: Users,
      title: "24/7 Crisis Support",
      description: "Immediate access to crisis intervention resources and professional mental health services when situations escalate."
    },
    {
      icon: Shield,
      title: "Reporting System",
      description: "Easy-to-use reporting system for inappropriate behavior, with immediate investigation and action protocols."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            We Value Your Trust
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy and safety are at the heart of everything we do. Learn how we protect your information and ensure a safe space for everyone.
          </p>
        </div>
      </section>

      {/* Privacy Measures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Privacy Protection
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We've built the most secure and private platform for emotional support conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {privacyMeasures.map((measure, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <measure.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{measure.title}</h3>
                <p className="text-slate-600 leading-relaxed">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Handle Your Data</h2>
            <p className="text-xl text-slate-600">
              Complete transparency about what we collect, how we use it, and how we protect it.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-blue-100">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What We Collect</h3>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-3">✅ Minimal Information Only:</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Anonymous username (you choose)</li>
                    <li>• General preferences (listener gender, language)</li>
                    <li>• Session duration and frequency for matching</li>
                    <li>• Payment information (processed securely by Stripe)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What We DON'T Collect</h3>
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-3">❌ Never Collected:</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Real names or personal identities</li>
                    <li>• Conversation content or messages</li>
                    <li>• Location data or IP addresses</li>
                    <li>• Social media profiles or contacts</li>
                    <li>• Medical or mental health records</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Retention</h3>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Zero retention policy:</strong> All conversation data is automatically deleted immediately after your session ends. 
                    Only anonymous usage statistics (like session duration) are kept for service improvement, with no way to trace back to individual users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Safety Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Multiple layers of protection to ensure your safety and wellbeing in every conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Compliance & Standards</h2>
            <p className="text-xl text-slate-600">
              We meet or exceed industry standards for privacy and data protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Security Standards</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  SOC 2 Type II Certified
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  GDPR Compliant
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  CCPA Compliant
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Regular Security Audits
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Data Protection</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  AES-256 Encryption
                </li>
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  TLS 1.3 Transport Security
                </li>
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  Zero-Knowledge Architecture
                </li>
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  Secure Cloud Infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 md:p-12 rounded-3xl text-white">
            <h2 className="text-3xl font-bold mb-6">Our Promise to You</h2>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
              We believe that trust is earned through transparency and action. Your privacy isn't just a policy—it's a fundamental right that we're committed to protecting every single day.
            </p>
            <p className="text-lg opacity-80">
              Questions about our privacy practices? We're here to answer them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}