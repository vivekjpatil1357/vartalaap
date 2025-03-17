"use client";

import { User, users } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { ChatWindow } from "./chat-window";
import { Sidebar } from "./sidebar";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Chat() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [sidebarWidth, setSidebarWidth] = useState(350);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const resizeRef = useRef<HTMLDivElement>(null);
  const minWidth = 280;
  const maxWidth = 480;

  // Handle resize logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const newWidth = e.clientX;
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const startResizing = () => {
    setIsResizing(true);
  };

  // Close mobile sidebar when a user is selected
  useEffect(() => {
    if (selectedUser && isMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  }, [selectedUser, isMobileSidebarOpen]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-950 text-white">
      {/* Mobile sidebar toggle button */}
      <div className="md:hidden absolute top-3 left-3 z-20">
        <Button 
          size="icon" 
          variant="ghost" 
          className="text-zinc-400 hover:text-zinc-300 bg-zinc-900/50"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        >
          {isMobileSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile sidebar */}
      <div 
        className={`md:hidden fixed inset-0 bg-zinc-950/80 z-10 transition-opacity duration-300 ${
          isMobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileSidebarOpen(false)}
      />
      
      {/* Sidebar - desktop and mobile */}
      <div 
        className={`md:relative fixed inset-y-0 left-0 z-10 md:z-0 transition-transform duration-300 md:translate-x-0 ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: `${sidebarWidth}px` }}
      >
        <Sidebar
          selectedUserId={selectedUser?.id || null}
          onSelectUser={setSelectedUser}
        />
      </div>
      
      {/* Resize handle - desktop only */}
      <div 
        ref={resizeRef}
        className="w-1 h-full bg-zinc-800 hover:bg-emerald-600 cursor-ew-resize flex-shrink-0 active:bg-emerald-500 transition-colors hidden md:block"
        onMouseDown={startResizing}
      />
      
      {/* Chat window */}
      <div className="flex-1 h-full overflow-hidden">
        <ChatWindow selectedUser={selectedUser} />
      </div>
    </div>
  );
} 