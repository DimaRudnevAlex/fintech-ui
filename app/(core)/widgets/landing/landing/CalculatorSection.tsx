'use client';

import { useState } from 'react';

import { Clock, Percent } from 'lucide-react';

import { PillButton } from '@/(core)/widgets/landing/ui/PillButton';

import styles from './CalculatorSection.module.scss';

const currencies = ['RUB', 'BTC', 'USD', 'EUR'];

export function CalculatorSection() {
  const [sendCurrency, setSendCurrency] = useState('RUB');
  const [recvCurrency, setRecvCurrency] = useState('BTC');

  return (
    <section
      id="calculator"
      className={styles.section}
      aria-labelledby="calc-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="calc-title" className={styles.title}>
            Прозрачный расчёт до отправки
          </h2>
          <p className={styles.subtitle}>
            Сравните в банках и увидите разницу сразу
          </p>
        </header>

        <div className={styles.panel}>
          <div className={styles.row}>
            <label className={styles.label} htmlFor="send-amount">
              Отправляете
            </label>
            <div className={styles.controls}>
              <select
                id="send-currency"
                className={styles.select}
                value={sendCurrency}
                onChange={(e) => setSendCurrency(e.target.value)}
                aria-label="Валюта отправки"
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <input
                id="send-amount"
                className={styles.input}
                defaultValue="1000000"
                inputMode="decimal"
                aria-label="Сумма отправки"
              />
            </div>
          </div>

          <div className={styles.row}>
            <label className={styles.label} htmlFor="recv-amount">
              Приходит
            </label>
            <div className={styles.controls}>
              <select
                id="recv-currency"
                className={styles.select}
                value={recvCurrency}
                onChange={(e) => setRecvCurrency(e.target.value)}
                aria-label="Валюта получения"
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <input
                id="recv-amount"
                className={styles.input}
                defaultValue="0,171"
                inputMode="decimal"
                readOnly
                aria-label="Сумма получения"
              />
            </div>
          </div>

          <ul className={styles.meta}>
            <li>
              <Clock size={18} className={styles.metaIcon} aria-hidden />
              <span>Сроки доставки: 5 минут</span>
            </li>
            <li>
              <Percent size={18} className={styles.metaIcon} aria-hidden />
              <span>Комиссия: 0%</span>
            </li>
          </ul>

          <PillButton className={styles.cta}>Начать перевод</PillButton>
        </div>
      </div>
    </section>
  );
}
