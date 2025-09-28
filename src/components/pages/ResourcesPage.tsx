import { useState } from "react";
import { BookOpen, Headphones, PenTool, Heart, Search, Clock, User, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Resources", icon: BookOpen },
    { id: "articles", label: "Articles", icon: BookOpen },
    { id: "audio", label: "Audio Guides", icon: Headphones },
    { id: "tools", label: "Interactive Tools", icon: PenTool },
    { id: "stories", label: "User Stories", icon: Heart }
  ];

  const featuredArticles = [
    {
      title: "5 Ways to Practice Self-Compassion Daily",
      category: "articles",
      readTime: "6 min read",
      image: "🌱",
      excerpt: "Learn practical techniques to be kinder to yourself and build emotional resilience.",
      tags: ["Self-Care", "Mental Health", "Daily Practice"]
    },
    {
      title: "Understanding Anxiety: A Gentle Guide",
      category: "articles", 
      readTime: "8 min read",
      image: "🧠",
      excerpt: "Explore what anxiety is, why it happens, and gentle ways to manage anxious thoughts.",
      tags: ["Anxiety", "Understanding", "Coping"]
    },
    {
      title: "Building Healthy Boundaries in Relationships",
      category: "articles",
      readTime: "7 min read", 
      image: "🤝",
      excerpt: "Discover how to set and maintain healthy boundaries while preserving meaningful connections.",
      tags: ["Relationships", "Boundaries", "Communication"]
    }
  ];

  const audioGuides = [
    {
      title: "10-Minute Mindfulness for Beginners",
      category: "audio",
      duration: "10 min",
      image: "🧘",
      description: "A gentle introduction to mindfulness practice for reducing stress and increasing awareness."
    },
    {
      title: "Sleep Stories for Anxiety Relief",
      category: "audio", 
      duration: "20 min",
      image: "😴",
      description: "Calming narratives designed to help quiet an anxious mind before sleep."
    },
    {
      title: "Guided Breathing for Panic Attacks",
      category: "audio",
      duration: "5 min",
      image: "💨",
      description: "Quick, effective breathing exercises to help manage panic and overwhelming feelings."
    }
  ];

  const interactiveTools = [
    {
      title: "Daily Mood Tracker",
      category: "tools",
      type: "Tracking Tool",
      image: "📊",
      description: "Monitor your emotional patterns and identify triggers with our simple, private mood tracker."
    },
    {
      title: "Gratitude Journal Builder",
      category: "tools",
      type: "Journaling Tool", 
      image: "📝",
      description: "Create personalized gratitude practices with guided prompts and reflection questions."
    },
    {
      title: "Stress Assessment Quiz",
      category: "tools",
      type: "Assessment",
      image: "🎯",
      description: "Understand your stress levels and get personalized recommendations for management."
    }
  ];

  const userStories = [
    {
      title: "Finding My Voice After Loss",
      category: "stories",
      author: "Anonymous User",
      image: "🌅",
      excerpt: "How connecting with a listener helped me process grief and rediscover hope.",
      tags: ["Grief", "Hope", "Recovery"]
    },
    {
      title: "From Isolation to Connection",
      category: "stories", 
      author: "Anonymous User",
      image: "🌉",
      excerpt: "My journey from social anxiety to building meaningful relationships through Heard.",
      tags: ["Social Anxiety", "Connection", "Growth"]
    },
    {
      title: "Learning to Listen: A Listener's Story",
      category: "stories",
      author: "Certified Listener",
      image: "👂",
      excerpt: "What I've learned about empathy, growth, and human connection as a Heard listener.",
      tags: ["Listening", "Empathy", "Growth"]
    }
  ];

  const allResources = [
    ...featuredArticles,
    ...audioGuides,
    ...interactiveTools,
    ...userStories
  ];

  const filteredResources = allResources.filter(resource => {
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Learn & Grow
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover helpful resources, tools, and stories to support your emotional wellbeing journey.
          </p>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Enter your email for updates"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 rounded-full">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-2">
              Get the latest mental health tips and stories delivered to your inbox!
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "border-blue-200 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              {selectedCategory === "all" ? "All Resources" : 
               categories.find(c => c.id === selectedCategory)?.label}
            </h2>
            <Badge variant="outline" className="text-slate-500">
              {filteredResources.length} resources
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="p-6">
                  <div className="text-4xl mb-4">{resource.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {resource.category === "articles" ? "Article" :
                       resource.category === "audio" ? "Audio" :
                       resource.category === "tools" ? "Tool" : "Story"}
                    </Badge>
                    {resource.readTime && (
                      <span className="text-sm text-slate-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {resource.readTime}
                      </span>
                    )}
                    {resource.duration && (
                      <span className="text-sm text-slate-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {resource.duration}
                      </span>
                    )}
                    {resource.type && (
                      <span className="text-sm text-slate-500">{resource.type}</span>
                    )}
                    {resource.author && (
                      <span className="text-sm text-slate-500 flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {resource.author}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {resource.excerpt || resource.description}
                  </p>
                  {resource.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    {resource.category === "tools" ? "Try Tool" : "Read More"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-500 mb-2">No resources found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Access Tools</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Instant access to tools that can help you right now.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mood Check-In",
                description: "Quick 2-minute mood assessment",
                icon: "😊",
                action: "Start Check-In"
              },
              {
                title: "Breathing Exercise",
                description: "5-minute guided breathing",
                icon: "💨",
                action: "Start Breathing"
              },
              {
                title: "Gratitude Moment",
                description: "Share what you're grateful for",
                icon: "🙏",
                action: "Add Gratitude"
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-blue-100 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{tool.title}</h3>
                <p className="text-slate-600 mb-4">{tool.description}</p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  {tool.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 p-8 rounded-3xl text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Need Immediate Help?</h2>
            <p className="text-red-700 mb-6">
              If you're experiencing a mental health crisis or having thoughts of self-harm, please reach out for immediate support:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Services</h3>
                <p className="text-red-700">Call 911</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Suicide Prevention</h3>
                <p className="text-red-700">Call or Text 988</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Crisis Text Line</h3>
                <p className="text-red-700">Text HOME to 741741</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}