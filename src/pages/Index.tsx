import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! 👋 Saya Lovable AI Assistant. Saya di sini untuk membantu Anda. Ada yang bisa saya bantu hari ini?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (message: string) => {
    // Add user message
    const userMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Get conversation history (excluding the greeting message)
      const conversationHistory = messages.slice(1).map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      console.log("Calling Gemini chat function...");
      const { data, error } = await supabase.functions.invoke("gemini-chat", {
        body: { 
          message,
          conversationHistory 
        },
      });

      if (error) {
        throw error;
      }

      console.log("Response received:", data);

      // Add AI response
      const aiMessage: Message = {
        role: "assistant",
        content: data.reply || "Maaf, saya tidak bisa memproses permintaan Anda saat ini.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Gagal mengirim pesan. Silakan coba lagi.",
        variant: "destructive",
      });
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, terjadi kesalahan. Silakan coba lagi dalam beberapa saat.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Lovable AI Assistant
              </h1>
              <p className="text-xs text-muted-foreground">Powered by Gemini AI</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-card/30 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
          {/* Messages */}
          <div className="h-[calc(100vh-280px)] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} role={msg.role} content={msg.content} />
            ))}
            {isTyping && <ChatMessage role="assistant" content="" isTyping />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t bg-card/50 backdrop-blur-sm p-4">
            <ChatInput onSend={handleSendMessage} disabled={isTyping} />
          </div>
        </div>

        {/* Footer Info */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Chat dengan AI yang profesional dan ramah • Dibuat dengan ❤️ menggunakan Lovable
        </p>
      </main>
    </div>
  );
};

export default Index;
