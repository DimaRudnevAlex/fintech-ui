import { useTranslations } from 'next-intl';

import SafetyRow from './parts/info-row';

import styles from './styles.module.scss';

const ProfileSafety: React.FC = () => {
  const t = useTranslations('profile.safety');

  return (
    <div className={styles.wrapper}>
      <SafetyRow
        label={t('passwordChange')}
        text={t('passwordChangeText')}
        action={t('change')}
      />
      <SafetyRow
        label={t('phoneChange')}
        text={t('phoneChangeText')}
        action={t('change')}
      />
    </div>
  );
};

export default ProfileSafety;
