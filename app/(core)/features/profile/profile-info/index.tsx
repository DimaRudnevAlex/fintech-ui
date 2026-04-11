import { CreateUserReqDto } from '@/(shared)/api/services/user/create-user';

import InfoRow from '@/(core)/features/profile/profile-info/parts/info-row';

import styles from './styles.module.scss';

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
      <InfoRow label={'Тип пользователя'} value={user_type} />
      <InfoRow label={'Полное имя'} value={user_names.full_name_native} />
      <InfoRow label={'Дата рождения'} value={user_birth_info.birth_date} />
      <InfoRow label={'Место рождения'} value={user_birth_info.birth_place} />
      <InfoRow
        label={'Тип документа'}
        value={user_identity_document.document_type}
      />
      <InfoRow
        label={'Номер документа'}
        value={user_identity_document.document_number}
      />
      <InfoRow
        label={'Дата истечения срока действия'}
        value={user_identity_document.expiry_date}
      />
      <InfoRow
        label={'Страна выдачи'}
        value={user_identity_document.issuing_country}
      />
      <InfoRow label={'Мессенджер'} value={user_contacts.messenger_type} />
      <InfoRow label={'Телефон'} value={user_contacts.phone} />
      <InfoRow
        label={'Дополнительный адрес электронной почты'}
        value={user_contacts.additional_email}
      />
      <InfoRow label={'Город'} value={user_address.city} />
      <InfoRow label={'Адрес'} value={user_address.street_address} />
      <InfoRow label={'Код страны'} value={user_address.country_code} />
      <InfoRow label={'Почтовый индекс'} value={user_address.postal_code} />
      <InfoRow
        label={'Государственный регион'}
        value={user_address.state_region ?? 'Не указан'}
      />
      <InfoRow
        label={'Страна проживания'}
        value={user_tax_info.residence_country}
      />
    </div>
  );
};

export default ProfileInfo;
