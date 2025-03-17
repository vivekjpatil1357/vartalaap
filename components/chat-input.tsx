"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Paperclip, Send, Smile } from "lucide-react";
import { FormEvent, useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 bg-zinc-900 border-t border-zinc-800 w-full flex-shrink-0"
    >
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="text-zinc-400 hover:text-zinc-300 hidden sm:flex"
      >
        <Paperclip className="h-5 w-5" />
      </Button>
      <div className="relative flex-1">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="bg-zinc-800 border-zinc-700 focus-visible:ring-zinc-700 text-white"
        />
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-300 hidden sm:flex"
        >
          <Smile className="h-5 w-5" />
        </Button>
      </div>
      <Button
        type={message.trim() ? "submit" : "button"}
        size="icon"
        className={message.trim() ? "bg-emerald-600 hover:bg-emerald-700" : "bg-zinc-700 hover:bg-zinc-600"}
      >
        {message.trim() ? (
          <Send className="h-5 w-5" />
        ) : (
          <Mic className="h-5 w-5" />
        )}
      </Button>
    </form>
  );
} 