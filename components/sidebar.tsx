"use client";

import { User, users } from "@/lib/data";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { UserItem } from "./user-item";

interface SidebarProps {
  selectedUserId: string | null;
  onSelectUser: (user: User) => void;
}

export function Sidebar({ selectedUserId, onSelectUser }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full w-full border-r border-zinc-800 bg-zinc-900 flex flex-col">
      <div className="p-3 border-b border-zinc-800 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input
            placeholder="Search or start new chat"
            className="pl-9 bg-zinc-800 border-zinc-700 focus-visible:ring-zinc-700 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1 h-full">
        <div className="p-2">
          {filteredUsers.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              isSelected={selectedUserId === user.id}
              onClick={() => onSelectUser(user)}
            />
          ))}
          {filteredUsers.length === 0 && (
            <p className="text-center text-zinc-400 py-4 text-sm">
              No users found
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
} 