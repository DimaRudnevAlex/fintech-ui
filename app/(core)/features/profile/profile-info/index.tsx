import { FileText, MapPin, Phone, ShieldCheck, User } from 'lucide-react';

import { CreateUserReqDto } from '@/(shared)/api/services/user/create-user';

import styles from './styles.module.scss';

type SectionProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}>{icon}</div>
        <h3>{title}</h3>
      </div>

      <div className={styles.grid}>{children}</div>
    </section>
  );
};

type InfoItemProps = {
  label: string;
  value?: string | null;
};

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <div className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value || 'Не указано'}</span>
    </div>
  );
};

const ProfileInfo: React.FC<CreateUserReqDto> = ({
  user_birth_info,
  user_names,
  user_identity_document,
  user_type,
  user_tax_info,
  user_contacts,
  user_address,
}) => {
  return (
    <div className={styles.wrapper}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.avatar}>
          {user_names.full_name_native?.slice(0, 2).toUpperCase()}
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroTop}>
            <div>
              <h1>{user_names.full_name_native}</h1>
              <p>{user_type}</p>
            </div>

            <div className={styles.verified}>
              <ShieldCheck size={16} />
              Верифицирован
            </div>
          </div>
        </div>
      </div>

      {/* PERSONAL */}
      <Section title="Личные данные" icon={<User size={18} />}>
        <InfoItem label="Дата рождения" value={user_birth_info.birth_date} />

        <InfoItem label="Место рождения" value={user_birth_info.birth_place} />

        <InfoItem
          label="Страна проживания"
          value={user_tax_info.residence_country}
        />
      </Section>

      {/* DOCUMENT */}
      <Section
        title="Документ, удостоверяющий личность"
        icon={<FileText size={18} />}
      >
        <InfoItem
          label="Тип документа"
          value={user_identity_document.document_type}
        />

        <InfoItem
          label="Номер документа"
          value={user_identity_document.document_number}
        />

        <InfoItem
          label="Страна выдачи"
          value={user_identity_document.issuing_country}
        />

        <InfoItem
          label="Срок действия"
          value={user_identity_document.expiry_date}
        />
      </Section>

      {/* CONTACTS */}
      <Section title="Контактные данные" icon={<Phone size={18} />}>
        <InfoItem label="Телефон" value={user_contacts.phone} />

        <InfoItem label="Мессенджер" value={user_contacts.messenger_type} />

        <InfoItem label="Доп. email" value={user_contacts.additional_email} />
      </Section>

      {/* ADDRESS */}
      <Section title="Адрес" icon={<MapPin size={18} />}>
        <InfoItem label="Страна" value={user_address.country_code} />

        <InfoItem label="Город" value={user_address.city} />

        <InfoItem label="Почтовый индекс" value={user_address.postal_code} />

        <InfoItem label="Адрес" value={user_address.street_address} />

        <InfoItem label="Регион / штат" value={user_address.state_region} />
      </Section>
    </div>
  );
};

export default ProfileInfo;
