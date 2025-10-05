import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-end">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ketik pesan Anda di sini..."
        className="min-h-[60px] max-h-[120px] resize-none rounded-2xl border-2 focus:ring-2 focus:ring-primary/20"
        disabled={disabled}
      />
      <Button
        type="submit"
        size="icon"
        className="h-[60px] w-[60px] rounded-2xl bg-gradient-to-br from-primary to-secondary hover:opacity-90 shadow-lg"
        style={{ boxShadow: 'var(--shadow-glow)' }}
        disabled={disabled || !message.trim()}
      >
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default ChatInput;
