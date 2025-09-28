import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, ArrowLeft, Minimize2 } from "lucide-react";
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
  const [conversationHistory, setConversationHistory] = useState<Array<{role: string, content: string}>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ⚠️ IMPORTANT: Replace with your actual OpenAI API key
  // For production, use environment variables or backend API
  const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY_HERE";
  
  // Set to false to disable AI and use only local responses
  const USE_AI = false; // Change to true when you add your API key

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI-powered response generation
  const generateAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const systemPrompt = `You are a compassionate AI mental health support companion called "Heard". Your role is to:

1. Listen actively and empathetically to users' concerns
2. Provide emotional validation and support
3. Ask thoughtful follow-up questions to help users process their feelings
4. Offer gentle coping strategies when appropriate
5. Maintain appropriate boundaries - you're not a replacement for professional therapy
6. Always prioritize user safety and well-being

Guidelines:
- Use warm, non-judgmental language
- Reflect back what users share to show you're listening
- Ask open-ended questions to encourage deeper reflection
- If someone mentions self-harm or crisis, gently suggest professional resources
- Keep responses concise but meaningful (2-4 sentences typically)
- Focus on emotional support rather than giving direct advice

Remember: You're creating a safe space for people to be heard and validated.`;

      const messages = [
        { role: 'system', content: systemPrompt },
        ...conversationHistory.slice(-10), // Keep last 10 messages for context
        { role: 'user', content: userMessage }
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || "I'm here to listen. Can you tell me more?";

    } catch (error) {
      console.error('AI API Error:', error);
      throw error;
    }
  };

  // Fallback local response system (your original logic)
  const generateLocalResponse = (userMessage: string): string => {
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

  // Main response generation function
  const generateBotResponse = async (userMessage: string): Promise<string> => {
    // Try AI first if enabled and API key is provided
    if (USE_AI && OPENAI_API_KEY && OPENAI_API_KEY !== "YOUR_OPENAI_API_KEY_HERE") {
      try {
        return await generateAIResponse(userMessage);
      } catch (error) {
        console.error('AI failed, falling back to local responses:', error);
        return generateLocalResponse(userMessage);
      }
    }

    // Use local responses as default/fallback
    return generateLocalResponse(userMessage);
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
    
    // Update conversation history for AI context
    setConversationHistory(prev => [
      ...prev.slice(-10), // Keep last 10 exchanges for context
      { role: 'user', content: inputValue }
    ]);

    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      const botResponseText = await generateBotResponse(currentInput);
      
      // Update conversation history with bot response
      setConversationHistory(prev => [
        ...prev,
        { role: 'assistant', content: botResponseText }
      ]);

      // Simulate realistic typing delay
      const delay = 1000 + Math.random() * 2000;
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, delay);

    } catch (error) {
      console.error('Error generating response:', error);
      setTimeout(() => {
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'm having some technical difficulties right now. I'm still here to listen though. Could you try sharing that again?",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorResponse]);
        setIsTyping(false);
      }, 1000);
    }
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
                <p className="text-blue-100 text-sm">
                  {USE_AI && OPENAI_API_KEY !== "YOUR_OPENAI_API_KEY_HERE" 
                    ? 'AI-powered support' 
                    : 'Your safe space to be heard'}
                </p>
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
          
          {/* Status indicator */}
          {!USE_AI && (
            <div className="mt-2 text-center">
              <p className="text-xs text-orange-600 bg-orange-50 rounded-full px-3 py-1 inline-block">
                💡 Using local responses - Add API key to enable AI
              </p>
            </div>
          )}
          
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