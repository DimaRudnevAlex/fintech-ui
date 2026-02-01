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
  return (
    <Select
      className={className}
      options={options}
      value={value!}
      onChange={onChange}
      renderOption={(account) => (
        <div className={styles.option}>
          <span>{account.meta.currency}</span>
          <span>{account.meta.accountName}</span>
          <strong>{account.meta.balance}</strong>
        </div>
      )}
      renderValue={(account) => (
        <div className={styles.selected}>
          {account.meta.currency} • {account.meta.balance}
        </div>
      )}
      placeholder={placeholder}
    />
  );
};

export default SelectAccounts;
