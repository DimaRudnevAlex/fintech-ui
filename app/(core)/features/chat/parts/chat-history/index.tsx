import { motion } from 'framer-motion';

import Message from '../message';

import { ChatHistoryProps } from './model/types';

import styles from './styles.module.scss';

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </motion.div>
  );
};

export default ChatHistory;
