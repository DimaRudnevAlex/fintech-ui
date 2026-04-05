import { MessageCircle, Phone, Send } from "lucide-react";
import styles from "./SiteFooter.module.scss";

const legalLinks = [
  { href: "#", label: "Политика конфиденциальности" },
  { href: "#", label: "Политика использования файлов cookie" },
  { href: "#", label: "Согласие на обработку персональных данных" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.brand}>ARCKAT</p>
          <div className={styles.social} aria-label="Соцсети и контакты">
            <a href="tel:" className={styles.socialBtn} aria-label="Телефон">
              <Phone size={18} strokeWidth={2} />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="WhatsApp">
              <MessageCircle size={18} strokeWidth={2} />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Telegram">
              <Send size={18} strokeWidth={2} />
            </a>
          </div>
          <nav className={styles.nav} aria-label="Правовая информация">
            <ul>
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <p className={styles.copy}>© ARCKAT {new Date().getFullYear()}</p>
        </div>
        <div className={styles.right}>
          <p>
            ARCKAT не является банком. Услуги предоставляются в сотрудничестве с
            лицензированными партнёрами в соответствующих юрисдикциях.
          </p>
          <p>
            Доступность функций зависит от страны/юрисдикции, партнёров и результатов
            комплаенс-проверок.
          </p>
          <p>
            AI Concierge и AI Advisor for Business предоставляют информационную
            поддержку; материалы не являются юридической, налоговой или инвестиционной
            рекомендацией.
          </p>
        </div>
      </div>
    </footer>
  );
}
