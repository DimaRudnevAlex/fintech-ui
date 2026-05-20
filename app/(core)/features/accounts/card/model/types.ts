export type AccountCardProps = {
  account_number?: string;
  currency?: string;
  balance?: string;
  frozen_balance?: string;
  status?: 'active' | 'inactive' | string;
  account_type?: string;
  is_default?: boolean;
  wallet_address?: string;
};
