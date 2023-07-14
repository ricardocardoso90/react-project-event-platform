import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div><span>Ignite Lab</span> | <h2>REACTJS</h2></div>
    </header>
  )
}