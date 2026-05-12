import Image from 'next/image';

import { ArrowUpRight } from 'lucide-react';

import { PillButton } from '@/(core)/widgets/landing/ui/PillButton';

import styles from './HeroArckat.module.scss';

export function HeroArckat() {
  return (
    <section className={styles.section} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.banner}>
          <div className={styles.left}>
            <h1 id="hero-title" className={styles.title}>
              ARCKAT — глобальные переводы и сервис в одном аккаунте без
              комиссий и задержек
            </h1>
            <PillButton>Попробовать сейчас</PillButton>
          </div>
          <div className={styles.right}>
            <div className={styles.imageWrap}>
              <Image
                src="/assets/herov2.png"
                alt="Клиент с смартфоном"
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </div>
            <div className={styles.glassRow}>
              <article className={styles.glassCard}>
                <a
                  href="#calculator"
                  className={styles.cardLink}
                  aria-label="Подробнее"
                >
                  <ArrowUpRight size={28} strokeWidth={2} />
                </a>
                <h2 className={styles.cardTitle}>
                  Фиат и крипто — единый поток средств
                </h2>
                <p className={styles.cardText}>
                  SWIFT, локальные сети и крипто в одном интерфейсе — без
                  разрозненных кабинетов.
                </p>
              </article>
              <article className={styles.glassCard}>
                <a
                  href="#platform"
                  className={styles.cardLink}
                  aria-label="Подробнее"
                >
                  <ArrowUpRight size={28} strokeWidth={2} />
                </a>
                <h2 className={styles.cardTitle}>
                  Ваш цифровой помощник без выходных
                </h2>
                <p className={styles.cardText}>
                  Документы, статусы и сервисные задачи — сопровождение в режиме
                  24/7.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
