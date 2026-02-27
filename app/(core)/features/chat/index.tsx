'use client';

import { useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';

import ScrollArea from '@/(shared)/components/scroll-area';

import { useChatStore } from './model/store';
import ChatEmptyState from './parts/chat-empty-state';
import ChatHistory from './parts/chat-history';
import ChatInput from './parts/chat-input';
import ChatSidebar from './parts/chat-sidebar';

import styles from './styles.module.scss';

const Chat: React.FC = () => {
  const {
    chats,
    activeChatId,
    addMessage,
    createChat,
    setActiveChat,
    addChat,
  } = useChatStore();

  const chat = useMemo(
    () => chats.find((c) => c.id === activeChatId),
    [activeChatId, chats],
  );

  const messages = chat?.messages ?? [];
  const isEmpty = messages.length === 0;

  return (
    <div className={styles.root}>
      <ChatSidebar
        chats={chats}
        activeChatId={activeChatId}
        setActiveChat={setActiveChat}
        addChat={addChat}
      />

      <main className={styles.main}>
        <ScrollArea>
          <div className={styles.content}>
            <AnimatePresence mode="wait">
              {isEmpty ? (
                <ChatEmptyState key="empty" />
              ) : (
                <ChatHistory key="history" messages={messages} />
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>
        <ChatInput
          activeChatId={activeChatId}
          addMessage={addMessage}
          createChat={createChat}
        />
      </main>
    </div>
  );
};

export default Chat;
