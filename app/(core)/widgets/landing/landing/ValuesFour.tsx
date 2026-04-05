import styles from "./ValuesFour.module.scss";

const items = [
  {
    title: "Предсказуемость",
    text: "Фиксируем сроки и условия до отправки — без сюрпризов в процессе.",
  },
  {
    title: "Целостность",
    text: "Один контур данных и процессов от запроса до зачисления.",
  },
  {
    title: "Прозрачность",
    text: "Комиссии и маршрут видны заранее — сравнение с банками в один клик.",
  },
  {
    title: "Безопасность",
    text: "Комплаенс, партнёрские лицензии и контроль на каждом шаге.",
  },
];

export function ValuesFour() {
  return (
    <section className={styles.section} aria-labelledby="values-heading">
      <div className={styles.inner}>
        <h2 id="values-heading" className={styles.visuallyHidden}>
          Ценности
        </h2>
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.dot} aria-hidden />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
