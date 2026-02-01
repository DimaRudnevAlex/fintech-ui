import { Account } from './types';

export const MOCK_ACCOUNTS: Account[] = [
  {
    label: '1',
    value: '1',
    meta: {
      accountNumber: '40817810099910004312',
      accountName: 'Основной счет',
      currency: 'EUR',
      balance: '€ 4 200.50',
      income: '+ € 1 500',
      expense: '- € 450',
    },
  },
  {
    label: '2',
    value: '2',
    meta: {
      accountNumber: '40817810099910004313',
      accountName: 'Сберегательный',
      currency: 'USD',
      balance: '$1 100.00',
      income: '+ $ 300',
      expense: '- $ 150',
    },
  },
  {
    label: '3',
    value: '3',
    meta: {
      accountNumber: '40817810099910004314',
      accountName: 'Запасной',
      currency: 'RUB',
      balance: '₽ 1 245.32',
      income: '+ ₽ 20',
      expense: '- ₽ 10',
    },
  },
];
