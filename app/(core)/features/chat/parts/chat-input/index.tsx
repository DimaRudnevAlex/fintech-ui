'use client';

import { useState } from 'react';

import { nanoid } from 'nanoid';

import { ChatInputProps } from './model/types';

import styles from './styles.module.scss';

const ChatInput: React.FC<ChatInputProps> = ({
  createChat,
  activeChatId,
  addMessage,
}) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;

    const message = {
      id: nanoid(),
      text,
      timestamp: Date.now(),
      sender: 'user' as const,
    };

    if (activeChatId) addMessage(activeChatId, message);
    else createChat(message);

    setText('');
  };
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <textarea
          className={styles.textarea}
          rows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Введите сообщение..."
        />

        <button
          onClick={handleSend}
          className={styles.sendButton}
          disabled={!text.trim()}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
