import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, ArrowLeft, Minimize2, Settings } from "lucide-react";
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
  const [currentModel, setCurrentModel] = useState<'ollama' | 'huggingface' | 'local'>('local');
  const [isModelReady, setIsModelReady] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Model configuration
  const OLLAMA_URL = "http://localhost:11434"; // Default Ollama URL
  const OLLAMA_MODEL = "llama3.2:3b"; // Or try: "phi3", "mistral", "gemma2:2b"
  const HF_API_KEY = ""; // Optional: Add your Hugging Face API key for higher rate limits
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check if Ollama is available
  const checkOllamaStatus = async (): Promise<boolean> => {
    try {
      const response = await fetch(`${OLLAMA_URL}/api/tags`);
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  // Ollama API call
  const generateOllamaResponse = async (userMessage: string): Promise<string> => {
    try {
      const systemPrompt = `You are a compassionate AI mental health support companion. Your role is to provide empathetic, supportive responses to help users feel heard and validated. 

Guidelines:
- Listen actively and empathetically
- Provide emotional validation
- Ask thoughtful follow-up questions
- Keep responses concise (2-4 sentences)
- Use warm, non-judgmental language
- Focus on emotional support, not medical advice
- If someone mentions crisis/self-harm, suggest professional help

Remember: Create a safe space for people to be heard.`;

      const prompt = `${systemPrompt}\n\nHuman: ${userMessage}\n\nAssistant:`;

      const response = await fetch(`${OLLAMA_URL}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: OLLAMA_MODEL,
          prompt: prompt,
          stream: false,
          options: {
            temperature: 0.7,
            top_p: 0.9,
            max_tokens: 200,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.response || "I'm here to listen. Can you tell me more?";

    } catch (error) {
      console.error('Ollama Error:', error);
      throw error;
    }
  };

  // Hugging Face Inference API call (free tier)
  const generateHuggingFaceResponse = async (userMessage: string): Promise<string> => {
    try {
      // Using Microsoft's DialoGPT for conversational responses
      const model = "microsoft/DialoGPT-large";
      
      // Build conversation context
      let conversationText = conversationHistory
        .slice(-6) // Keep last 6 exchanges
        .map(msg => `${msg.role === 'user' ? 'Human' : 'Bot'}: ${msg.content}`)
        .join('\n');
      
      conversationText += `\nHuman: ${userMessage}\nBot:`;

      const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(HF_API_KEY && { 'Authorization': `Bearer ${HF_API_KEY}` })
        },
        body: JSON.stringify({
          inputs: conversationText,
          parameters: {
            max_new_tokens: 100,
            temperature: 0.7,
            do_sample: true,
            return_full_text: false
          }
        }),
      });

      if (!response.ok) {
        if (response.status === 503) {
          throw new Error("Model is loading, please try again in a moment");
        }
        throw new Error(`Hugging Face API Error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      let botResponse = data[0]?.generated_text || "I'm here to listen. Can you tell me more?";
      
      // Clean up the response
      botResponse = botResponse
        .replace(/Human:.*$/g, '') // Remove any trailing human text
        .replace(/Bot:\s*/g, '') // Remove "Bot:" prefix
        .trim();

      // Ensure empathetic response if too short or generic
      if (botResponse.length < 20 || botResponse.includes('undefined')) {
        return generateEmpathethicFallback(userMessage);
      }

      return botResponse;

    } catch (error) {
      console.error('Hugging Face Error:', error);
      throw error;
    }
  };

  // Enhanced local empathetic responses
  const generateEmpathethicFallback = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Emotion-specific responses
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      const responses = [
        "I can hear the sadness in your words, and I want you to know that what you're feeling matters. Sometimes just acknowledging these heavy emotions can be the first step. What's been weighing on you most?",
        "It takes courage to share when you're feeling down. I'm here to listen without judgment. Would you like to tell me more about what's contributing to these feelings?",
        "Sadness can feel overwhelming, but you don't have to carry it alone. I'm here with you right now. What would feel most supportive in this moment?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('anxious') || lowerMessage.includes('worried') || lowerMessage.includes('stress')) {
      const responses = [
        "Anxiety can make everything feel more intense and overwhelming. You're not alone in feeling this way. What's been the biggest source of worry for you lately?",
        "I can sense you're dealing with a lot of stress right now. That must be exhausting. Would it help to talk through what's been on your mind?",
        "Worry has a way of making our minds race. I'm here to listen and help you process these feelings. What's been keeping you up at night?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('lonely') || lowerMessage.includes('alone') || lowerMessage.includes('isolated')) {
      const responses = [
        "Loneliness can be one of the most painful emotions to experience. Right now, you're not alone - I'm here with you. When did you start feeling this way?",
        "I hear how isolated you're feeling, and I want you to know that reaching out today shows incredible strength. What's making you feel most disconnected?",
        "Being alone with difficult feelings is so hard. Thank you for sharing this with me. What would help you feel more connected right now?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('angry') || lowerMessage.includes('frustrated') || lowerMessage.includes('mad')) {
      const responses = [
        "Your anger is completely valid - emotions like frustration often signal that something important needs attention. What's been triggering these feelings for you?",
        "I can sense your frustration, and it's okay to feel angry sometimes. These emotions are telling us something. What's been the hardest part to deal with?",
        "Anger can be such a powerful emotion, and it sounds like you're really struggling with something. I'm here to listen. What's been building up for you?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('scared') || lowerMessage.includes('afraid') || lowerMessage.includes('fear')) {
      const responses = [
        "Fear can make us feel so vulnerable. It's brave of you to share this with me. What's been making you feel scared lately?",
        "I can hear that you're dealing with some real fears right now. That must feel overwhelming. Would you like to talk about what's frightening you?",
        "Being afraid is such a human experience, and you don't have to face it alone. I'm here to listen. What's been on your mind?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Supportive acknowledgments
    if (lowerMessage.includes('thank') || lowerMessage.includes('grateful') || lowerMessage.includes('appreciate')) {
      const responses = [
        "Your gratitude means so much to me. It shows your strength even in difficult times. How are you feeling right now?",
        "You're so welcome. I'm honored that you feel comfortable sharing here. What's been on your heart lately?",
        "Thank you for saying that. Your openness creates such a meaningful connection. What would be most helpful for you today?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // General empathetic responses
    const generalResponses = [
      "I really appreciate you sharing that with me. It sounds like you're going through something significant. Can you tell me more about how this has been affecting you?",
      "Thank you for trusting me with your thoughts. I can sense this is important to you. What's been the most challenging part of this experience?",
      "I hear you, and I want you to know that your feelings and experiences are completely valid. What's been weighing on your mind the most?",
      "It takes real courage to open up about what you're going through. I'm here to listen without any judgment. How long have you been dealing with this?",
      "Your words matter, and so do your feelings. I can tell this is something you've been thinking about deeply. What would feel most supportive right now?",
      "I'm glad you felt comfortable enough to share this with me. Sometimes just putting our thoughts into words can help. What's been your biggest concern lately?"
    ];
    
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  };

  // Main response generation function
  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      // Try Ollama first if selected
      if (currentModel === 'ollama') {
        const isOllamaAvailable = await checkOllamaStatus();
        if (isOllamaAvailable) {
          return await generateOllamaResponse(userMessage);
        } else {
          console.log('Ollama not available, falling back...');
          setCurrentModel('huggingface');
        }
      }

      // Try Hugging Face if selected or Ollama failed
      if (currentModel === 'huggingface') {
        return await generateHuggingFaceResponse(userMessage);
      }

      // Fallback to local responses
      return generateEmpathethicFallback(userMessage);

    } catch (error) {
      console.error('AI model error, using local fallback:', error);
      return generateEmpathethicFallback(userMessage);
    }
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
    
    // Update conversation history
    setConversationHistory(prev => [
      ...prev.slice(-10), // Keep last 10 exchanges
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
      const delay = Math.max(1000, Math.min(botResponseText.length * 50, 3000));
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
          text: "I'm having some technical difficulties right now, but I'm still here to listen. Could you try sharing that again?",
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

  const getModelDisplayName = () => {
    switch (currentModel) {
      case 'ollama': return 'Ollama (Local)';
      case 'huggingface': return 'Hugging Face';
      case 'local': return 'Local Responses';
      default: return 'AI Assistant';
    }
  };

  const getModelStatus = () => {
    switch (currentModel) {
      case 'ollama': return '🏠 Running locally with Ollama';
      case 'huggingface': return '🤗 Using Hugging Face free inference';
      case 'local': return '💭 Using empathetic local responses';
      default: return '';
    }
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
                <p className="text-blue-100 text-sm">{getModelDisplayName()}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {/* Model Selector */}
            <select
              value={currentModel}
              onChange={(e) => setCurrentModel(e.target.value as 'ollama' | 'huggingface' | 'local')}
              className="bg-white/20 text-white rounded-lg px-3 py-1 text-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="local" className="text-gray-800">Local Responses</option>
              <option value="huggingface" className="text-gray-800">Hugging Face</option>
              <option value="ollama" className="text-gray-800">Ollama</option>
            </select>
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
          
          {/* Model Status */}
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-600 bg-gray-50 rounded-full px-3 py-1 inline-block">
              {getModelStatus()}
            </p>
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