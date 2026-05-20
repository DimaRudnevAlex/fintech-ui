'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { useScramble } from 'use-scramble';

import { AccountCardProps } from './model/types';

import styles from './styles.module.scss';

interface Props extends AccountCardProps {
  isLoading?: boolean;
}

const AccountCard: React.FC<Props> = ({
  account_number,
  currency,
  balance,
  frozen_balance,
  status,
  account_type,
  is_default,
  wallet_address,
  isLoading = false,
}) => {
  const [revealed, setRevealed] = useState(false);

  const displayFull = wallet_address ? wallet_address : account_number;

  const maskedNumber = wallet_address
    ? wallet_address.slice(0, 6) + '•••••••••••' + wallet_address.slice(-4)
    : '•••• •••• •••• ' + account_number?.slice(-4);

  const { ref, replay } = useScramble({
    text: revealed ? displayFull : maskedNumber,
    playOnMount: false,
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 6,
    chance: 0.7,
    range: [48, 57],
  });

  const handleClick = () => {
    setRevealed((v) => !v);
    replay();
  };

  const formatBalance = (raw: string) => {
    const trimmed = raw.replace(/^-?0+/, '') || '0';
    const padded = trimmed.padStart(9, '0');
    const int = padded.slice(0, -8) || '0';
    const dec = padded.slice(-8, -6);
    return `${int}.${dec}`;
  };

  const isNegative = (raw: string) => raw.trim().startsWith('-');

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      aria-busy={isLoading}
    >
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          {isLoading ? (
            <span className={`${styles.skeleton} ${styles.skeletonTitle}`} />
          ) : (
            <span className={styles.title}>
              {account_type?.toUpperCase()} · {currency}
            </span>
          )}

          {/* always rendered to hold height — skeleton or real badge */}
          {isLoading ? (
            <span className={`${styles.skeleton} ${styles.skeletonBadge}`} />
          ) : (
            <span
              className={styles.defaultBadge}
              aria-hidden={!is_default}
              style={{ visibility: is_default ? 'visible' : 'hidden' }}
            >
              По умолчанию
            </span>
          )}
        </div>

        <div className={styles.statusGroup}>
          {isLoading ? (
            <span className={`${styles.skeleton} ${styles.skeletonDot}`} />
          ) : (
            <span className={`${styles.status} ${styles[status ?? '']}`} />
          )}

          {isLoading ? (
            <span className={`${styles.skeleton} ${styles.skeletonNumber}`} />
          ) : (
            <button className={styles.accountNumber} onClick={handleClick}>
              <span ref={ref} />
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <span className={`${styles.skeleton} ${styles.skeletonBalance}`} />
      ) : (
        <div className={styles.balance}>
          {formatBalance(balance ?? '')}{' '}
          <span className={styles.currency}>{currency}</span>
        </div>
      )}

      <div className={styles.stats}>
        <div className={styles.income}>
          {isLoading ? (
            <>
              <span
                className={`${styles.skeleton} ${styles.skeletonStatLabel}`}
              />
              <span
                className={`${styles.skeleton} ${styles.skeletonStatValue}`}
              />
            </>
          ) : (
            <>
              <span>Статус</span>
              <strong
                style={{ color: status === 'active' ? '#4ade80' : '#f87171' }}
              >
                {status === 'active' ? 'Активен' : 'Неактивен'}
              </strong>
            </>
          )}
        </div>

        <div className={styles.expense}>
          {isLoading ? (
            <>
              <span
                className={`${styles.skeleton} ${styles.skeletonStatLabel}`}
              />
              <span
                className={`${styles.skeleton} ${styles.skeletonStatValue}`}
              />
            </>
          ) : (
            <>
              <span>Заморожено</span>
              <strong
                style={{
                  color: isNegative(frozen_balance ?? '') ? '#f87171' : '#aaa',
                }}
              >
                {formatBalance(frozen_balance ?? '')} {currency}
              </strong>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AccountCard;
