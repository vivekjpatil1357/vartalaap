"use client";

import { Message, User, messages } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { ChatMessage } from "./chat-message";
import { ScrollArea } from "./ui/scroll-area";

interface ChatWindowProps {
  selectedUser: User | null;
}

export function ChatWindow({ selectedUser }: ChatWindowProps) {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const shouldScrollToBottom = useRef(true);

  useEffect(() => {
    if (selectedUser) {
      setChatMessages(messages[selectedUser.id] || []);
      shouldScrollToBottom.current = true;
    } else {
      setChatMessages([]);
    }
  }, [selectedUser]);

  useEffect(() => {
    // Auto-scroll to bottom when messages change
    if (shouldScrollToBottom.current && viewportRef.current) {
      setTimeout(() => {
        if (viewportRef.current) {
          viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [chatMessages]);

  const handleSendMessage = (text: string) => {
    if (!selectedUser) return;

    const newMessage: Message = {
      id: `m${Date.now()}`,
      senderId: "current",
      receiverId: selectedUser.id,
      text,
      timestamp: new Date().toISOString(),
      status: "sent",
    };

    shouldScrollToBottom.current = true;
    setChatMessages((prev) => [...prev, newMessage]);
  };

  const handleScroll = () => {
    if (viewportRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = viewportRef.current;
      const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 10;
      shouldScrollToBottom.current = isAtBottom;
    }
  };

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center h-full w-full bg-zinc-950 text-zinc-400">
        <p>Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full bg-zinc-950">
      <ChatHeader user={selectedUser} />
      <div className="flex-1 overflow-hidden">
        <ScrollArea 
          ref={scrollAreaRef}
          viewportRef={viewportRef}
          onScroll={handleScroll}
          className="h-full"
          type="always"
          scrollHideDelay={0}
        >
          <div className="flex flex-col p-4 pb-6 min-h-full">
            {chatMessages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                isCurrentUser={message.senderId === "current"}
              />
            ))}
            <div className="h-4" /> {/* Extra space at the bottom for better scrolling */}
          </div>
        </ScrollArea>
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
} 