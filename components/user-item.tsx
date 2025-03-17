"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, getLastMessage } from "@/lib/data";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface UserItemProps {
  user: User;
  isSelected: boolean;
  onClick: () => void;
}

export function UserItem({ user, isSelected, onClick }: UserItemProps) {
  const lastMessage = getLastMessage(user.id);
  
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
        isSelected
          ? "bg-zinc-800/50"
          : "hover:bg-zinc-800/30"
      )}
      onClick={onClick}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        {user.status === "online" && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950"></span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="font-medium text-sm truncate">{user.name}</p>
          {lastMessage && (
            <span className="text-xs text-zinc-400">
              {format(new Date(lastMessage.timestamp), "HH:mm")}
            </span>
          )}
        </div>
        <p className="text-xs text-zinc-400 truncate">
          {lastMessage
            ? lastMessage.text
            : user.status === "online"
            ? "Online"
            : user.lastSeen
            ? `Last seen ${user.lastSeen}`
            : "Offline"}
        </p>
      </div>
    </div>
  );
} 