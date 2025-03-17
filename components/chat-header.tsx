"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/lib/data";
import { MoreVertical, Phone, Search, Video } from "lucide-react";
import { Button } from "./ui/button";

interface ChatHeaderProps {
  user: User;
}

export function ChatHeader({ user }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-zinc-900 border-b border-zinc-800 w-full flex-shrink-0">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-medium text-sm">{user.name}</h2>
          <p className="text-xs text-zinc-400">
            {user.status === "online"
              ? "Online"
              : user.lastSeen
              ? `Last seen ${user.lastSeen}`
              : "Offline"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-zinc-300 hidden sm:flex">
          <Phone className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-zinc-300 hidden sm:flex">
          <Video className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-zinc-300 hidden sm:flex">
          <Search className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-zinc-300">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
} 