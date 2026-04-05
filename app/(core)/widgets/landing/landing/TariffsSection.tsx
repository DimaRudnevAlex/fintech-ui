import { Check } from 'lucide-react';

import { PillButton } from '@/(core)/widgets/landing/ui/PillButton';

import styles from './TariffsSection.module.scss';

const plans = [
  {
    name: 'Standard',
    price: '0 $/ месяц',
    items: [
      'Если просто нужны переводы',
      'Международные переводы',
      'Базовые лимиты',
      'Поддержка в рабочие часы',
    ],
  },
  {
    name: 'PRO',
    price: '15 $/ месяц',
    items: [
      'Для активных пользователей',
      'Повышенные лимиты',
      'AI Concierge',
      'AI Advisor for Business',
      'Приоритетная линия',
    ],
  },
];

export function TariffsSection() {
  return (
    <section className={styles.section} aria-labelledby="tariffs-title">
      <div className={styles.inner}>
        <h2 id="tariffs-title" className={styles.heading}>
          Тарифы
        </h2>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <article key={plan.name} className={styles.card}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <ul className={styles.list}>
                {plan.items.map((item) => (
                  <li key={item} className={styles.item}>
                    <span className={styles.check} aria-hidden>
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.price}>{plan.price}</p>
              <PillButton className={styles.cta}>Попробовать</PillButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
