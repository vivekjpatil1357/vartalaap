export interface User {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "away";
  lastSeen?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
  status: "sent" | "delivered" | "read";
}

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://github.com/shadcn.png",
    status: "online",
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "https://ui.shadcn.com/avatars/02.png",
    status: "offline",
    lastSeen: "2 hours ago",
  },
  {
    id: "3",
    name: "Alex Johnson",
    avatar: "https://ui.shadcn.com/avatars/03.png",
    status: "online",
  },
  {
    id: "4",
    name: "Sarah Williams",
    avatar: "https://ui.shadcn.com/avatars/04.png",
    status: "away",
    lastSeen: "5 minutes ago",
  },
  {
    id: "5",
    name: "Michael Brown",
    avatar: "https://ui.shadcn.com/avatars/05.png",
    status: "online",
  },
  {
    id: "6",
    name: "Emily Davis",
    avatar: "https://ui.shadcn.com/avatars/06.png",
    status: "offline",
    lastSeen: "1 day ago",
  },
  {
    id: "7",
    name: "David Wilson",
    avatar: "https://ui.shadcn.com/avatars/07.png",
    status: "online",
  },
];

export const messages: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      senderId: "1",
      receiverId: "current",
      text: "Hey, how are you?",
      timestamp: "2023-06-01T10:30:00Z",
      status: "read",
    },
    {
      id: "m2",
      senderId: "current",
      receiverId: "1",
      text: "I'm good, thanks! How about you?",
      timestamp: "2023-06-01T10:32:00Z",
      status: "read",
    },
    {
      id: "m3",
      senderId: "1",
      receiverId: "current",
      text: "Doing well. Want to grab coffee later?",
      timestamp: "2023-06-01T10:33:00Z",
      status: "read",
    },
    {
      id: "m4",
      senderId: "current",
      receiverId: "1",
      text: "Sure, that sounds great!",
      timestamp: "2023-06-01T10:35:00Z",
      status: "delivered",
    },
    {
      id: "m5",
      senderId: "1",
      receiverId: "current",
      text: "Perfect! How about 3pm at the usual place?",
      timestamp: "2023-06-01T10:36:00Z",
      status: "read",
    },
    {
      id: "m6",
      senderId: "current",
      receiverId: "1",
      text: "Works for me. I'll be there.",
      timestamp: "2023-06-01T10:37:00Z",
      status: "read",
    },
    {
      id: "m7",
      senderId: "1",
      receiverId: "current",
      text: "Great! By the way, did you finish that project we were working on?",
      timestamp: "2023-06-01T10:38:00Z",
      status: "read",
    },
    {
      id: "m8",
      senderId: "current",
      receiverId: "1",
      text: "Almost done. Just need to fix a few bugs and it should be ready by tomorrow.",
      timestamp: "2023-06-01T10:39:00Z",
      status: "read",
    },
    {
      id: "m9",
      senderId: "1",
      receiverId: "current",
      text: "Sounds good. Let me know if you need any help with it.",
      timestamp: "2023-06-01T10:40:00Z",
      status: "read",
    },
    {
      id: "m10",
      senderId: "current",
      receiverId: "1",
      text: "Will do, thanks for offering!",
      timestamp: "2023-06-01T10:41:00Z",
      status: "read",
    },
    {
      id: "m11",
      senderId: "1",
      receiverId: "current",
      text: "No problem. Oh, and don't forget about the team meeting tomorrow at 10am.",
      timestamp: "2023-06-01T10:42:00Z",
      status: "read",
    },
    {
      id: "m12",
      senderId: "current",
      receiverId: "1",
      text: "Thanks for the reminder. I've added it to my calendar.",
      timestamp: "2023-06-01T10:43:00Z",
      status: "read",
    },
    {
      id: "m13",
      senderId: "1",
      receiverId: "current",
      text: "Perfect! See you at 3pm then.",
      timestamp: "2023-06-01T10:44:00Z",
      status: "read",
    },
    {
      id: "m14",
      senderId: "current",
      receiverId: "1",
      text: "Looking forward to it!",
      timestamp: "2023-06-01T10:45:00Z",
      status: "delivered",
    },
  ],
  "2": [
    {
      id: "m5",
      senderId: "2",
      receiverId: "current",
      text: "Did you finish the project?",
      timestamp: "2023-06-02T14:20:00Z",
      status: "read",
    },
    {
      id: "m6",
      senderId: "current",
      receiverId: "2",
      text: "Almost done, just need to fix a few bugs.",
      timestamp: "2023-06-02T14:25:00Z",
      status: "read",
    },
    {
      id: "m7",
      senderId: "2",
      receiverId: "current",
      text: "Great! Let me know when it's ready for review.",
      timestamp: "2023-06-02T14:30:00Z",
      status: "read",
    },
  ],
  "3": [
    {
      id: "m8",
      senderId: "current",
      receiverId: "3",
      text: "Hey Alex, are you coming to the meeting?",
      timestamp: "2023-06-03T09:10:00Z",
      status: "read",
    },
    {
      id: "m9",
      senderId: "3",
      receiverId: "current",
      text: "Yes, I'll be there in 5 minutes.",
      timestamp: "2023-06-03T09:12:00Z",
      status: "read",
    },
  ],
};

export function getLastMessage(userId: string): Message | undefined {
  const userMessages = messages[userId];
  if (!userMessages || userMessages.length === 0) return undefined;
  return userMessages[userMessages.length - 1];
} 