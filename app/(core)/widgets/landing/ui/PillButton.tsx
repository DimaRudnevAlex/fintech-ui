import styles from "./PillButton.module.scss";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
  variant?: "primary" | "ghost";
};

export function PillButton({
  children,
  type = "button",
  className,
  variant = "primary",
}: Props) {
  return (
    <button
      type={type}
      className={[styles.root, styles[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
}
