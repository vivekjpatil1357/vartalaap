"use client";

import { Message } from "@/lib/data";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CheckCheck } from "lucide-react";

interface ChatMessageProps {
  message: Message;
  isCurrentUser: boolean;
}

export function ChatMessage({ message, isCurrentUser }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex flex-col max-w-[70%] mb-2",
        isCurrentUser ? "self-end items-end" : "self-start items-start"
      )}
    >
      <div
        className={cn(
          "px-4 py-2 rounded-2xl text-sm",
          isCurrentUser
            ? "bg-emerald-600 text-white rounded-br-none"
            : "bg-zinc-800 text-white rounded-bl-none"
        )}
      >
        {message.text}
      </div>
      <div className="flex items-center gap-1 mt-1 text-xs text-zinc-400">
        <span>{format(new Date(message.timestamp), "HH:mm")}</span>
        {isCurrentUser && (
          <CheckCheck
            className={cn(
              "h-3 w-3",
              message.status === "read"
                ? "text-blue-500"
                : "text-zinc-400"
            )}
          />
        )}
      </div>
    </div>
  );
} 