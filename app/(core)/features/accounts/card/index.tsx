'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { useScramble } from 'use-scramble';

import { AccountCardProps } from './model/types';

import styles from './styles.module.scss';

const AccountCard: React.FC<AccountCardProps> = ({
  accountNumber,
  accountName,
  income,
  expense,
  balance,
}) => {
  const [revealed, setRevealed] = useState(false);

  const maskedNumber = '•••• •••• •••• ' + accountNumber.slice(-4);

  const { ref, replay } = useScramble({
    text: revealed ? accountNumber : maskedNumber,
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

  return (
    <motion.div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{accountName}</span>

        <button className={styles.accountNumber} onClick={handleClick}>
          <span ref={ref} />
        </button>
      </div>

      <div className={styles.balance}>{balance}</div>

      <div className={styles.stats}>
        <div className={styles.income}>
          <span>Доходы</span>
          <strong>{income}</strong>
        </div>

        <div className={styles.expense}>
          <span>Расходы</span>
          <strong>{expense}</strong>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountCard;
