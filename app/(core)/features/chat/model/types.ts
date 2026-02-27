export type Message = {
  id: string;
  text: string;
  timestamp: number;
  sender: 'user' | 'bot';
};

export type Chat = {
  id: string;
  title: string;
  messages: Message[];
};

type ChatStoreState = {
  chats: Chat[];
  activeChatId: string | null;
};

type ChatStoreActions = {
  addMessage: (chatId: string, message: Message) => void;
  createChat: (initialMessage: Message) => void;
  setActiveChat: (chatId: string) => void;
  addChat: () => void;
};

export type ChatStore = ChatStoreState & ChatStoreActions;
