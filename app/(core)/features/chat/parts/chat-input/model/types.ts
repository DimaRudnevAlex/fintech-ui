import { Message } from '@/(core)/features/chat/model/types';

export type ChatInputProps = {
  activeChatId: string | null;
  addMessage: (chatId: string, message: Message) => void;
  createChat: (initialMessage: Message) => void;
};
