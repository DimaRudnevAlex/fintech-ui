import { Chat } from '@/(core)/features/chat/model/types';

export type ChatSidebarProps = {
  chats: Chat[];
  activeChatId: string | null;
  setActiveChat: (chatId: string) => void;
  addChat: () => void;
};
