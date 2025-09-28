import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, ArrowLeft, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotPageProps {
  onBack?: () => void;
}

export function ChatbotPage({ onBack }: ChatbotPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to listen and support you. What's on your mind today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Empathetic responses based on keywords
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      return "I hear that you're feeling sad right now. That must be really difficult. Would you like to tell me more about what's been weighing on your heart?";
    }
    
    if (lowerMessage.includes('anxious') || lowerMessage.includes('worried') || lowerMessage.includes('stress')) {
      return "It sounds like you're experiencing some anxiety or stress. Those feelings can be overwhelming. What's been causing you the most worry lately?";
    }
    
    if (lowerMessage.includes('lonely') || lowerMessage.includes('alone') || lowerMessage.includes('isolated')) {
      return "Feeling lonely can be one of the hardest emotions to bear. I want you to know that you're not alone right now - I'm here with you. Can you share what's making you feel this way?";
    }
    
    if (lowerMessage.includes('angry') || lowerMessage.includes('frustrated') || lowerMessage.includes('mad')) {
      return "I can sense your frustration and anger. Those are valid feelings, and it's okay to experience them. What's been triggering these emotions for you?";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('grateful')) {
      return "You're so welcome. It means a lot to me that you feel comfortable sharing here. How are you feeling right now?";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm here to provide emotional support and a listening ear. While I can't replace professional therapy, I can offer understanding and validation. What kind of support would feel most helpful right now?";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello there! I'm glad you reached out today. How are you feeling right now, and what brought you here?";
    }
    
    // Default empathetic responses
    const defaultResponses = [
      "Thank you for sharing that with me. I can imagine that must be challenging to deal with. Can you tell me more about how this is affecting you?",
      "I hear you, and I want you to know that your feelings are completely valid. What's been the hardest part about this situation?",
      "It takes courage to open up about what you're going through. I'm here to listen without judgment. How long have you been feeling this way?",
      "That sounds really difficult to navigate. You're not alone in feeling this way. What would feel most supportive for you right now?",
      "I appreciate you trusting me with this. Your experiences matter, and so do your feelings. What's been on your mind the most lately?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3"
        >
          <Bot className="w-5 h-5 mr-2" />
          Continue Chat
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[80vh] bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {onBack && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                className="text-white hover:bg-white/20 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Heard Support Chat</h1>
                <p className="text-blue-100 text-sm">Your safe space to be heard</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(true)}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <Minimize2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-r from-green-500 to-green-600'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-green-500 to-green-600">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="pr-12 py-3 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                disabled={isTyping}
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              This is a supportive chat experience. For crisis support, please contact emergency services or call 988.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}