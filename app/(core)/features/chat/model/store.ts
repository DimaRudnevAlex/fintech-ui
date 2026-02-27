import { nanoid } from 'nanoid';
import { create } from 'zustand/react';

import { Chat, ChatStore } from './types';

export const useChatStore = create<ChatStore>((set, get) => ({
  chats: [],
  activeChatId: null,
  addMessage: (chatId, message) => {
    set({
      chats: get().chats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat,
      ),
    });
  },
  createChat: (initialMessage) => {
    const id = nanoid();
    const title = initialMessage.text.split(' ').slice(0, 3).join(' ');
    const newChat: Chat = { id, title, messages: [initialMessage] };
    set({
      chats: [newChat, ...get().chats],
      activeChatId: id,
    });
  },
  setActiveChat: (chatId) => set({ activeChatId: chatId }),

  addChat: () => set({ activeChatId: null }),
}));
