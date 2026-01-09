'use client';

import { motion } from 'framer-motion';
import { CircleAlert, CircleCheck, CircleX } from 'lucide-react';

import { Notification } from '@/(shared)/components/notification/model/types';

import styles from './styles.module.scss';

const icons = {
  success: <CircleCheck color={'var(--colors--primary--400)'} />,
  error: <CircleX color={'var(--color-red-alarm)'} />,
  warning: <CircleAlert color={'var(--colors--primary--300)'} />,
};

export function NotificationItem({
  notification,
  index,
  onClose,
}: {
  notification: Notification;
  index: number;
  onClose: () => void;
}) {
  const type = notification.type || 'success';
  const scale = 1 - index * 0.05;
  const y = index * 10;
  const opacity = 1 - index * 0.15;

  return (
    <motion.div
      layout
      style={{ scale, y, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 120) onClose();
      }}
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.9 }}
      transition={{
        layout: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className={styles.notification}
    >
      <div className={styles.header}>
        <div className={styles.icon}>{icons[type]}</div>

        <div>
          <div className={styles.title}>{notification.title}</div>
          {notification.description && (
            <div className={styles.description}>{notification.description}</div>
          )}
        </div>

        <button className={styles.close} onClick={onClose}>
          ✕
        </button>
      </div>

      <div className={styles.progress}>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 4, ease: 'linear' }}
          className={`${styles.progressInner} ${styles[type]}`}
        />
      </div>
    </motion.div>
  );
}
