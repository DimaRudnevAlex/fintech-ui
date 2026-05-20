import Select from '@/(shared)/components/select';

import { SelectAccountsProps } from './model/type';

import styles from './styles.module.scss';

const SelectAccounts: React.FC<SelectAccountsProps> = ({
  options,
  onChange,
  placeholder,
  value,
  className,
}) => {
  const formatBalance = (raw: string) => {
    const trimmed = raw.replace(/^-?0+/, '') || '0';
    const padded = trimmed.padStart(9, '0');
    const int = padded.slice(0, -8) || '0';
    const dec = padded.slice(-8, -6);
    return `${int}.${dec}`;
  };

  return (
    <Select
      className={className}
      options={options}
      value={value!}
      onChange={onChange}
      renderOption={(account) => (
        <div className={styles.option}>
          <span>{account.meta.currency}</span>
          <span>{account.meta.account_number}</span>
          <strong>{formatBalance(account.meta.balance)}</strong>
        </div>
      )}
      renderValue={(account) => (
        <div className={styles.selected}>
          {account.meta.currency} • {formatBalance(account.meta.balance)}
        </div>
      )}
      placeholder={placeholder}
    />
  );
};

export default SelectAccounts;
