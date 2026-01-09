'use client';

import { createContext, useCallback, useContext, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { NotificationItem } from '@/(shared)/components/notification';
import { Notification } from '@/(shared)/components/notification/model/types';

import styles from './styles.module.scss';

const NotificationContext = createContext<
  null | ((data: Omit<Notification, 'id'>) => void)
>(null);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = useCallback((data: Omit<Notification, 'id'>) => {
    const id = Date.now();

    setNotifications((prev) => [...prev, { id, ...data }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  }, []);

  return (
    <NotificationContext.Provider value={notify}>
      {children}

      <div className={styles.container}>
        <AnimatePresence>
          {notifications.map((n, index) => (
            <NotificationItem
              key={n.id}
              notification={n}
              index={index}
              onClose={() =>
                setNotifications((prev) =>
                  prev.filter((item) => item.id !== n.id),
                )
              }
            />
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
}

export const useNotification = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );
  }
  return ctx;
};
