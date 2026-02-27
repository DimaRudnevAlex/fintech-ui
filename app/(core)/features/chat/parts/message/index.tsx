import { motion } from 'framer-motion';

import { MessageProps } from './model/types';

import styles from './styles.module.scss';

const Message: React.FC<MessageProps> = ({ message }) => {
  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${styles.message} ${
        message.sender === 'user' ? styles.user : styles.bot
      }`}
    >
      <div className={styles.text}>{message.text}</div>
      <div className={styles.time}>{time}</div>
    </motion.div>
  );
};

export default Message;
