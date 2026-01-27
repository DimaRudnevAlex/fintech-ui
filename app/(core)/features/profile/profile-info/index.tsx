import { useTranslations } from 'next-intl';

import InfoRow from './parts/info-row';

import styles from './styles.module.scss';

const ProfileInfo = () => {
  const t = useTranslations('profile.info');
  return (
    <div className={styles.wrapper}>
      <InfoRow label={t('fullName')} value={'Вася Пупкин'} />
      <InfoRow label={t('phone')} value={'+89094112298'} />
      <InfoRow label={t('email')} value={'foo123@gmail.com'} />
      <InfoRow label={t('passportData')} value={'12 34 5020 1234'} />
      <InfoRow
        label={t('registrationAddress')}
        value={'Улица Пушкина, дом Колотушкина'}
      />
    </div>
  );
};

export default ProfileInfo;
