import styles from './Button.module.scss'

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
}

export function Button({ icon, text }: ButtonProps) {
  return (
    <a href="#" className={styles.button}>
      {icon}
      {text}
    </a>
  )
}