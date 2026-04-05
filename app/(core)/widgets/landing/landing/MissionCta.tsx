import { PillButton } from '@/(core)/widgets/landing/ui/PillButton';

import styles from './MissionCta.module.scss';

export function MissionCta() {
  return (
    <section className={styles.section} aria-labelledby="mission-title">
      <div className={styles.inner}>
        <div className={styles.card}>
          <h2 id="mission-title" className={styles.title}>
            Мы создаём единый стандарт глобальных финансов. Переводы и сервисы
            без границ — с уровнем внимания, который раньше был доступен только
            избранным.
          </h2>
          <PillButton>Присоединиться</PillButton>
        </div>
      </div>
    </section>
  );
}
