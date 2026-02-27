'use client';

import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const ChatEmptyState: React.FC = () => {
  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className={styles.title}>Давайте начнем чат</h1>
      <p className={styles.subtitle}>
        Напишите сообщение, чтобы создать новый чат
      </p>
    </motion.div>
  );
};

export default ChatEmptyState;
