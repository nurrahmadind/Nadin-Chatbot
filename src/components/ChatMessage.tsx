import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Bot } from "lucide-react";
import aiAvatar from "@/assets/ai-avatar.png";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
}

const ChatMessage = ({ role, content, isTyping = false }: ChatMessageProps) => {
  const isAI = role === "assistant";

  return (
    <div
      className={`flex gap-3 mb-4 animate-in slide-in-from-bottom-2 ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      {isAI && (
        <Avatar className="w-8 h-8 ring-2 ring-primary/20">
          <AvatarImage src={aiAvatar} alt="AI Assistant" />
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary">
            <Bot className="w-4 h-4 text-primary-foreground" />
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
          isAI
            ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg"
            : "bg-muted text-foreground"
        }`}
        style={isAI ? { boxShadow: 'var(--shadow-glow)' } : {}}
      >
        {isTyping ? (
          <div className="flex gap-1 items-center py-1">
            <span className="w-2 h-2 rounded-full bg-primary-foreground/70 animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 rounded-full bg-primary-foreground/70 animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 rounded-full bg-primary-foreground/70 animate-bounce"></span>
          </div>
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        )}
      </div>

      {!isAI && (
        <Avatar className="w-8 h-8 ring-2 ring-muted">
          <AvatarFallback className="bg-gradient-to-br from-accent to-primary">
            <User className="w-4 h-4 text-primary-foreground" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
