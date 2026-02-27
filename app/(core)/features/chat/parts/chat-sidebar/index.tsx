import { Plus } from 'lucide-react';

import { ChatSidebarProps } from './model/types';

import styles from './styles.module.scss';

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chats,
  setActiveChat,
  activeChatId,
  addChat,
}) => {
  return (
    <aside className={styles.root}>
      <div className={styles.header}>
        <span className={styles.title}>Чаты</span>
        <button
          className={styles.createButton}
          aria-label="Создать новый чат"
          onClick={addChat}
        >
          <Plus size={18} />
        </button>
      </div>

      <div className={styles.list}>
        {chats.map((chat) => {
          const isActive = activeChatId === chat.id;

          return (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`${styles.chatItem} ${isActive ? styles.active : ''}`}
            >
              <span className={styles.chatTitle}>{chat.title}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default ChatSidebar;
