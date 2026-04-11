'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { AnimatePresence, motion } from 'framer-motion';

import CreateUser from '@/(core)/features/profile/create-user';
import ProfileInfo from '@/(core)/features/profile/profile-info';
import ProfileSafety from '@/(core)/features/profile/profile-safety';
import Tabs from '@/(core)/features/tabs';

import { useAuthStore } from '@/(entities)/auth/model/provider';

import styles from './styles.module.scss';

const MOCK_TABS = [
  { id: 'info', label: 'info' },
  { id: 'safety', label: 'safety' },
];

const contentVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Profile: React.FC = () => {
  const t = useTranslations('profile.tabs');
  const [activeTab, setActiveTab] = useState('info');
  const isProfileComplete = useAuthStore((state) => state.isProfileComplete);
  const userData = useAuthStore((state) => state.userData);
  const tabs = useMemo(
    () => MOCK_TABS.map((tab) => ({ ...tab, label: t(tab.label) })),
    [t],
  );
  if (isProfileComplete || !userData) {
    return <CreateUser />;
  }
  return (
    <>
      <Tabs
        tabs={tabs}
        value={activeTab}
        onChange={setActiveTab}
        className={styles.tabs}
        layoutId={'profile-tabs'}
      />
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          {activeTab === 'info' && (
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProfileInfo {...userData} />
            </motion.div>
          )}

          {activeTab === 'safety' && (
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProfileSafety />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Profile;
