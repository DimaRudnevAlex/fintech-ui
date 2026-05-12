import Image from 'next/image';

import { PillButton } from '@/(core)/widgets/landing/ui/PillButton';

import styles from './BannerCta.module.scss';

export function BannerCta() {
  return (
    <section className={styles.section} aria-labelledby="banner-title">
      <div className={styles.inner}>
        <div className={styles.banner}>
          <Image
            src="/assets/women.png"
            alt="Довольный клиент ARCKAT"
            fill
            className={styles.image}
          />
          <div className={styles.content}>
            <h2 id="banner-title" className={styles.title}>
              Пока вы используете несколько сервисов — вы теряете время и деньги
            </h2>
            <p className={styles.subtitle}>
              От первого перевода до комплексных задач — ARCKAT работает на
              результат.
            </p>
            <PillButton>Начать сейчас</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
