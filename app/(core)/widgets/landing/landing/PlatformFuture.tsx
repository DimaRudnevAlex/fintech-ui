'use client';

import { useState } from 'react';

import { ArrowUpRight, Shield } from 'lucide-react';

import styles from './PlatformFuture.module.scss';

const tabs = [
  { id: 'account', label: 'Аккаунт' },
  { id: 'concierge', label: 'AI Concierge' },
  { id: 'advisor', label: 'AI Advisor' },
] as const;

const mainCopy: Record<
  (typeof tabs)[number]['id'],
  { title: string; text: string }
> = {
  account: {
    title: 'Единый аккаунт для глобальных переводов',
    text: 'Управляйте фиатом и крипто, лимитами и статусами из одного профиля — без переключения между сервисами.',
  },
  concierge: {
    title: 'AI Concierge рядом 24/7',
    text: 'Ответы по маршрутам, срокам и документам — в чате, без ожидания линии поддержки.',
  },
  advisor: {
    title: 'AI Advisor for Business',
    text: 'Информационная аналитика по операциям и рискам — как подсказка для решений, не как инвестиционный совет.',
  },
};

export function PlatformFuture() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('account');

  const copy = mainCopy[active];

  return (
    <section
      id="platform"
      className={styles.section}
      aria-labelledby="platform-title"
    >
      <div className={styles.inner}>
        <h2 id="platform-title" className={styles.heading}>
          Платформа будущего
        </h2>

        <div
          className={styles.tabBar}
          role="tablist"
          aria-label="Разделы платформы"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              className={[styles.tab, active === t.id && styles.tabActive]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          <article className={styles.heroCard}>
            <div className={styles.heroPattern} aria-hidden />
            <Shield
              className={styles.shield}
              size={120}
              strokeWidth={1}
              aria-hidden
            />
            <div className={styles.heroContent}>
              <h3 className={styles.heroTitle}>{copy.title}</h3>
              <p className={styles.heroText}>{copy.text}</p>
              <a href="#calculator" className={styles.textLink}>
                Открыть аккаунт
                <ArrowUpRight size={18} />
              </a>
            </div>
          </article>

          <article className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Прозрачность заранее</h3>
            <p className={styles.sideText}>
              Курс, комиссия и время зачисления — до подтверждения перевода.
            </p>
          </article>

          <article className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Оптимальный маршрут</h3>
            <p className={styles.sideText}>
              Подбираем путь с учётом лимитов, юрисдикции и комплаенс-проверок.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
