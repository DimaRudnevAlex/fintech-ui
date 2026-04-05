import Image from 'next/image';

import styles from './StandardsSplit.module.scss';

const TEAM_IMG =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80';

const features = [
  {
    title: 'Единый опыт',
    text: 'Один аккаунт вместо десятков сервисов: от перевода до результата — без лишних шагов и потерь времени.',
  },
  {
    title: 'Скорость',
    text: 'Никаких банковских задержек — переводы со скоростью цифрового мира.',
  },
  {
    title: 'Сервис, а не инструмент',
    text: 'Инновации не просто обещают — они доводят задачу до результата: от запроса до решения.',
  },
  {
    title: 'Доверие по умолчанию',
    text: 'Прозрачность и безопасность как базовый принцип, а не опция.',
  },
];

export function StandardsSplit() {
  return (
    <section className={styles.section} aria-labelledby="standards-title">
      <div className={styles.inner}>
        <h2 id="standards-title" className={styles.heading}>
          Новый стандарт финансового сервиса
        </h2>
        <div className={styles.split}>
          <div className={styles.visual}>
            <Image
              src="/assets/team.png"
              alt="Команда за работой"
              width={640}
              height={480}
              className={styles.image}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <ul className={styles.list}>
            {features.map((f) => (
              <li key={f.title} className={styles.item}>
                <span className={styles.bullet} aria-hidden />
                <div>
                  <h3 className={styles.itemTitle}>{f.title}</h3>
                  <p className={styles.itemText}>{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
